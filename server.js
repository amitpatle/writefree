:root{--bg:#fafaf7;--card:#fff;--text:#1d1d1f;--muted:#6b6b72;--accent:#5b4bff;--border:#e6e6ea;--shadow:0 4px 18px rgba(0,0,0,.06)}
:root[data-theme=dark]{--bg:#0f0f14;--card:#181820;--text:#f1f1f5;--muted:#9a9aa8;--accent:#8b7dff;--border:#2a2a36;--shadow:0 4px 18px rgba(0,0,0,.4)}
*{box-sizing:border-box;margin:0}
body{font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);color:var(--text);line-height:1.5}
a{color:var(--accent)}
.hero{padding:1.25rem 1.25rem 2.5rem;text-align:center;background:radial-gradient(1000px 300px at 50% -50%,color-mix(in srgb,var(--accent) 25%,transparent),transparent)}
.nav{display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:0 auto 2.5rem}
.logo{font-weight:800;font-size:1.2rem}
#theme{background:var(--card);border:1px solid var(--border);border-radius:50%;width:40px;height:40px;cursor:pointer;font-size:1.1rem}
h1{font-size:clamp(2rem,6vw,3.6rem);line-height:1.1;letter-spacing:-.03em}
h1 span{color:var(--accent)}
.hero p{color:var(--muted);margin:.8rem auto 1.5rem;max-width:520px}
#search{width:min(520px,100%);padding:.9rem 1.2rem;border-radius:999px;border:1px solid var(--border);background:var(--card);color:var(--text);font-size:1rem;box-shadow:var(--shadow)}
#search:focus{outline:2px solid var(--accent)}
main{max-width:1100px;margin:0 auto;padding:0 1.25rem 3rem}
.filters{display:flex;gap:.5rem;overflow-x:auto;padding:.5rem 0 1rem;scrollbar-width:none}
.chip{white-space:nowrap;padding:.45rem 1rem;border-radius:999px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;font-size:.9rem}
.chip.active{background:var(--accent);border-color:var(--accent);color:#fff}
.count{color:var(--muted);font-size:.9rem;margin-bottom:1rem}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem}
.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:1.2rem;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:.5rem;transition:transform .15s}
.card:hover{transform:translateY(-3px)}
.top{display:flex;justify-content:space-between;align-items:center}
.tag{font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--accent);font-weight:700}
.fav{background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--muted)}
.fav.on{color:#ff4d6d}
.card h3{font-size:1.1rem}
.card p{color:var(--muted);font-size:.92rem;flex:1}
.visit{align-self:flex-start;text-decoration:none;font-weight:600;font-size:.92rem}
.empty,footer{text-align:center;color:var(--muted);padding:1rem}
footer{border-top:1px solid var(--border);padding:2rem 1rem;font-size:.9rem}
@media(max-width:500px){.grid{grid-template-columns:1fr}}
