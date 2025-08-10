# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 15 application using the App Router with TypeScript and Tailwind CSS v4.

### Project Structure
- `/app` - Next.js App Router directory containing pages and layouts
- `/public` - Static assets (SVG icons for UI)
- Package manager: pnpm (lockfile present)

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with PostCSS integration
- **Geist fonts** (Sans and Mono) from Google Fonts

### Configuration
- TypeScript with strict mode enabled
- Path aliases: `@/*` maps to project root
- Next.js experimental features: `cacheComponents` and `clientSegmentCache` enabled
- CSS variables for theming with dark mode support via `prefers-color-scheme`

### Styling Approach
- Tailwind CSS v4 with inline theme configuration
- CSS custom properties for colors and fonts
- Automatic dark mode using media queries
- Geist font variables integrated into Tailwind config