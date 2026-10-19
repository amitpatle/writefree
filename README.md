# ✍️ WriteFree

A clean, mobile-friendly website (plus REST API) that helps beginners find **free** resources to start and grow their writing.

## Features
- Search, category filters, dark mode, saved favourites
- All resources live in one file: `public/data/resources.json`
- Optional Node/Express API
- Auto-deploy to GitHub Pages on every push

## Run locally
```bash
npm install
npm start        # http://localhost:3000
```

## API
| Endpoint | Description |
|---|---|
| `GET /api/resources?category=Learn&q=grammar` | Filter resources |
| `GET /api/categories` | List categories |

## Deploy
Repo Settings → Pages → Source: **GitHub Actions**. Push to `main`.

## Add a resource
Edit `public/data/resources.json` and open a pull request.

## Sponsor
Hosting and tooling cost money. Sponsorship helps me improve the site and add features.

MIT License
