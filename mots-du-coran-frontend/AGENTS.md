# AGENTS.md

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript check then Vite build)
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build

## Code Style Guidelines
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + DaisyUI components
- **File extensions**: `.tsx` for React components, `.ts` for utilities
- **Imports**: Use ES6 imports, React imports first, then third-party, then local imports
- **Component naming**: PascalCase for components, camelCase for functions/variables
- **TypeScript**: Strict typing enabled, use interfaces for object shapes
- **Error handling**: Use proper TypeScript types, avoid `any`
- **Formatting**: Follow ESLint configuration (React hooks, refresh, TypeScript rules)
- **Language**: Application specifications are in French, code comments in English