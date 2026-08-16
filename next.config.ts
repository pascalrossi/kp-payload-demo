import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  output: 'standalone',
}

export default withPayload(nextConfig, {
  configPath: path.resolve('./src/payload.config.ts'),
})
