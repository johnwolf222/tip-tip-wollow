# Tip Top Willow’s GitHub Site

A standalone static website for Tip Top Willow’s Restaurant. This version does **not** need Squarespace to run.

## What this includes

- Mobile-first restaurant homepage
- Menu tabs powered by `data.js`
- Order links for Uber Eats and DoorDash
- Call-ahead buttons
- Directions buttons
- Catering call-note form
- Gallery, reviews, FAQ, hours, and local SEO schema
- Sticky mobile action bar: Menu / Order / Call / Directions
- `CNAME` file for `tiptopwillows.com`
- `robots.txt` and `sitemap.xml`

## Edit restaurant content

Most restaurant changes happen in:

```txt
data.js
```

Update:

- Hours
- Menu items and prices
- Phone number
- Address
- DoorDash / Uber Eats links
- Social links
- Image URLs
- Featured special
- Optional lunch special

## Important launch notes

1. Confirm the correct hours before launch.
   - The existing site footer says Monday closed and Tuesday–Sunday 11 AM–8 PM.
   - Uber Eats currently shows Sunday 11 AM–7 PM and Tuesday–Saturday 11 AM–8 PM.
2. Replace the Instagram and Facebook placeholders in `data.js` with the real restaurant social links.
3. The current images are pulled from the existing Squarespace CDN. Before canceling Squarespace, download the final approved images into the `/assets` folder and update `data.js` to point to local files such as:

```js
hero: "assets/hero-brown-stew.jpg"
```

4. The catering form is intentionally static. It creates a clean note for the customer to copy/use when calling. Add Formspree, Netlify Forms, Supabase, or a custom backend later if the restaurant wants lead capture.

## Fast GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Go to the repository settings.
4. Open **Pages**.
5. Set source to the main branch root.
6. Save.
7. GitHub will publish a temporary link first.
8. Test the temporary link before switching the domain.

## Custom domain

This folder includes a `CNAME` file with:

```txt
tiptopwillows.com
```

Only connect the domain after the new site is approved. Do not cancel Squarespace until the new site is live and tested.

## Recommended next upgrades

- Local image assets instead of remote Squarespace CDN images
- Real social links
- Real catering email or backend form
- Google Business Profile review link
- Menu PDF download button
- Holiday hours banner
- Online ordering provider integration if the restaurant moves beyond DoorDash/Uber Eats
