# Piedrii B. Prado — Portfolio

React 19 + Vite portfolio site. Dark glassmorphism theme, Framer Motion animations, working contact form via EmailJS.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Editing content

Everything text-based (name, roles, socials, skills, projects, academic projects, certifications) lives in one place:

```
src/data/content.js
```

Edit that file to update anything on the site — no need to touch components.

To swap your profile photo, replace `src/assets/profile.png` (or update the import path in `src/sections/Hero.jsx`).

## Setting up the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) to send messages straight to your inbox with no backend. Until it's configured, submitting the form falls back to opening the visitor's email client instead.

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Add an Email Service** (e.g. connect your Gmail) — this gives you a **Service ID**.
3. **Create an Email Template** with these variables, matching the fields the form sends:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`

   Save it — this gives you a **Template ID**.
4. Go to **Account → API Keys** and copy your **Public Key**.
5. Open `src/data/content.js` and fill in:

   ```js
   export const emailConfig = {
     serviceId: "service_xxxxxxx",
     templateId: "template_xxxxxxx",
     publicKey: "xxxxxxxxxxxxxxxx",
   };
   ```

6. Rebuild/reload — the form will now send real emails. Free tier covers 200 emails/month, which is plenty for a portfolio.

## Certifications

`certifications` in `content.js` is intentionally empty until you have real ones to add. The section shows a clean "coming soon" state rather than fake entries — add objects like this once you have credentials:

```js
{ title: "Course Name", issuer: "Platform", year: "2026", link: "https://..." }
```

## Tech stack

- React 19 + Vite
- Framer Motion (animations)
- React Icons
- @emailjs/browser (contact form)
- Plain CSS with a shared design-token system in `src/index.css`
