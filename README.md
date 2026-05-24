# Meta Equity Partners — Website

Marketing site for [Meta Equity Partners](https://www.metaequity.partners) — uniting innovation and capital to create equity.

## Stack

Plain HTML / CSS / JS. No build step. Deploys to Vercel as static.

## Pages

- `index.html` — Home (hero, focus areas, philosophy, stats, team preview, CTA)
- `focus.html` — Real Estate · MedTech · Acquisitions · Digital
- `team.html` — Full team roster
- `contact.html` — Contact form (mailto fallback to contact@metaequity.partners)
- `privacy.html` — Privacy Policy

## Local preview

Any static server works:

```
python3 -m http.server 8080
```

Open http://localhost:8080.

## Deploy

Vercel project: `metaequity-partners`.

```
npx vercel --prod --yes
```
