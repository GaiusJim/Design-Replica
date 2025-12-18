# Gaiusjimedits - Academic Copyediting Portfolio

## Overview

This is a portfolio and service website for Gaius Jim, an independent academic copyeditor specializing in graduate-level research documents. The site showcases editing services (Basic Copyedit, Structural Edit, Proofreading + Formatting), displays before/after editing samples, and provides a document upload form for potential clients. Built as a full-stack application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom design tokens defined in `client/src/index.css`
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state caching
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Storage Pattern**: Interface-based storage abstraction (`IStorage`) with in-memory implementation (`MemStorage`) - designed for easy database migration
- **Static Serving**: Express serves built frontend assets in production

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Tables**: Users table with id, username, and password fields
- **Migration Tool**: Drizzle Kit (`db:push` command for schema sync)

### Key Design Patterns
- **Monorepo Structure**: Client (`client/`), server (`server/`), and shared (`shared/`) directories
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared code
- **Form Handling**: External form submission via FormSubmit.co (no backend form processing)
- **Asset Management**: Static images in `attached_assets/` directory with Vite aliasing

### Build & Development
- **Development**: Vite dev server with HMR, proxied through Express
- **Production Build**: esbuild bundles server code, Vite builds client assets
- **Output**: `dist/` directory with `index.cjs` (server) and `public/` (client assets)

## External Dependencies

### Third-Party Services
- **Form Submission**: FormSubmit.co handles contact form submissions (email to gaiusjimedits@gmail.com)
- **Fonts**: Google Fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono, Inter, Lora)
- **External Links**: Instagram portfolio, WhatsApp contact

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- **Session Store**: connect-pg-simple available for session persistence

### Key NPM Packages
- **UI**: Radix UI primitives, Lucide icons, embla-carousel, vaul (drawer)
- **Forms**: react-hook-form with zod validation via @hookform/resolvers
- **Data**: drizzle-orm, drizzle-zod for type-safe database operations
- **Utilities**: date-fns, clsx, class-variance-authority, tailwind-merge