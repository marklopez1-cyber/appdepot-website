# AppDepot LLC — Website

Static marketing site for AppDepot LLC, a custom software & automation studio.

## Stack
Plain HTML/CSS/JS — no build step. Deploy as a static site.

## Structure
```
index.html          Landing page
404.html            Not-found page
favicon.svg         Icon
robots.txt          Crawl rules
sitemap.xml         Sitemap
_redirects          Sevalla/Netlify-style redirects
assets/css/styles.css
assets/js/main.js
deploy.sh           Commit + push helper (Sevalla auto-deploys)
```

## Local preview
```
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy
Pushing to the `main` branch on GitHub triggers an automatic Sevalla build & deploy.
```
bash deploy.sh "Describe your change"
```

### Sevalla static-site settings
- **Build command:** *(none)*
- **Publish directory:** `.` (repo root)

## Things to customize
- Contact email (`admin@appdepot.net`)
- Pricing/engagement details in the `#pricing` section
- Wire the contact form to a backend or form service (currently uses a `mailto:` fallback)
