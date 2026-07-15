# URL Shortener Monorepo

Production-ready pnpm workspace scaffold for a URL shortener application.

## Structure

- `apps/backend` - Node.js, Express, TypeScript
- `apps/frontend` - React, TypeScript, Vite
- `packages/shared` - Shared reusable TypeScript types

## Scripts

Run from the repository root:

- `pnpm dev` - start backend and frontend in parallel
- `pnpm dev:backend` - start the backend only
- `pnpm dev:frontend` - start the frontend only
- `pnpm build` - build all workspace packages
- `pnpm lint` - lint all workspace packages
- `pnpm typecheck` - run TypeScript checks across the workspace
- `pnpm format` - format the repository with Prettier

## Notes

- The project is scaffolded only.
- No API logic or UI features are implemented yet.
- Install dependencies with `pnpm install` before running scripts.
