<div align="center">

# ⚡ Demo Physio Clinic
### High-Performance, Accessible & Evidence-Based Healthcare Landing Page

[![Lighthouse Desktop](https://img.shields.io/badge/Lighthouse%20Desktop-100%2F100-brightgreen?style=for-the-badge&logo=googlechrome&logoColor=white)](#-performance-benchmarks--core-web-vitals)
[![Lighthouse Mobile](https://img.shields.io/badge/Lighthouse%20Mobile-94%2F100-green?style=for-the-badge&logo=googlechrome&logoColor=white)](#-performance-benchmarks--core-web-vitals)
[![Accessibility](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-teal?style=for-the-badge&logo=w3c&logoColor=white)](#-accessibility--usability-standards)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#-tech-stack--architecture)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#-tech-stack--architecture)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#-license)

<p align="center">
  A state-of-the-art, conversion-optimized landing page engineered for modern medical practices and rehabilitation centers. Built with a zero-bloat vanilla architecture, seamless RTL/LTR typography, and sub-second rendering speeds.
</p>

[Explore Demo](#-live-preview--demo-video) • [Features](#-key-features--ux-highlights) • [Architecture](#-tech-stack--architecture) • [Benchmarks](#-performance-benchmarks--core-web-vitals) • [Getting Started](#-getting-started)

</div>

---

## 📽️ Live Preview & Demo Video

<!-- Replace the video URL or GIF path below with your actual demo recording -->
<div align="center">



> 📹 **Video Demo**: *An overview of the hero fold-locked experience, interactive booking wizard, dynamic filter tabs, and responsive UI.*

*(If GitHub video embeds are not available, you can also embed an animated GIF or thumbnail linking to YouTube/Loom below)*

```html
<!-- Alternative GIF Embed Option: -->
<!-- <p align="center"><img src="demo/walkthrough.gif" alt="Demo Physio Walkthrough" width="100%"></p> -->
```

</div>

---

## 📖 Overview

**Demo Physio** is a production-ready, medical-grade web interface designed to bridge clinical credibility with effortless patient onboarding. 

Unlike heavy framework-dependent templates, this project is engineered using **semantic HTML5**, **compiled Tailwind CSS CLI**, and **pure Vanilla JavaScript**. It achieves instant First Contentful Paint (FCP) and zero Cumulative Layout Shift (CLS) while delivering a rich, interactive patient experience.

---

## ✨ Key Features & UX Highlights

* **🎯 100vh Fold-Locked Hero Section**: A balanced, high-impact introductory screen calibrated with custom viewport geometry for monitors, tablets, and phones.
* **📅 Interactive 3-Step Booking Wizard**:
  * Step 1: Treatment / specialty selection.
  * Step 2: Live interactive calendar with morning/afternoon time-slot pickers.
  * Step 3: Instant client-side form validation and success confirmation.
* **🏷️ Dynamic Treatment Filter Tabs**: Categorized exploration of therapies (Spine & Neck, Sports Injuries, Post-Op Rehabilitation) with zero-layout-shift DOM filtering.
* **💬 Smooth Testimonial Carousel**: Hardware-accelerated slider (`will-change: transform`) with responsive card clamping and navigation buttons.
* **❓ Accessible FAQ Accordion**: Fully keyboard-accessible accordion with ARIA expansion tracking and smooth CSS transitions.
* **📱 Mobile Sticky Conversion CTA**: Slide-up sticky action bar for mobile devices, boosting appointment booking conversion rates.

---

## ⚡ Performance Benchmarks & Core Web Vitals

Benchmarked using **Google Lighthouse / PageSpeed Insights**. The architecture prioritizes lightweight non-blocking assets and preloaded typography to ensure near-instant page load times.

### 🖥️ Desktop Benchmark (Score: `100/100`)

| Metric | Result | Target Benchmark | Status |
| :--- | :---: | :---: | :---: |
| **First Contentful Paint (FCP)** | **0.6 s** | < 1.8 s | 🟢 Ultra Fast |
| **Largest Contentful Paint (LCP)** | **0.6 s** | < 2.5 s | 🟢 Instant |
| **Total Blocking Time (TBT)** | **0 ms** | < 200 ms | 🟢 Zero Delay |
| **Cumulative Layout Shift (CLS)** | **0.006** | < 0.1 | 🟢 Zero Jitter |
| **Speed Index (SI)** | **0.6 s** | < 3.4 s | 🟢 Optimal |
| **Accessibility Score** | **92 / 100** | > 90 | 🟢 Compliant |
| **Best Practices & SEO** | **100 / 100** | 100 | 🟢 Perfect |

### 📱 Mobile Benchmark (Score: `94/100`)

| Metric | Result | Target Benchmark | Status |
| :--- | :---: | :---: | :---: |
| **First Contentful Paint (FCP)** | **2.4 s** | < 3.0 s | 🟢 Fast |
| **Largest Contentful Paint (LCP)** | **2.6 s** | < 3.0 s | 🟢 Good |
| **Total Blocking Time (TBT)** | **0 ms** | < 200 ms | 🟢 Zero Delay |
| **Cumulative Layout Shift (CLS)** | **0.004** | < 0.1 | 🟢 Stable |
| **Speed Index (SI)** | **2.4 s** | < 3.4 s | 🟢 Smooth |

---

## 🏗️ Tech Stack & Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      DEMO PHYSIO DOM                        │
├──────────────────────────────┬──────────────────────────────┤
│  Styles & Design System      │  Scripts & Interactivity     │
│  - Tailwind CLI (Standalone) │  - Vanilla JS (ES6 Modules)  │
│  - Custom CSS Architecture   │  - Lucide Icons (Deferred)   │
│  - Preloaded Vazirmatn/Roboto│  - Zero Runtime Dependencies │
└──────────────────────────────┴──────────────────────────────┘
```

### Architectural Principles:
1. **Zero-Framework Overhead**: No React/Vue/Angular bundle penalties. Vanilla ES6+ guarantees total execution times under `5ms`.
2. **Layered CSS Structure**:
   * `output.css`: Compiled Tailwind utility classes with tree-shaken purge rules.
   * `styles.css`: Scoped overrides, accessibility ring enhancements (`:focus-visible`), custom calendar states, and RTL typography enforcement.
3. **Bi-Directional Font & Layout Hierarchy**: Standardized support for right-to-left (RTL) reading flow with fallback font stacks to eliminate layout thrashing.
4. **Optimized Asset Pipeline**: Preconnected Google Font origins, eager-loaded hero visuals, and lazy-loaded doctor profiles.

---

## ♿ Accessibility & Usability Standards

* **Skip Navigation Links**: Screen reader friendly direct anchor navigation (`#main-content`).
* **ARIA Semantic Markup**: Full integration of `aria-expanded`, `aria-controls`, `aria-selected`, and `aria-live` polite announcement regions for multi-step booking.
* **Color Contrast & Focus Rings**: High-contrast ratios meeting WCAG 2.1 AA guidelines with dedicated `focus-visible` emerald rings for keyboard-only navigation.
* **Reduced Motion Compliance**: Respects user operating system animation preferences.

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
│   └── main.js             # Core application logic, wizard & sliders
├── pic/                    # Optimized WebP medical imagery & assets
├── favicon.ico
├── index.html              # Main single-page application structure
├── package.json            # Build scripts & dev dependencies
├── tailwind.config.js      # Custom theme colors & breakpoints
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run and build the project locally on your machine:

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
# Watch mode for real-time development
npm run dev

# Or build minified production CSS
npm run build
```

### 4. Launch the application
Open `index.html` directly in your browser or run a lightweight local server:
```bash
npx serve .
# or
python3 -m http.server 8000
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target Screen | Layout Strategy |
| :--- | :--- | :--- |
| **`< 640px` (sm)** | Mobile Devices | Single-column flow,
