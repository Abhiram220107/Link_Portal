# IEEE CODE F1 • Participant Link Portal

A clean, responsive, mobile-first static link portal for **IEEE CODE F1**.

This portal provides **one permanent website URL** that participants access through a single QR code. When your temporary Cloudflare Tunnel URLs (`*.trycloudflare.com`) change, update the links in the single configuration file, redeploy, and participants will immediately access the new URLs using the exact same QR code.

---

## ⚡ How to Change Cloudflare URLs

When your Cloudflare Tunnel restarts and issues a new URL:

1. Open:
   ```text
   src/config/links.js
   ```

2. Update the three destination URLs:
   ```javascript
   // ==================================================
   // CHANGE THESE LINKS WHEN THE CLOUDFLARE URL CHANGES
   // ==================================================

   export const LINKS = {
     coding: "https://your-new-tunnel.trycloudflare.com/contest",
     attendance: "https://forms.gle/your-attendance-form",
     rules: "https://your-domain.com/rules"
   };
   ```

3. Build and redeploy:
   ```bash
   npm run build
   ```
   Push to GitHub/Vercel.

> **Important**: The permanent website URL and participant QR code **never need to change**.

---

## 📱 Generating the Permanent QR Code

1. Deploy the website to Vercel (or your custom domain) to get your permanent URL, e.g.:
   ```text
   https://codef1-links.vercel.app
   ```
2. Generate a QR code pointing **ONLY** to this permanent URL:
   - Use any QR generator (e.g. [qr-code-generator.com](https://www.qr-code-generator.com/) or `qrencode`).
3. Print or project this QR code on event badges, posters, and screens.
4. **Never put temporary Cloudflare URLs directly into the QR code.**

---

## 💻 Commands

### 1. Installation
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` to preview the page.

### 3. Production Build
```bash
npm run build
```
Generates the optimized static website in `dist/`.

---

## 🚀 Vercel Deployment

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New > Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (detected automatically).
5. Click **Deploy**.
6. No environment variables, databases, or backend servers are needed.

Whenever you push changes to `src/config/links.js`, Vercel will automatically redeploy the site in seconds.

---

## 📂 Project Structure

```text
Links/
├── public/
│   ├── logos/              # Logo files (ieee-smc.svg, kare.svg, scrs.svg)
│   └── favicon.svg         # F1 racing favicon
├── src/
│   ├── config/
│   │   ├── links.js        # 👈 THE ONLY FILE TO EDIT FOR DESTINATIONS
│   │   └── links.d.ts
│   ├── components/
│   │   ├── Header.tsx      # Event branding & logo placeholders
│   │   ├── LinkButton.tsx  # 55-65px mobile touch buttons & error states
│   │   └── Footer.tsx      # Organization credits
│   ├── App.tsx             # Main mobile-first layout
│   ├── main.tsx
│   └── index.css           # Formula 1 styling & typography
├── index.html
├── package.json
└── README.md
```

---

## 🎨 Logos Customization

To replace placeholder logos with official PNG/SVG files:
- Place your image files in `public/logos/` (e.g., `ieee-smc.svg`, `kare.svg`, `scrs.svg`).
- If any logo image is missing, the portal gracefully falls back to text badges without breaking the layout.
