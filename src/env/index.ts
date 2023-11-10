import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PROJECT_NAME: z.coerce.string(),
  SERVER_NAME: z.coerce.string(),
  DB_USER: z.coerce.string(),
  DB_PASS: z.coerce.string(),
  DB_NAME: z.coerce.string(),
  DB_HOST: z.coerce.string(),
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  JWT_SECRET: z.coerce.string(),
});


const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('❌ Invalid environment variables.')
}

export const env = _env.data
