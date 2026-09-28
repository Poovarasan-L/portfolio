# Poovarasan L - Full-Stack Software Engineer Portfolio

A modern, high-performance, glassmorphic developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Pre-configured with automated **GitHub Pages CI/CD** deployment.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the live site with instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 How to Host on GitHub Pages

There are **two ways** to host this portfolio on GitHub Pages. The recommended way is **Automated GitHub Actions (Option 1)**.

### Option 1: Automated CI/CD with GitHub Actions (Recommended)

This repository already includes `.github/workflows/deploy.yml`. Whenever you push code to your `main` branch, GitHub will automatically build and publish your site!

#### Step 1: Create a new repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Choose a repository name:
   - For a user site: `Poovarasan-L.github.io` (URL will be `https://poovarasan-l.github.io/`)
   - Or a project site: `portfolio` (URL will be `https://poovarasan-l.github.io/portfolio/`)
3. Leave it **Public** and do **not** check "Initialize with README".
4. Click **Create repository**.

#### Step 2: Push your local code to GitHub
In PowerShell or terminal inside this portfolio directory:
```bash
git init
git add .
git commit -m "Initial commit: Poovarasan L portfolio"
git branch -M main
git remote add origin https://github.com/Poovarasan-L/<YOUR-REPO-NAME>.git
git push -u origin main
```
*(Replace `<YOUR-REPO-NAME>` with your repository name, e.g. `portfolio` or `Poovarasan-L.github.io`)*

#### Step 3: Enable GitHub Pages in your repository settings
1. On GitHub, navigate to your repository -> **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - Change **Source** from *Deploy from a branch* to **GitHub Actions**.
4. That's it! GitHub Actions will trigger immediately. In 1–2 minutes, your website will be live.

---

### Option 2: 1-Click Terminal Deployment (`gh-pages`)

If you prefer to deploy directly from your local computer without waiting for CI:
```bash
npm run deploy
```
This builds your project and automatically pushes the `dist/` folder to the `gh-pages` branch on your GitHub repository.

Then in **Settings** -> **Pages**:
- Source: **Deploy from a branch**
- Branch: **gh-pages** / `/ (root)`
- Click **Save**.

---

## ⚙️ Custom Domain Setup (e.g. `poovarasan.is-a.dev`)

If you want to attach a custom domain like `poovarasan.is-a.dev`:
1. In repository **Settings** -> **Pages** -> **Custom domain**:
2. Type `poovarasan.is-a.dev` and click **Save**.
3. In your DNS or domain registry file (e.g., `Poovarasan-L/register`), point the CNAME record to `poovarasan-l.github.io`.
4. Check **Enforce HTTPS**.

---

## 🛠️ How to Customize Your Content

All data (bio, skills, projects, links, contact info) is kept in **one central file**:
👉 [`src/data/portfolioData.js`](./src/data/portfolioData.js)

- **Change Name & Bio**: Update `personal.name`, `personal.role`, and `personal.bio`.
- **Add Your Resume PDF**: Drop your `resume.pdf` into the `public/` folder, and change `personal.resumeUrl` to `/resume.pdf`.
- **Add / Edit Projects**: Add or modify objects in `projects` array with your actual GitHub links and live demos.
- **Update Skills**: Add or edit skills in `skillCategories`.

---

## 🎨 Tech Stack & Features
- **React 18**: Component architecture.
- **Vite**: Ultra-fast build tool and local dev server.
- **Tailwind CSS**: Glassmorphic dark design system with glowing accents.
- **Lucide Icons**: Crisp, lightweight vector iconography.
- **Relative Asset Resolution (`base: './'`)**: Works on any path, subdomain, or domain without 404 broken asset links.
