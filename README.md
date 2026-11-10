# WABI SABI TRADITIONAL RECIPES

A responsive, editorial-style culinary social club website built with Next.js App Router, React, TypeScript, Tailwind CSS 4 and lucide-react.

## Requirements

- Node.js 20.9 or later
- npm 10+ (or pnpm / bun)

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm start
```

## Included

- Responsive navigation with mobile menu and sticky glass-effect header
- Full-bleed hero using the supplied Cloudinary image
- Philosophy, signature formats, 11-dish menu gallery and 28-image Lokato gallery
- Social Club, Wabisabi Spices, FAQ accordion, contact details and footer
- WhatsApp floating contact link
- Inline SVG Instagram and Facebook brand marks (no lucide-react social icon imports)
- Open Graph, Twitter card, robots metadata and Organization JSON-LD
- Lazy-loaded Next.js images with descriptive alt text
- Scroll reveal effects with reduced-motion support

## Brand assets and links

All supplied image URLs are referenced directly from Cloudinary. The WhatsApp number, email address and social links are centralized in `lib/site-data.ts` for easy edits.

## Deployment

The project is a standard Next.js application. Deploy it to a Node.js-compatible host such as Vercel or your preferred Next.js hosting provider. Set the production domain in your hosting provider once it is available; a canonical URL has intentionally not been hard-coded.
