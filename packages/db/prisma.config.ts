import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';
import { defineConfig, env } from 'prisma/config';

const packageRoot = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(packageRoot, '../../.env')
});

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations'
  },
  datasource: {
    url: process.env.DATABASE_URL ?? ''
  }
});