# iHash Studios – Official Business Website

Official corporate website for **iHash Studios**, modern software development studio.

> **Tagline:** INNOVATION THROUGH SOFTWARE  
> **Brand Colours:** Primary Blue (`#245BFF`), Secondary Purple (`#7628E8`), Dark Navy (`#0D132A`), Text (`#141B33`), Background (`#F8FAFF`).

---

## 🚀 Technology Stack

- **Framework:** React 18 / Next.js 14 (App Router)
- **Language:** TypeScript 5 (Strict type safety)
- **Styling:** Tailwind CSS (Custom brand tokens, gradients, and subtle shadows)
- **Icons:** Lucide React
- **Animations:** Purposeful CSS transitions & Framer Motion ready

---

## 📁 Project Architecture

```
d:\WebApp\iHashStudios\
├── public/
│   ├── logo.svg               # Official brand logo (vector)
│   ├── logo-white.svg         # Official brand logo (white variant for dark footer)
│   └── logo-mark.svg          # Square logo monogram for favicon & app icon
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with SEO metadata, Navbar & Footer
│   │   ├── globals.css        # Tailwind styles, tech grid patterns & scrollbars
│   │   ├── page.tsx           # Home Page (Hero, Services, Why Us, Process, Tech Stack, CTA)
│   │   ├── services/
│   │   │   └── page.tsx       # Dedicated Services Page (Detailed 6 services, problem solving, mockups)
│   │   ├── work/
│   │   │   └── page.tsx       # Portfolio / Case Studies (Garment Software, Portals, Core Management)
│   │   ├── about/
│   │   │   └── page.tsx       # About Us (Mission, Vision, Engineering Philosophy, Approach, Quality Guarantee)
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact Page (Validated inquiry form, WhatsApp quick-chat, direct channels)
│   │   ├── sitemap.ts         # Dynamic XML Sitemap generator
│   │   ├── robots.ts          # Search engine crawler instructions
│   │   └── icon.tsx           # Dynamic favicon generator matching official brand monogram
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky navigation with blur effect, mobile drawer, CTA
│   │   │   └── Footer.tsx     # Dark Navy footer with logo, links, WhatsApp & Instagram
│   │   ├── ui/
│   │   │   ├── BrandLogo.tsx  # Dedicated logo component maintaining exact proportions & colors
│   │   │   ├── Button.tsx     # Brand gradient buttons with hover lift & loading states
│   │   │   ├── Badge.tsx      # Status pills and technology labels
│   │   │   └── SectionHeader.tsx # Standardized typography header
│   │   ├── home/
│   │   │   ├── Hero.tsx       # Main hero with primary & secondary CTAs
│   │   │   ├── HeroIllustration.tsx # Custom Windows desktop & cloud portal visual mockup
│   │   │   ├── ServicesSection.tsx  # 4 core service cards with capability lists
│   │   │   ├── WhyChooseUs.tsx      # 6 core differentiators in clean visual cards
│   │   │   ├── ProcessSection.tsx   # 5-step interactive process timeline (01 to 05)
│   │   │   ├── TechStackSection.tsx # Filterable technology stack cards
│   │   │   └── CtaSection.tsx       # High-conversion gradient CTA card
│   │   └── contact/
│   │       └── ContactForm.tsx # Integration-ready inquiry form with client validation
│   ├── config/
│   │   └── site.ts            # Central configuration for contact details, social links, navigation
│   ├── data/
│   │   ├── services.ts        # Comprehensive service definitions
│   │   ├── projects.ts        # Portfolio projects (desktop billing, enterprise websites, management systems)
│   │   ├── technologies.ts    # Frontend, Backend, Database, Tools
│   │   └── process.ts         # 5-step development methodology
│   └── types/
│       └── index.ts           # TypeScript interfaces and data models
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.mjs
```

---

## 📬 Contact Form Email Delivery (Web3Forms)

The contact form is configured to send emails straight to **`ihashstudios@gmail.com`** using **Web3Forms** (100% free, zero backend needed).

### To activate email delivery (takes 30 seconds):
1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: `ihashstudios@gmail.com`
3. Click **"Create your Access Key"**
4. Check your inbox for your access key, and paste it into `.env.local`:
   ```bash
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
5. Restart your dev server (`npm run dev`). All inquiries will now land directly in your Gmail inbox!

---

## 🎨 Branding & Official Logo Replacement

The website includes a dedicated `BrandLogo` component (`src/components/ui/BrandLogo.tsx`) that enforces strict brand guidelines:
- **No distortion, recoloring, or skewing** — keeps original proportions and aspect ratios.
- Automatically handles light mode (Navbar) and dark navy mode (Footer).

### To supply your official logo file:
Simply replace the file in the `public/` directory:
1. Drop your official vector logo file at `public/logo.svg` (and `public/logo-white.svg` for dark backgrounds).
2. Or drop your official PNG at `public/logo.png`.
3. The entire website, Navbar, Footer, and Favicon will instantly reflect your official file without any code changes required!

---

## 📞 Updating Contact & Social Media Information

All contact details and social links are centralized in:
👉 `src/config/site.ts`

- **Email:** `contact@ihashstudios.com`
- **Phone:** `+91 ...`
- **WhatsApp Direct:** Link configured to open chat with pre-filled inquiry text
- **Instagram Handle:** Link to official Instagram profile

---

## 💻 Running the Application

### 1. Install dependencies:
```bash
npm install
```

### 2. Start development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production:
```bash
npm run build
```

### 4. Start production server:
```bash
npm run start
```
