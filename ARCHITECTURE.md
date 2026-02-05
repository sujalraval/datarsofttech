# Project Architecture Documentation

## Overview
This document describes the scalable architecture implemented for the Datarsoft Tech website.

## Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (site)/                  # Route group for main site pages
│   │   └── home/                # Home page route
│   │       └── page.tsx
│   ├── about/                   # About page route
│   │   └── page.tsx
│   ├── services/                # Services page route
│   │   └── page.tsx
│   ├── contact/                 # Contact page route
│   │   └── page.tsx
│   ├── examples/                # Examples page route
│   │   └── page.tsx
│   ├── style-guide/             # Style guide page route
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                  # All React components
│   ├── common/                  # Shared components
│   │   └── Navigation.tsx       # Reusable navigation component
│   ├── home/                    # Home page components
│   │   └── sections/            # Home page sections
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── TrustSection.tsx
│   │       └── ... (other sections)
│   ├── about/                   # About page components
│   │   └── sections/            # About page sections
│   ├── services/                # Services page components
│   │   └── sections/            # Services page sections
│   ├── ui/                      # UI components (buttons, cards, etc.)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Header.tsx               # Site header
│   ├── Footer.tsx               # Site footer
│   └── StyleGuide.tsx           # Style guide component
├── constants/                   # Application constants
│   └── colors.ts                # Color palette constants
├── lib/                         # Utility libraries
│   ├── routes.ts                # Centralized routing configuration
│   └── utils.ts                 # Helper functions
└── types/                       # TypeScript type definitions (if needed)
```

## Key Improvements

### 1. Scalable Routing Structure
- **Route Groups**: Used `(site)` route group to organize main site pages
- **Centralized Routes**: All routes defined in `src/lib/routes.ts`
- **Type Safety**: Full TypeScript support for route paths and navigation

### 2. Feature-Based Component Organization
- **Domain-Specific Folders**: Components organized by feature/page
- **Sections Pattern**: Each page has its own `sections/` folder for modular components
- **Shared Components**: Common components in `components/common/`

### 3. Maintainable Navigation
- **Reusable Navigation Component**: `Navigation.tsx` handles all navigation logic
- **Active State Management**: Automatic active link highlighting
- **Centralized Configuration**: Navigation items defined in routes config

### 4. Clean Imports
- **Consistent Path Aliases**: Using `@/` alias for all imports
- **Logical Grouping**: Related components grouped together
- **Clear Dependencies**: Easy to trace component relationships

## Benefits

### Scalability
- Easy to add new pages and routes
- Components can be shared across pages
- Clear separation of concerns

### Maintainability
- Centralized configuration reduces duplication
- Consistent structure makes code easier to navigate
- Type safety prevents routing errors

### Developer Experience
- Clear project structure
- Reusable components reduce boilerplate
- Well-defined patterns for adding new features

## Adding New Pages

To add a new page:

1. Create a new route directory: `src/app/new-page/`
2. Add `page.tsx` with your component
3. If needed, create components in `src/components/new-page/sections/`
4. Add the route to `src/lib/routes.ts`
5. Add navigation item if needed

## Adding New Components

To add a new component:

1. Place in appropriate feature folder: `src/components/[feature]/[type]/`
2. Export from index files if creating a component library
3. Import using `@/components/[path]` aliases
4. Add to relevant page components

## Best Practices

- Keep components small and focused
- Use TypeScript for all new components
- Follow the established folder structure
- Update route configuration when adding new pages
- Maintain consistent naming conventions