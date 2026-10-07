# MEDITECH — Healthcare Website

A responsive, self-contained healthcare company concept made with HTML, CSS and JavaScript. No build step, installation, database or backend is required. All assets use relative paths and work under a GitHub Pages repository subdirectory.

## Open locally

Open `index.html` in your browser. All website features also work through any static web server.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Extract the ZIP and upload its contents, including `index.html`, `assets`, and `.nojekyll`, directly to the repository root.
3. Open repository Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select `main` and `/(root)` and save.
6. Wait for deployment, then open the generated GitHub Pages URL.

## Structure

- `index.html` — page structure, navigation, hero, contact form and footer.
- `assets/css/style.css` — responsive design and reduced-motion support.
- `assets/js/main.js` — company configuration, products, solutions, services, dialogs, filters and form integration.
- `assets/images/medical-hero.png` — supplied reference image, preserved without distortion.
- `.nojekyll` — static hosting marker.

## Customize

Change `siteConfig.companyName` in `main.js` for the rendered company name and browser title. Update the static title, description and fallback brand text in `index.html` for search engines and no-JavaScript views. The logo mark, hero text, navigation and contact introduction are in `index.html`. Product, solution and service data are arrays in `main.js`. Colors and spacing are CSS custom properties and rules in `style.css`.

## Contact form and future integration

The form validates fields but does not transmit or store data. `submitContactForm(data)` is the integration point for a future public HTTPS endpoint. Implement server-side validation, abuse controls and appropriate privacy practices on your backend. Never add credentials or private API keys to frontend files. Product data can be fetched from a REST API before calling the rendering function.

## Content and assets

This is a company concept, with illustrative product and service content. No customer counts, certifications, reviews or historical claims are invented. The metric strip describes the site's approach and six solution categories. Careers, news, documentation and social controls open honest informational dialogs until real company content is supplied. Replace those dialogs with verified destinations when available. Privacy and terms text describe the demonstration and need business-specific review before commercial launch.

The hero uses the image supplied with the brief, including its existing marks. Confirm permission to use that image publicly or replace it with a licensed asset before commercial publication. All other graphics are inline SVG/CSS or system characters. No external fonts, libraries or image hosts are required.
