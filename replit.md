# Insulin Dose Calculator

## Overview

A diabetes insulin dose calculator web app for people with Type 1 diabetes. Calculates insulin doses based on carbohydrates and current blood glucose using personal insulin settings.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (artifacts/insulin-calculator)
- **API framework**: Express 5 (artifacts/api-server)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Features

- **Calculator**: Input carbs (grams) and current blood glucose (mg/dL) → get insulin dose breakdown
- **Profile settings**: Configure carb ratio, correction factor, and target blood glucose
- **Calculation history**: View past calculations with a summary stats card
- **Safety**: Doses capped at 30 units, negative doses clamped to 0, medical disclaimer shown
- **Formula**: 
  - Carb dose = carbs / carb ratio
  - Correction dose = (current BG - target BG) / correction factor
  - Total dose = max(0, carb dose + correction dose), capped at 30

## DB Schema

- `profile` — stores a single user profile with carb ratio, correction factor, target BG
- `calculations` — stores each dose calculation record with inputs and outputs

## API Routes

- `GET /api/profile` — get user insulin settings
- `PUT /api/profile` — update insulin settings
- `POST /api/calculate` — calculate insulin dose (saves to history)
- `GET /api/calculations` — list past calculations
- `GET /api/calculations/summary` — aggregated stats

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
