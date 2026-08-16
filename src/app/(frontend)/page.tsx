import { getPayload } from 'payload'
import config from '../../payload.config'

// Kein API-Call nötig — Payload direkt importieren (server-side)
export default async function HomePage() {
  const payload = await getPayload({ config })

  // Teamdaten direkt aus der DB — typesafe dank payload-types.ts
  const { docs: team } = await payload.find({
    collection: 'team',
    locale: 'de',
    limit: 10,
  })

  const { docs: pages } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    locale: 'de',
    limit: 1,
  })

  const homePage = pages[0]

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto', padding: 40 }}>
      <h1>{homePage?.title ?? 'Kaiser Partner'}</h1>

      <section>
        <h2>Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {team.map((member) => (
            <div key={member.id} style={{ border: '1px solid #eee', padding: 16, borderRadius: 8 }}>
              <strong>{member.name}</strong>
              <p style={{ color: '#666', margin: '4px 0' }}>{member.role as string}</p>
              {member.contact?.email && (
                <a href={`mailto:${member.contact.email}`}>{member.contact.email}</a>
              )}
            </div>
          ))}
          {team.length === 0 && (
            <p style={{ color: '#999' }}>Noch keine Team-Mitglieder — im Admin hinzufügen.</p>
          )}
        </div>
      </section>

      <footer style={{ marginTop: 60, color: '#999', fontSize: 14 }}>
        <p>Admin: <a href="/admin">/admin</a></p>
      </footer>
    </main>
  )
}
