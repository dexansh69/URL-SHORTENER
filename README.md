# URL Shortener Monorepo

Monorepo scaffold using pnpm workspaces, Turborepo, React + Vite + TypeScript on the frontend, Express + TypeScript on the backend, and Prisma 7 in `packages/db`.

## Structure

- `apps/backend` - Express API
- `apps/frontend` - React app built with Vite
- `packages/shared` - shared TypeScript utilities
- `packages/db` - Prisma 7 client and database setup

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy the example environment file and set your database URL:

```bash
cp .env.example .env
```

3. Generate the Prisma client:

```bash
pnpm --filter @url-shortener/db generate
```

4. Run a development migration when you add database changes:

```bash
pnpm --filter @url-shortener/db migrate:dev
```

5. Start the workspace:

```bash
pnpm dev
```

## Useful Scripts

Run these from the repository root:

- `pnpm dev` - run Turbo dev tasks across the workspace
- `pnpm build` - build all workspace packages
- `pnpm lint` - lint all workspace packages
- `pnpm typecheck` - run TypeScript checks across all workspace packages
- `pnpm format` - format the repository with Prettier

## Prisma Notes

- Prisma 7 is configured inside `packages/db`.
- The generated client is written to `packages/db/src/generated/prisma`.
- Backend code can import the reusable client with `import { prisma } from "@url-shortener/db";`.

## Current Scope

- Application models are not defined yet.
- Authentication is not implemented.
- URL shortener business logic is intentionally left out.
