# bzmt

BodyZen Muscular Therapy (Production-ready Vercel/Netlify build)

Fast, SEO-focused React + Vite site with:
- React Router pages
- SEO per-page via react-helmet-async
- LocalBusiness + FAQ schema JSON-LD
- Netlify redirects (SPA) + Vercel rewrites (SPA)
- Bright, athlete-friendly design tokens
- Inline SVG bonsai logo

## Quick start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects included in `public/_redirects`

### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites in `vercel.json`
