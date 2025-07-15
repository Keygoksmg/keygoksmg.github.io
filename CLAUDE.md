# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic portfolio website for Keigo Kusumegi built with Astro 5. The site is deployed to GitHub Pages and showcases academic publications and personal information.

## Development Commands

All commands should be run from the root directory:

- `npm install` - Install dependencies
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Architecture

### Technology Stack
- **Framework**: Astro 5 with TypeScript
- **Styling**: CSS (component-scoped styles in .astro files)
- **Icons**: astro-icon integration
- **Analytics**: Google Analytics via Partytown
- **Deployment**: GitHub Pages (configured in astro.config.mjs)

### Project Structure
- `src/pages/index.astro` - Main page entry point
- `src/layouts/Layout.astro` - Base HTML layout with Google Analytics
- `src/components/` - Reusable Astro components (About, Publications, Footer, Header)
- `src/data/publications.json` - Publications data with structured author information
- `src/styles/Global.css` - Global CSS styles
- `src/assets/` - Images and static assets
- `public/` - Static files (CV.pdf, favicon)

### Key Patterns
- Component-based architecture using Astro components
- Data-driven publications list from JSON
- Responsive design with max-width: 960px
- Google Analytics implemented via Partytown for performance
- Publication data includes author metadata (is_me, is_equal_contributor flags)

### Configuration Notes
- Site configured for GitHub Pages deployment
- Vite polling enabled for hot reload stability
- TypeScript strict mode enabled
- Partytown integration for third-party script optimization