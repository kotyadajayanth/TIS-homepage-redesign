# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## Live Demo
- **Live URL: https://tis-homepage-redesign-roan-zeta.vercel.app/
- **Repository:https://github.com/kotyadajayanth/TIS-homepage-redesign

## Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Standout Features Implemented
1. **Scroll-Triggered Reveals:** `Reveal` wraps content with `whileInView` and `once: true`, 0.5s duration, staggered through a delay prop.
2. **Animated Dark/Light Theme Switcher:** `useTheme` hook toggles a `dark` class on the root and saves the choice in `localStorage`. A tiny inline script in `index.html` avoids a flash on load.
3. **Scroll Progress Bar:** `useScroll` + `useSpring` drive a scaleX bar fixed to the top.
4. **Custom Cursor:** Spring-driven ring that scales up over links and buttons, and is not rendered on touch devices (`pointer: fine` check).

## Getting Started Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser.

Production build: `npm run build`, then `npm run preview`.

## Component Architecture Overview
- `src/components/ui/` - Button, SectionHeading
- `src/components/layout/` - Navbar (with mobile menu), Footer
- `src/components/sections/` - Hero, About, Campus, Sports, Rankings, Personalities, Testimonials, Enquiry
- `src/components/animation/` - ScrollProgress, CustomCursor, ThemeToggle, Reveal, Marquee
- `src/hooks/` - useTheme, useFinePointer
- `src/data/` - all copy and static content in one file

## Brand Identity Retained
- Copy, contact details, rankings, reviews and links taken from tis.edu.in
- Navy and yellow palette, editable in `src/index.css`
