import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { fileURLToPath } from 'url'

import { Team } from './collections/Team'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseUrl = process.env.DATABASE_URL || `file:${path.resolve(dirname, '../kp-demo.db')}`

export default buildConfig({
  admin: {
    user: 'users',
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  localization: {
    locales: [
      { label: 'Deutsch', code: 'de' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'de',
    fallback: true,
  },
  collections: [
    Pages,
    Team,
    Media,
    {
      slug: 'users',
      auth: true,
      admin: { group: 'System' },
      fields: [],
    },
  ],
  editor: lexicalEditor(),
  db: sqliteAdapter({
    client: {
      url: databaseUrl,
    },
    migrationDir: path.resolve(dirname, './migrations'),
    prodMigrations: migrations,
  }),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  plugins: [],
})
