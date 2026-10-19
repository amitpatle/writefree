(() => {
  const $ = (id) => document.getElementById(id);
  const grid = $("grid"), filters = $("filters"), search = $("search");
  let all = [], category = "All";
  const safe = (fn, fallback) => { try { return fn(); } catch { return fallback; } };
  const favs = new Set(safe(() => JSON.parse(localStorage.getItem("favs") || "[]"), []));

  const root = document.documentElement;
  root.dataset.theme = safe(() => localStorage.getItem("theme"), null) ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  $("theme").onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    safe(() => localStorage.setItem("theme", root.dataset.theme));
  };

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  };

  function card(r) {
    const c = el("article", "card");
    const top = el("div", "top");
    const fav = el("button", "fav" + (favs.has(r.id) ? " on" : ""), "♥");
    fav.setAttribute("aria-label", "Save " + r.name);
    fav.onclick = () => {
      favs.has(r.id) ? favs.delete(r.id) : favs.add(r.id);
      safe(() => localStorage.setItem("favs", JSON.stringify([...favs])));
      fav.classList.toggle("on");
    };
    const isNew = r.added && (Date.now() - new Date(r.added)) < 30 * 864e5;
    const left = el("span", "tag", r.category);
    if (isNew) left.append(el("span", "new", "NEW"));
    top.append(left, fav);
    const a = el("a", "visit", "Visit →");
    a.href = r.url; a.target = "_blank"; a.rel = "noopener noreferrer";
    c.append(top, el("h3", "", r.name), el("p", "", r.description), a);
    return c;
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = all.filter((r) =>
      (category === "All" || (category === "Saved" ? favs.has(r.id) : r.category === category)) &&
      (!q || (r.name + " " + r.description + " " + r.category).toLowerCase().includes(q)));
    grid.replaceChildren(...list.map(card));
    $("count").textContent = list.length + " resource" + (list.length === 1 ? "" : "s");
    $("empty").hidden = list.length > 0;
  }

  function buildFilters() {
    const cats = ["All", ...new Set(all.map((r) => r.category)), "Saved"];
    filters.replaceChildren(...cats.map((c) => {
      const b = el("button", "chip" + (c === category ? " active" : ""), c);
      b.onclick = () => { category = c; buildFilters(); render(); };
      return b;
    }));
  }

  search.addEventListener("input", render);
  fetch("data/resources.json")
    .then((r) => r.json())
    .then((d) => { all = d; buildFilters(); render(); })
    .catch(() => { $("count").textContent = "Could not load resources."; });
})();
