# mathesh.dev

Personal site. Plain static HTML and CSS, no build step.

- `index.html` - the page
- `style.css` - styles (light/dark via prefers-color-scheme)
- `CNAME` - custom domain for GitHub Pages

## Local preview

Open `index.html` in a browser, or:

    python3 -m http.server

## Deploy

Served by GitHub Pages from this repo's default branch. DNS for the apex
domain points at GitHub's Pages IPs (set at the registrar).
