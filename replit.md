# Gaiusjimedits - Academic Copyediting Portfolio

## Overview

This is a portfolio and service website for Gaius Jim, an independent academic copyeditor specializing in graduate-level research documents. The site showcases editing services (Basic Copyedit, Structural Edit, Proofreading + Formatting), displays before/after editing samples, and provides a document upload form for potential clients. Built as a full-stack application with React frontend and Express backend.

### Recent Changes
- Migrated REST Express application to Replit environment.
- Configured Node.js 20 and dependencies.
- Set up Drizzle ORM with PostgreSQL.
- Restored portfolio images from `attached_assets` using Vite aliasing.
- Updated portfolio section with Instagram content showcase images.
- Updated file upload form: changed max file size from 10MB to 5MB with bold text notification.
- Implemented smart file validation: users without files or files >5MB are redirected to Dropbox upload link.
- Made phone number clickable with WhatsApp direct message link (wa.me/2349121478352).
- Removed reCAPTCHA verification from contact form.
- Added Microsoft UET tracking tag with consent mode management.
- Configured for Lyte Hosting deployment with PM2 process management.
- Added privacy policy link in contact form and adjusted form spacing.
- Fixed form submission issue when file size exceeds 5MB limit.
- Verified application functionality and UI layout.

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
- **Process Management**: PM2 ecosystem config (`ecosystem.config.js`) for production

### Deployment to Lyte Hosting
1. **Build**: Run `npm run build` to compile frontend and backend
2. **Environment**: Copy `.env.production.example` to `.env.production` and update with your values (DATABASE_URL, etc.)
3. **Process Manager**: Use PM2 with `ecosystem.config.js`:
   - Install PM2: `npm install -g pm2`
   - Start app: `pm2 start ecosystem.config.js`
   - View logs: `pm2 logs gaiusjimedits`
   - Restart: `pm2 restart gaiusjimedits`
4. **Reverse Proxy**: Configure nginx to proxy requests to port 5000 (Express server)
5. **Database**: Ensure PostgreSQL is running and DATABASE_URL is correctly set

## External Dependencies

### Third-Party Services
- **Form Submission**: FormSubmit.co handles contact form submissions (email to gaiusjimedits@gmail.com)
- **File Storage**: Dropbox request link (https://www.dropbox.com/request/AL0zPELJMiQAWQL5HJ6x) for files >5MB or missing files
- **Direct Messaging**: WhatsApp integration via wa.me link for phone contact
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