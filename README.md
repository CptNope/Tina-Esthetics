# Tinaesthetics by Dr. Vo — Official Web Application & Brandbook

> **Personalized aesthetic and wellness care designed to help you look and feel your best.**  
> Practiced with education, transparency, and clinical excellence by **Dr. Tina Vo (Doctoral Nurse Practitioner & Aesthetic Injector)** in Worcester, Massachusetts.

---

## 📑 Table of Contents
1. [Practice Overview & Live Links](#-practice-overview--live-links)
2. [Brandbook & Design System](#-brandbook--design-system)
   - [Brand Mission & Core Values](#brand-mission--core-values)
   - [Brand Voice & Tone](#brand-voice--tone)
   - [Official Color Palette](#official-color-palette)
   - [Typography System](#typography-system)
   - [Brand Imagery & Photography Guidelines](#brand-imagery--photography-guidelines)
   - [Logomark & Monogram Usage](#logomark--monogram-usage)
3. [Clinical Services & Pricing Architecture](#-clinical-services--pricing-architecture)
4. [GitHub Pages Deployment Guide](#-github-pages-deployment-guide)
   - [Option A: Automatic Deployment via GitHub Actions (Recommended)](#option-a-automatic-deployment-via-github-actions-recommended)
   - [Option B: Deploy from Branch (`gh-pages` or `main`)](#option-b-deploy-from-branch-gh-pages-or-main)
   - [Base Path Configuration](#base-path-configuration)
5. [Local Development & Build](#-local-development--build)

---

## 🌐 Practice Overview & Live Links

| Property | Details |
| :--- | :--- |
| **Practice Name** | Tinaesthetics by Dr. Vo |
| **Provider** | Dr. Tina Vo, Doctoral Nurse Practitioner (DNP, FNP-BC) & Aesthetic Injector |
| **Clinical Scope** | Primary Care & Medical Aesthetics |
| **Education** | UMass Chan Medical School Graduate |
| **Physical Address** | 1086 Pleasant Street, Worcester, MA 01602 (Tatnuck / West Worcester) |
| **Direct Phone / SMS** | `872-222-9332` *(Text message preferred)* |
| **Official Email** | `DrVoAesthetics@gmail.com` |
| **Live Square Booking** | [https://tinaesthetics.square.site/](https://tinaesthetics.square.site/) |
| **Current Wix Website** | [https://www.tinaestheticsbydrvo.com/](https://www.tinaestheticsbydrvo.com/) |
| **Instagram** | [@TinaestheticsByDrVo](https://www.instagram.com/tinaestheticsbydrvo/) |
| **Facebook** | [facebook.com/tinaestheticsbydrv](http://facebook.com/tinaestheticsbydrv) |

---

## 🎨 Brandbook & Design System

### Brand Mission & Core Values
*“My approach is centered around education, transparency, and personalized care, ensuring that every treatment plan is tailored to your goals and comfort. My goal is to create a welcoming experience where clients feel informed, supported, and naturally refreshed.”* — Dr. Tina Vo

- **Education First**: Never pressure or rush. Empower clients with physiological understanding of facial anatomy and treatment timelines.
- **Transparency**: Upfront pricing ($13/unit neurotoxin, $450 mini-plump, $99 weight loss consult). No surprise charges.
- **Personalized Refinement**: Tailor dosing to preserve expressive facial mobility. Enhance natural symmetry rather than creating overfilled distortions.
- **Dual Medical Competence**: Grounded in university doctoral medical training and primary care practice.

---

### Brand Voice & Tone
- **Warm Minimalist**: Clean, sophisticated, uncluttered, and welcoming.
- **Clinical Rigor without Intimidation**: Evidence-based medical authority balanced by approachable, empathetic dialogue.
- **Restrained & Conservative**: Championing natural, undetectable outcomes where friends notice radiant wellness, not injected filler.

---

### Official Color Palette

| Color Name | HEX Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| **Warm Alabaster** | `#FCF9F3` | `rgb(252, 249, 243)` | Primary application canvas, body background |
| **Warm Sand / Linen** | `#FAF7F2` | `rgb(250, 247, 242)` | Secondary section panels, card containers |
| **Deep Charcoal** | `#1C1C1A` | `rgb(28, 28, 26)` | Primary headings, dark buttons, footers, high-contrast borders |
| **Soft Charcoal** | `#4A4946` | `rgb(74, 73, 70)` | Body text, subheadings, labels |
| **Muted Ash** | `#716E65` | `rgb(113, 110, 101)` | Secondary descriptive text, captions, metadata |
| **Warm Rose Gold** | `#C59B8B` | `rgb(197, 155, 139)` | Primary brand accent, button highlights, icons, active tab lines |
| **Deep Terracotta** | `#795649` | `rgb(121, 86, 73)` | Secondary accent, badges, serif subheadings |
| **Sage Wash** | `#EAEFE9` | `rgb(234, 239, 233)` | Trust badges, verification pills, medical qualification indicators |
| **Muted Sage** | `#6C7A6D` | `rgb(108, 122, 109)` | Checkmarks, clinical credential icons |
| **Subtle Border** | `#E6E1D8` | `rgb(230, 225, 216)` | Card outlines, dividers, input borders |

---

### Typography System

- **Primary Display Serif**: `Playfair Display` (Google Fonts)
  - *Weights*: Medium (500), SemiBold (600), Italic (400)
  - *Usage*: Main hero headlines, section titles, provider name, treatment card headings.
  - *Styling*: Refined letter-spacing (`tracking-tight`), editorial look and feel.
- **Body & UI Sans-Serif**: `Plus Jakarta Sans` (Google Fonts)
  - *Weights*: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)
  - *Usage*: Body copy, navigation links, buttons, specifications matrix, forms.
  - *Styling*: High legibility, neutral-warm geometry.
- **Clinical Monospace**: `JetBrains Mono` / System monospace
  - *Usage*: Unit pricing ($13/unit), confirmation ticket IDs, treatment specifications (downtime/duration).

---

### Brand Imagery & Photography Guidelines
- **Real Headshots**: Use Dr. Tina Vo's authentic, professional medical portrait (`Vo_headshot_edited.png` via static Wix CDN or local asset).
- **Authentic Outcomes**: Standardized medical photography under consistent clinical illumination.
- **Zero Distortion**: No digital beauty filters, AI-generated synthetic faces, or skin-smoothing blur. Show real pore texture and authentic collagen renewal.

---

### Logomark & Monogram Usage
```
T I N A E S T H E T I C S
  B Y   D R .   T I N A   V O
     W O R C E S T E R ,   M A
```
- Tracking: Wide uppercase tracking (`0.16em` to `0.25em`)
- Accent: Delicate warm rose-gold divider bullet (`#C59B8B`)

---

## 💉 Clinical Services & Pricing Architecture

| Service | Protocol / Formula | Verified Pricing | Notes |
| :--- | :--- | :--- | :--- |
| **Neurotoxins** | Daxxify, Botox®, Dysport®, Xeomin® | **$13 / unit** | Forehead, Glabella (11s), Crow's feet, Masseters, Lip flip, Hyperhidrosis |
| **Lip Filler** | Hyaluronic Acid (Mini Plump) | **$450** | Subtle shape, hydration & symmetry |
| **Lip Filler** | Hyaluronic Acid (Full Plump) | **$650** | Full volume, crisp border definition |
| **Cheek Filler** | Hyaluronic Acid | **Starts at $750** | Additional syringe: $500 each |
| **Jawline & Chin** | Hyaluronic Acid | **Starts at $750** | Additional syringe: $500 each |
| **Medical Microneedling** | Automated + V-Tech PDRN & Exosomes | **$500 / session** | Series of 3: **$1,350** (Save $150) |
| **PRP Rejuvenation** | 100% Autologous Platelet-Rich Plasma | **$500 / session** | Under-eye dark circles & scalp hair density |
| **Medical Weight Loss** | Comprehensive Evaluation | **$99** | Applied toward 1st month upon initiation |
| **GLP-1 Program** | Semaglutide / Tirzepatide Protocol | **Starts at $300 / mo** | Includes medication, 4 injections/mo, clinician check-ins |
| **Vitamin B12** | Weekly Bioactive B12 (1ml) | **$25 / injection** | Upper-arm intramuscular delivery |
| **Vitamin B12** | Monthly Bioactive B12 (3ml) | **$40 / injection** | High-dose energy & metabolic support |

---

## 🚀 GitHub Pages Deployment Guide

This project is built with **Vite 8**, **React 19**, and **Tailwind CSS v4**. It is pre-configured with **relative base asset paths (`base: './'`)** and **hash-based routing**, making it **100% compatible with GitHub Pages out of the box**.

### Option A: Automatic Deployment via GitHub Actions (Recommended)

A workflow file is already included at `.github/workflows/deploy.yml`.

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy Tinaesthetics website"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. That's it! GitHub Actions will automatically install dependencies, build the project with `npm run build`, and deploy your live site to `https://<username>.github.io/<repo-name>/`.

---

### Option B: Deploy from Branch (`gh-pages` or `main`)

If you have GitHub Pages configured to **"Deploy from a branch"**:

#### Deploying `dist` folder to a `gh-pages` branch:
1. Build the production files:
   ```bash
   npm run build
   ```
2. Push the generated `dist` folder to the `gh-pages` branch using `gh-pages` helper or git worktree:
   ```bash
   # Using npx gh-pages
   npx gh-pages -d dist
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Choose the branch **`gh-pages`** and folder **`/ (root)`**, then click **Save**.

#### If deploying directly from the `main` branch with `/docs`:
You can configure Vite to output directly to `docs`:
1. In `package.json`, set your build script: `"build": "vite build --outDir docs"`
2. Run `npm run build`
3. Commit and push the `docs/` folder to `main`.
4. In GitHub Settings → Pages, select **Branch: main** and **Folder: /docs**.

---

### Base Path Configuration

In `vite.config.ts`:
```typescript
export default defineConfig(() => {
  return {
    base: './', // Ensures all scripts and stylesheets load with relative URLs
    plugins: [react(), tailwindcss()],
    // ...
  };
});
```
Because `base: './'` is used:
- The site works whether accessed at a sub-path (`https://user.github.io/tinaesthetics/`) or on a custom domain (`https://www.tinaestheticsbydrvo.com/`).
- Assets like `./assets/index-CvmnINmf.js` and `./assets/index-DFoUcPzu.css` resolve with zero 404 errors.
- `public/404.html` is provided as an SPA fallback.

---

## 💻 Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (Port 3000)
npm run dev

# 3. Type check & lint
npm run lint

# 4. Build for production (outputs to /dist)
npm run build

# 5. Preview the production build locally
npm run preview
```

---

*© Tinaesthetics by Dr. Vo. 1086 Pleasant Street, Worcester MA 01602. All rights reserved.*
