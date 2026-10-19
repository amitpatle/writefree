// Optional REST API: GET /api/resources?category=Learn&q=grammar
const express = require("express");
const path = require("path");
const resources = require("./public/data/resources.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/resources", (req, res) => {
  const { category, q } = req.query;
  const term = String(q || "").toLowerCase();
  const out = resources.filter((r) =>
    (!category || r.category.toLowerCase() === String(category).toLowerCase()) &&
    (!term || `${r.name} ${r.description}`.toLowerCase().includes(term)));
  res.set("Access-Control-Allow-Origin", "*").json({ count: out.length, resources: out });
});

app.get("/api/categories", (_req, res) =>
  res.json([...new Set(resources.map((r) => r.category))]));

app.listen(PORT, () => console.log(`WriteFree running on http://localhost:${PORT}`));
