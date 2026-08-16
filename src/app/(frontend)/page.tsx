export const dynamic = 'force-dynamic'

const C = {
  bg: 'rgb(236, 236, 230)',
  text: 'rgb(87, 87, 87)',
  accent: 'rgb(219, 118, 62)',
  border: 'rgb(196, 193, 189)',
  newsletterBg: 'rgb(241, 242, 237)',
}

const F = "'Raleway', 'Calibri Light', 'Calibri', 'Segoe UI', sans-serif"

const SERVICES = [
  {
    title: 'Wealth Advisory',
    desc: 'Our goal is to safeguard wealth down the generations. We bring the best experts together and coordinate external partners at our Wealth Table:',
    cta: 'TAKE A SEAT',
    href: 'https://kaiserpartner.com/services/wealth-advisory/',
  },
  {
    title: 'Reporting & Controlling',
    desc: 'A reliable overview of how your assets are performing will give you greater certainty. Our services offer new insights and control options:',
    cta: 'GAIN INSIGHTS',
    href: 'https://kaiserpartner.com/services/wealth-reporting-and-controlling/',
  },
  {
    title: 'Family Office',
    desc: 'We support wealthy families: concierge services, family seminars and advice on, for example, relocation, private investments, real estate, philanthropy and education.',
    cta: 'LET US HELP',
    href: 'https://kaiserpartner.com/services/family-office/',
  },
  {
    title: 'Fiduciary Services',
    desc: 'Wealth benefits from an appropriate structure. We can advise you and set up structures for you to suit your needs, including family foundations, holding structures and trusts in Liechtenstein and around the world.',
    cta: 'USE STRUCTURES',
    href: 'https://kaiserpartner.com/services/fiduciary-services/',
  },
  {
    title: 'Asset Protection',
    desc: 'Protect what is most important to you. We grow wealth sustainably and create concepts for structures to protect your assets comprehensively and for the long term.',
    cta: 'PROTECTING ASSETS',
    href: 'https://kaiserpartner.com/solution/asset-protection-a-holistic-task/',
  },
  {
    title: 'Inheritance Planning',
    desc: 'Businesses, property, collections... wealth comes in many shapes and forms. Transferring assets to the next generation is often complex, but with the right strategy, you can safeguard your interests.',
    cta: 'TAKE PRECAUTIONS',
    href: 'https://kaiserpartner.com/solution/good-inheritance-planning-doesnt-happen-under-time-pressure/',
  },
]

export default function HomePage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        ::selection { background: rgb(219, 118, 62); color: #fff; }
        a.service-card { display: block; border: 1px solid rgb(196, 193, 189); padding: 60px 30px 30px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s; }
        a.service-card:hover { border-color: rgb(219, 118, 62); box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        a.service-card:hover .svc-cta { opacity: 0.7; }
        .nav-link { transition: color 0.15s; }
        .nav-link:hover { color: rgb(219, 118, 62) !important; }
        .play-btn { transition: transform 0.2s; }
        .video-wrap:hover .play-btn { transform: scale(1.08); }
        .scroll-arrow { animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        @media (max-width: 900px) {
          .hero-inner { flex-direction: column !important; }
          .hero-text { padding: 60px 32px !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .philosophy-inner { flex-direction: column !important; }
          .page-padding { padding-left: 32px !important; padding-right: 32px !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .nav-items { display: none; }
        }
      `}</style>

      {/* NAV */}
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        height: 76,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        background: C.bg,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://kaiserpartner.com/wp-content/themes/kp-wp-theme/img/illustrations/logo.svg"
            alt="Kaiser Partner"
            height={38}
            width="auto"
          />
        </a>
        <nav className="nav-items" style={{ display: 'flex', alignItems: 'center', gap: 44 }}>
          {['WHY US', 'SERVICES', 'TEAM', 'CAREER'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              style={{
                fontFamily: F,
                fontSize: 19,
                fontWeight: 100,
                color: C.text,
                textDecoration: 'none',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.02em',
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-link"
            style={{
              fontFamily: F,
              fontSize: 15,
              fontWeight: 100,
              color: C.accent,
              textDecoration: 'none',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
            }}
          >
            CONTACT
          </a>
        </nav>
      </header>

      <main style={{ paddingTop: 76, background: C.bg, fontFamily: F, color: C.text }}>

        {/* HERO */}
        <section style={{ minHeight: 'calc(100vh - 76px)', display: 'flex', alignItems: 'stretch' }}>
          <div className="hero-inner" style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <div
              className="hero-text"
              style={{ flex: 1, padding: '80px 60px 80px 120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h1 style={{
                fontFamily: F,
                fontSize: 'clamp(2.5rem, 4.5vw, 57px)',
                fontWeight: 500,
                color: C.text,
                margin: 0,
                lineHeight: 1.1,
              }}>
                Responsibility in Wealth
              </h1>
              <p style={{
                fontFamily: F,
                fontSize: 20.9,
                fontWeight: 100,
                color: C.text,
                marginTop: 20,
                marginBottom: 0,
              }}>
                Kaiser Partner Wealth Advisors
              </p>
              <div className="scroll-arrow" style={{ marginTop: 80, color: C.accent, fontSize: 28 }}>
                ↓
              </div>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', alignSelf: 'stretch', display: 'flex', alignItems: 'flex-end' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://kaiserpartner.com/wp-content/uploads/2018/03/KP-Campus.png"
                alt="Kaiser Partner Campus"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ borderTop: `1px solid ${C.border}` }}>
          <div className="page-padding" style={{ padding: '80px 120px' }}>
            <h4 style={{
              fontFamily: F,
              fontSize: 19,
              fontWeight: 500,
              color: C.accent,
              margin: '0 0 20px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}>
              SERVICES
            </h4>
            <h2 style={{
              fontFamily: F,
              fontSize: 'clamp(2rem, 4.5vw, 57px)',
              fontWeight: 500,
              color: C.text,
              margin: '0 0 64px',
              lineHeight: 1.1,
            }}>
              Learn how we can work best for you.
            </h2>
            <div
              className="services-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
            >
              {SERVICES.map((svc, i) => (
                <a key={i} href={svc.href} className="service-card" target="_blank" rel="noopener noreferrer">
                  <h3 style={{
                    fontFamily: F,
                    fontSize: 20.9,
                    fontWeight: 500,
                    color: C.text,
                    margin: '0 0 16px',
                    lineHeight: 1.3,
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontFamily: F,
                    fontSize: 20.9,
                    fontWeight: 100,
                    color: C.text,
                    margin: '0 0 28px',
                    lineHeight: 1.6,
                  }}>
                    {svc.desc}
                  </p>
                  <span
                    className="svc-cta"
                    style={{
                      fontFamily: F,
                      fontSize: 14,
                      fontWeight: 400,
                      color: C.accent,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {svc.cta}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PHILOSOPHY */}
        <section id="why-us" style={{ borderTop: `1px solid ${C.border}` }}>
          {/* Label banner */}
          <div className="page-padding" style={{
            padding: '24px 120px',
            borderBottom: `1px solid ${C.border}`,
          }}>
            <h4 style={{
              fontFamily: F,
              fontSize: 19,
              fontWeight: 500,
              color: C.accent,
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}>
              OUR PHILOSOPHY
            </h4>
          </div>
          <div className="philosophy-inner page-padding" style={{
            display: 'flex',
            gap: 64,
            padding: '80px 120px',
            alignItems: 'flex-start',
          }}>
            {/* Text */}
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontFamily: F,
                fontSize: 'clamp(2rem, 4.5vw, 57px)',
                fontWeight: 500,
                color: C.text,
                margin: '0 0 36px',
                lineHeight: 1.1,
              }}>
                A guide for Wealthy Owners
              </h2>
              <p style={{
                fontFamily: F,
                fontSize: 20.9,
                fontWeight: 100,
                color: C.text,
                lineHeight: 1.75,
                margin: '0 0 48px',
              }}>
                The world is changing faster and more fundamentally than at any time in history. Therefore, we need to change the way wealth is managed and created. &ldquo;If &hellip;&rdquo;, the film of Kaiser Partner, summarizes our vision of how to navigate wealth in these unprecedented times.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://kaiserpartner.com/wp-content/themes/kp-wp-theme/img/if.png"
                alt="if..."
                style={{ maxWidth: 180, height: 'auto' }}
              />
            </div>
            {/* Video */}
            <div style={{ flex: 1 }}>
              <a
                href="https://www.youtube.com/watch?v=HXpPIBicBNQ"
                target="_blank"
                rel="noopener noreferrer"
                className="video-wrap"
                style={{ display: 'block', position: 'relative', background: '#1a1a1a', aspectRatio: '16/9', overflow: 'hidden' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://kaiserpartner.com/wp-content/themes/kp-wp-theme/img/Sam.Running.gif"
                  alt="Philosophy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.15)',
                }}>
                  <div
                    className="play-btn"
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      border: '2px solid rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.2)',
                    }}
                  >
                    <div style={{
                      width: 0,
                      height: 0,
                      borderStyle: 'solid',
                      borderWidth: '13px 0 13px 26px',
                      borderColor: 'transparent transparent transparent rgba(255,255,255,0.95)',
                      marginLeft: 7,
                    }} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT / GET IN TOUCH */}
        <section id="contact" style={{ background: C.newsletterBg, borderTop: `1px solid ${C.border}` }}>
          <div className="page-padding" style={{ padding: '80px 120px' }}>
            <h2 style={{
              fontFamily: F,
              fontSize: 'clamp(2rem, 4.5vw, 57px)',
              fontWeight: 500,
              color: C.text,
              margin: '0 0 20px',
              lineHeight: 1.1,
            }}>
              Get in touch
            </h2>
            <p style={{
              fontFamily: F,
              fontSize: 20.9,
              fontWeight: 100,
              color: C.text,
              margin: '0 0 56px',
              maxWidth: 600,
            }}>
              Contact us for personal advice and solutions tailored to your needs for your portfolio.
            </p>
            <form
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px 48px',
                maxWidth: 860,
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Salutation */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 32 }}>
                {['Mr', 'Ms'].map(s => (
                  <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: F, fontSize: 20.9, fontWeight: 100, color: C.text }}>
                    <input type="radio" name="salutation" value={s} style={{ accentColor: C.accent, width: 16, height: 16 }} />
                    {s}
                  </label>
                ))}
              </div>
              {/* First name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: C.text, textTransform: 'uppercase', letterSpacing: '0.08em' }}>First Name</label>
                <input type="text" style={{
                  fontFamily: F, fontSize: 16, fontWeight: 100, color: C.text,
                  background: 'transparent', border: 'none', borderBottom: `1px solid ${C.border}`,
                  padding: '8px 0', outline: 'none', width: '100%',
                }} />
              </div>
              {/* Last name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: C.text, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Last Name</label>
                <input type="text" style={{
                  fontFamily: F, fontSize: 16, fontWeight: 100, color: C.text,
                  background: 'transparent', border: 'none', borderBottom: `1px solid ${C.border}`,
                  padding: '8px 0', outline: 'none', width: '100%',
                }} />
              </div>
              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: C.text, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</label>
                <input type="email" style={{
                  fontFamily: F, fontSize: 16, fontWeight: 100, color: C.text,
                  background: 'transparent', border: 'none', borderBottom: `1px solid ${C.border}`,
                  padding: '8px 0', outline: 'none', width: '100%',
                }} />
              </div>
              {/* Country */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: C.text, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Country</label>
                <select style={{
                  fontFamily: F, fontSize: 16, fontWeight: 100, color: C.text,
                  background: 'transparent', border: 'none', borderBottom: `1px solid ${C.border}`,
                  padding: '8px 0', outline: 'none', width: '100%', appearance: 'none',
                }}>
                  <option value="">Please select</option>
                  {['Austria', 'Germany', 'Liechtenstein', 'Luxembourg', 'Switzerland', 'United Kingdom', 'United States'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              {/* Message */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: C.text, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
                <textarea rows={4} style={{
                  fontFamily: F, fontSize: 16, fontWeight: 100, color: C.text,
                  background: 'transparent', border: 'none', borderBottom: `1px solid ${C.border}`,
                  padding: '8px 0', outline: 'none', width: '100%', resize: 'none',
                }} />
              </div>
              {/* Submit */}
              <div style={{ gridColumn: '1 / -1' }}>
                <button type="submit" style={{
                  fontFamily: F,
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#fff',
                  background: C.accent,
                  border: 'none',
                  padding: '14px 40px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'opacity 0.2s',
                }}>
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: '32px 120px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: F,
        fontSize: 14,
        fontWeight: 100,
        color: C.text,
      }}>
        <span>© {new Date().getFullYear()} Kaiser Partner Finanzdienstleistungen AG · Liechtenstein</span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['Imprint', 'Privacy', 'Cookie Policy'].map(l => (
            <a key={l} href="#" style={{ color: C.text, textDecoration: 'none' }}>{l}</a>
          ))}
          <a href="/admin" style={{ color: C.accent, textDecoration: 'none' }}>Admin</a>
        </div>
      </footer>
    </>
  )
}
