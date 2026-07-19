# Rabindra Kumar Nayak — Portfolio

A modern, dark/light-themed personal portfolio built with React, Vite, Tailwind CSS,
and Framer Motion. Fully frontend — no backend required.

## Tech stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations & page transitions)
- React Icons
- Context API (theme management)
- EmailJS (contact form)

## Requirements
- Node.js version 18 or higher (Node 20 LTS recommended)
- npm (comes with Node.js)

Check your versions:
```bash
node -v
npm -v
```
If you don't have Node.js installed, download it from https://nodejs.org

## Running the project locally

1. **Unzip the project** and open a terminal in the project folder:
   ```bash
   cd rabindra-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal — usually:
   ```
   http://localhost:5173
   ```
   The site supports hot-reload: any code change updates the browser instantly.

5. **Build for production** (creates an optimized `dist/` folder):
   ```bash
   npm run build
   ```

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

## Project structure
```
rabindra-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── resume/
│       └── Rabindra_Kumar_Nayak_Resume.pdf   ← placeholder, replace with your real resume
├── src/
│   ├── assets/
│   │   └── images/profile.jpeg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Loader.jsx
│   │   └── SectionTitle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Things to personalize before you deploy

1. **Resume PDF** — replace `public/resume/Rabindra_Kumar_Nayak_Resume.pdf` with your
   actual resume, keeping the same file name (or update the path in `Hero.jsx` and
   `Resume.jsx` if you rename it).

2. **LinkedIn link** — search the project for `https://linkedin.com` (in `Hero.jsx`
   and `Footer.jsx`) and replace with your real profile URL.

3. **Project links** — in `src/components/Projects.jsx`, update the `demo` field for
   "Salon Master" and "Health Master" with your live deployment URLs once hosted
   (Vercel/Netlify), and update `github` if each project has its own repo.

4. **Configuring the contact form (EmailJS)**
   The contact form is wired for [EmailJS](https://www.emailjs.com) so it works
   without any backend server.

   - Create a free account at emailjs.com
   - Add an Email Service (e.g. Gmail) → copy the **Service ID**
   - Create an Email Template with variables `from_name`, `from_email`, `message` →
     copy the **Template ID**
   - Go to Account → General → copy your **Public Key**
   - Open `src/components/Contact.jsx` and replace:
     ```js
     const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
     const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
     const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'
     ```
     with your actual values.

   Until you do this, the form will simulate a successful submission so you can
   still test the UI — it just won't actually send an email.

5. **GitHub stats** — `GitHubStats.jsx` pulls live public data from the GitHub REST
   API for `rabinayak8848-ship-it`. Update the `USERNAME` constant if this changes.

## Deploying

This is a static site — you can deploy the `dist/` folder (after `npm run build`)
to any static host:

- **Vercel:** import the repo at vercel.com/new, framework preset "Vite", done.
- **Netlify:** drag-and-drop the `dist/` folder at app.netlify.com/drop, or connect
  the repo with build command `npm run build` and publish directory `dist`.
- **GitHub Pages:** run `npm run build`, then push the `dist/` folder contents to a
  `gh-pages` branch (or use the `gh-pages` npm package).

## Notes
- Dark mode is the default theme; the toggle in the navbar switches to light mode
  and remembers the choice in the browser via `localStorage`.
- The custom cursor and particle background are automatically disabled on small/touch
  screens for better mobile usability.
- All animations respect `prefers-reduced-motion` for accessibility.
