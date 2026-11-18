# Prosper Nemaungwe Technologies website

A responsive single-page services website built with Vite.

## Run locally
1. Install Node.js (18+ recommended).
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown in the terminal.

## Build
Run `npm run build`. The production website is generated in `dist/`.

## Deploy to Vercel
1. Create a new GitHub repository and upload these project files.
2. Import that repository into Vercel.
3. Use the default Vite settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Vercel will provide a free `*.vercel.app` address.

## Before publishing — important edits
- In `src/main.js`, replace `hello@yourdomain.co.zw` with your real business email in both the contact details and the `mailto:` form action.
- Add your WhatsApp number and a WhatsApp contact link when you are ready.
- Add your own project screenshots and confirm each portfolio description reflects the exact work you want to publish.
- Add your preferred business contact details and social links.

The contact form currently prepares an email in the visitor's email application. It does not store or submit enquiries to a server.
