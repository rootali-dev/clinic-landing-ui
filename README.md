<div align="center">

# ⚡ Demo Physio Clinic
### High-Performance, Accessible & Evidence-Based Healthcare Landing Page

<br/>

<!-- Modern Pill-Style Rounded Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/Lighthouse%20Desktop-100%2F100-10B981?style=flat&logo=googlechrome&logoColor=white&labelColor=064E3B" alt="Lighthouse Desktop 100/100" />
  <img src="https://img.shields.io/badge/Lighthouse%20Mobile-94%2F100-14B8A6?style=flat&logo=googlechrome&logoColor=white&labelColor=134E4A" alt="Lighthouse Mobile 94/100" />
  <img src="https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-0ea5e9?style=flat&logo=w3c&logoColor=white&labelColor=0369a1" alt="WCAG AA" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwindcss&logoColor=white&labelColor=0369a1" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vanilla_JS-ES6+-F59E0B?style=flat&logo=javascript&logoColor=white&labelColor=78350F" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/License-MIT-8B5CF6?style=flat&labelColor=4C1D95" alt="License" />
</p>

<p align="center">
  A state-of-the-art, conversion-optimized landing page engineered for modern medical practices and rehabilitation centers. Built with a zero-bloat vanilla architecture, seamless RTL/LTR typography, and sub-second rendering speeds.
</p>

[Explore Demo](#-live-preview--demo-video) • [Lighthouse Benchmarks](#-lighthouse-performance-audit--benchmarks) • [Features](#-key-features--ux-highlights) • [Architecture](#-tech-stack--architecture) • [Getting Started](#-getting-started)

</div>

---

## 📽️ Live Preview & Demo Video

<div align="center">

https://github.com/user-attachments/assets/YOUR-DEMO-VIDEO-ID-HERE

> 📹 **Video Demo**: *An overview of the hero fold-locked experience, interactive booking wizard, dynamic filter tabs, and responsive UI.*

*(To embed a video, drag and drop your `.mp4` recording directly into the GitHub README editor box).*

</div>

---

## 📊 Lighthouse Performance Audit & Benchmarks

Audited using **Google Lighthouse & Chrome DevTools Core Web Vitals Engine**. The site is engineered to deliver zero layout jitter and sub-second visual confirmation on both desktop and mobile networks.

<div align="center">

| 🖥️ Desktop Audit (100 / 100) | 📱 Mobile Audit (94 / 100) |
| :---: | :---: |
| <img src="pic/lighthouse-desktop.webp" alt="Lighthouse Desktop 100 Score" width="100%" /> | <img src="pic/lighthouse-mobile.webp" alt="Lighthouse Mobile 94 Score" width="100%" /> |
| **Performance: 100** • **FCP: 0.6s** • **LCP: 0.6s** | **Performance: 94** • **FCP: 2.4s** • **LCP: 2.6s** |

</div>

<br/>

### 📈 Core Web Vitals Metrics Breakdown

| Metric Parameter | Desktop Result | Mobile Result | Industry Threshold | Status |
| :--- | :---: | :---: | :---: | :---: |
| **First Contentful Paint (FCP)** | **0.6 s** | **2.4 s** | `< 1.8 s / < 3.0 s` | 🟢 Ultra Fast |
| **Largest Contentful Paint (LCP)** | **0.6 s** | **2.6 s** | `< 2.5 s / < 3.0 s` | 🟢 Sub-second |
| **Total Blocking Time (TBT)** | **0 ms** | **0 ms** | `< 200 ms` | 🟢 Zero Latency |
| **Cumulative Layout Shift (CLS)** | **0.006** | **0.004** | `< 0.1` | 🟢 Zero Jitter |
| **Speed Index (SI)** | **0.6 s** | **2.4 s** | `< 3.4 s` | 🟢 Optimal |
| **Accessibility & SEO** | **92 / 100** | **92 / 100** | `> 90` | 🟢 WCAG AA |

---

## ✨ Key Features & UX Highlights

* **🎯 Calibrated 100vh Fold-Locked Hero**: Symmetrical, balanced widescreen viewport framing designed specifically for desktop monitors and mobile devices.
* **📅 Interactive 3-Step Booking Wizard**:
  * **Step 1**: Specialty / therapy selection (General, Sports, Post-Op, Massage).
  * **Step 2**: Interactive booking calendar and available morning/afternoon time slots.
  * **Step 3**: Contact form with instant client-side validation and immediate reference-code generation.
* **🏷️ Dynamic Treatment Filtering**: Instant tabbed switching between orthopedic categories with zero layout shifts.
* **💬 Hardware-Accelerated Testimonials**: Smooth CSS carousel utilizing `will-change: transform` and cubic-bezier physics.
* **❓ Accessible FAQ Accordion**: Fully keyboard-navigable (`Tab`, `Enter`, `Space`) with smooth height transitions and ARIA tracking.
* **📱 Mobile Sticky Conversion Bar**: Slide-up quick-booking action bar dedicated to mobile conversion rate optimization.

---

## 🏗️ Tech Stack & Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      DEMO PHYSIO DOM                        │
├──────────────────────────────┬──────────────────────────────┤
│  Styles & Design System      │  Scripts & Interactivity     │
│  - Tailwind CLI (Standalone) │  - Vanilla JS (ES6 Modules)  │
│  - Custom CSS Architecture   │  - Lucide Icons (Deferred)   │
│  - Preloaded Vazirmatn/Roboto│  - Zero Heavy Frameworks     │
└──────────────────────────────┴──────────────────────────────┘
```

### Architectural Principles:
1. **Zero-Framework Philosophy**: No heavy virtual DOM libraries. Vanilla ES6+ guarantees script execution times under `5ms`.
2. **Layered CSS Architecture**:
   * `output.css`: Pre-compiled Tailwind utility classes.
   * `styles.css`: Scoped overrides, accessibility `:focus-visible` rings, custom calendar interaction tokens, and RTL font rules.
3. **Bi-Directional Font & Layout Hierarchy**: Native Right-to-Left (RTL) reading flow with fallback font stacks to eliminate Cumulative Layout Shift (CLS).

---

## ♿ Accessibility & Usability Standards

* **Skip Navigation Links**: Screen reader friendly direct anchor navigation (`#main-content`).
* **ARIA Semantic Markup**: Integrated `aria-expanded`, `aria-controls`, `aria-selected`, and `aria-live` announcement regions.
* **Color Contrast**: Compliant with WCAG 2.1 AA contrast ratios.
* **Focus States**: High-visibility focus indicators (`outline: 3px solid #0F766E`) for full keyboard usability.

---

## 📁 Directory Structure

```text
demo-physio/
├── css/
│   ├── output.css          # Minified Tailwind CLI stylesheet
│   └── styles.css          # Custom components, animations & typography
├── fonts/
│   ├── Vazirmatn-RD-Regular.woff2
│   └── Vazirmatn-RD-Bold.woff2
├── js/
│   └── main.js             # Core application logic, booking wizard & sliders
├── pic/                    # Optimized WebP assets & Lighthouse audit captures
├── favicon.ico
├── index.html              # Main single-page web interface
├── package.json            # Build scripts & dev dependencies
├── tailwind.config.js      # Custom theme colors & breakpoints
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/demo-physio.git
cd demo-physio
```

### 2. Install dev dependencies *(Optional for Tailwind compilation)*
```bash
npm install
```

### 3. Build or Watch Tailwind CSS
```bash
# Watch mode for development
npm run dev

# Minified production build
npm run build
```

### 4. Run the project
Open `index.html` directly in your browser or serve locally:
```bash
npx serve .
# or
python3 -m http.server 8000
```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Designed & Engineered with precision for modern healthcare excellence.</sub>
</div>
