import { getPayload } from 'payload'
import config from '../../payload.config'
import type { Page } from '../../payload-types'

export const dynamic = 'force-dynamic'

type Section = NonNullable<Page['sections']>[number]

function HeroBlock({ block }: { block: Extract<Section, { blockType: 'hero' }> }) {
  return (
    <section style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 64px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 480 }}>
        <h1 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          color: '#2d2926',
          margin: '0 0 24px',
          letterSpacing: '-0.02em',
        }}>
          {block.headline}
        </h1>
        <p style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: '1.1rem',
          color: '#5a5550',
          margin: 0,
        }}>
          {block.subline}
        </p>
        {block.cta?.label && (
          <a href={block.cta.url ?? '#'} style={{
            display: 'inline-block',
            marginTop: 40,
            padding: '12px 28px',
            background: '#c4714b',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}>
            {block.cta.label}
          </a>
        )}
      </div>
    </section>
  )
}

type ServicesBlock = Extract<Section, { blockType: 'servicesGrid' }>
type ServiceItem = NonNullable<ServicesBlock['services']>[number]

function ServicesGridBlock({ block }: { block: ServicesBlock }) {
  const services = block.services ?? []
  return (
    <section style={{ padding: '80px 64px', borderTop: '1px solid #d8d3cc' }}>
      {block.sectionLabel && (
        <p style={{
          fontFamily: 'sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#c4714b',
          marginBottom: 48,
        }}>
          {block.sectionLabel}
        </p>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '48px 64px',
      }}>
        {services.map((svc: ServiceItem, i: number) => (
          <div key={i}>
            <h3 style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '1.25rem',
              fontWeight: 400,
              color: '#2d2926',
              margin: '0 0 12px',
            }}>
              {svc.title}
            </h3>
            <p style={{
              fontFamily: 'sans-serif',
              fontSize: '0.9rem',
              color: '#5a5550',
              lineHeight: 1.7,
              margin: '0 0 20px',
            }}>
              {svc.description}
            </p>
            {svc.ctaLabel && (
              <a href={svc.ctaUrl ?? '#'} style={{
                fontFamily: 'sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#c4714b',
                textDecoration: 'none',
                borderBottom: '1px solid #c4714b',
                paddingBottom: 2,
              }}>
                {svc.ctaLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function PhilosophyBlock({ block }: { block: Extract<Section, { blockType: 'philosophySection' }> }) {
  return (
    <section style={{
      padding: '80px 64px',
      borderTop: '1px solid #d8d3cc',
      background: '#e8e2da',
    }}>
      {block.label && (
        <p style={{
          fontFamily: 'sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#c4714b',
          marginBottom: 24,
        }}>
          {block.label}
        </p>
      )}
      <h2 style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
        fontWeight: 400,
        color: '#2d2926',
        margin: '0 0 24px',
        maxWidth: 600,
      }}>
        {block.title}
      </h2>
      {block.body && (
        <p style={{
          fontFamily: 'sans-serif',
          fontSize: '0.95rem',
          color: '#5a5550',
          lineHeight: 1.8,
          maxWidth: 560,
          margin: 0,
        }}>
          {block.body}
        </p>
      )}
    </section>
  )
}

function renderSection(section: Section, i: number) {
  switch (section.blockType) {
    case 'hero':
      return <HeroBlock key={i} block={section} />
    case 'servicesGrid':
      return <ServicesGridBlock key={i} block={section} />
    case 'philosophySection':
      return <PhilosophyBlock key={i} block={section} />
    default:
      return null
  }
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: pages } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    locale: 'de',
    limit: 1,
  })

  const homePage = pages[0]
  const sections = homePage?.sections ?? []

  return (
    <>
      {/* Nav */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 64px',
        height: 64,
        background: '#eeeae4',
        borderBottom: '1px solid #d8d3cc',
      }}>
        <a href="/" style={{
          fontFamily: 'Georgia, serif',
          fontSize: '1.1rem',
          color: '#c4714b',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}>
          kaiser.partner
        </a>
        <nav style={{ display: 'flex', gap: 40 }}>
          {['WHY US', 'SERVICES', 'TEAM', 'CAREER'].map(item => (
            <a key={item} href="#" style={{
              fontFamily: 'sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2d2926',
              textDecoration: 'none',
            }}>
              {item}
            </a>
          ))}
        </nav>
        <a href="#contact" style={{
          fontFamily: 'sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#c4714b',
          textDecoration: 'none',
        }}>
          CONTACT
        </a>
      </header>

      {/* Page content */}
      <main style={{
        paddingTop: 64,
        background: '#eeeae4',
        minHeight: '100vh',
        color: '#2d2926',
      }}>
        {sections.length > 0
          ? sections.map((s, i) => renderSection(s, i))
          : (
            <div style={{ padding: '120px 64px', textAlign: 'center', color: '#999' }}>
              <p>Noch keine Seite — im <a href="/admin" style={{ color: '#c4714b' }}>Admin</a> eine "home" Page anlegen.</p>
            </div>
          )
        }
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #d8d3cc',
        background: '#eeeae4',
        padding: '40px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        fontSize: '0.75rem',
        color: '#888',
      }}>
        <span>© 2026 Kaiser Partner. All rights reserved.</span>
        <a href="/admin" style={{ color: '#c4714b', textDecoration: 'none' }}>Admin</a>
      </footer>
    </>
  )
}
