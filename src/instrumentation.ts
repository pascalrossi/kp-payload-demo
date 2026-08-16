export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { getPayload } = await import('payload')
    const { default: config } = await import('./payload.config')
    const payload = await getPayload({ config })
    await payload.db.migrate()
  }
}
