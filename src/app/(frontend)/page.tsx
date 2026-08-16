export const dynamic = 'force-dynamic'

// ─── Design tokens from kaiserpartner.com ───────────────────────────────────
const BG    = 'rgb(236, 236, 230)'
const TEXT  = 'rgb(87, 87, 87)'
const ACCENT= 'rgb(219, 118, 62)'
const BORDER= 'rgb(208, 208, 208)'
const NEWS_BG = 'rgb(241, 242, 237)'

// Font stacks — Typekit loads Calibri Light/Bold + Cambria if allowed for this subdomain
const CALIBRI_LIGHT = '"Calibri Light", "Lato", "Segoe UI", Arial, sans-serif'
const CALIBRI_BOLD  = '"Calibri Bold",  "Lato", "Segoe UI", Arial, sans-serif'
const CAMBRIA       = 'Cambria, Georgia, serif'

// SVG icons matching kp-icon style (thin line, 48px)
const ICONS: Record<string, string> = {
  compass: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><polygon points="32,16 20,28 16,32 28,20" fill="currentColor" stroke="none"/><circle cx="24" cy="24" r="2" fill="${'rgb(236,236,230)'}" stroke="currentColor"/></svg>`,
  chart:   `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="28" width="7" height="14"/><rect x="21" y="18" width="7" height="24"/><rect x="34" y="8" width="7" height="34"/><path d="M8 14 L24 8 L40 4" strokeWidth="1.2"/></svg>`,
  family:  `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="14" r="6"/><path d="M14 42v-4a10 10 0 0 1 20 0v4"/><circle cx="10" cy="20" r="4"/><path d="M4 42v-3a7 7 0 0 1 12-4.9"/><circle cx="38" cy="20" r="4"/><path d="M44 42v-3a7 7 0 0 0-12-4.9"/></svg>`,
  building:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="4" width="32" height="40"/><rect x="16" y="12" width="6" height="6"/><rect x="26" y="12" width="6" height="6"/><rect x="16" y="24" width="6" height="6"/><rect x="26" y="24" width="6" height="6"/><rect x="18" y="36" width="12" height="8"/></svg>`,
  shield:  `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4L8 10v14c0 10 7 18.5 16 22 9-3.5 16-12 16-22V10L24 4z"/></svg>`,
  inherit: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="10" r="6"/><path d="M24 16v8"/><path d="M16 32h16"/><circle cx="12" cy="38" r="6"/><circle cx="36" cy="38" r="6"/><path d="M12 32v0"/><path d="M36 32v0"/></svg>`,
}

// ─── Service data ────────────────────────────────────────────────────────────
const SERVICES = [
  { title: 'Wealth Advisory',        icon: 'compass',  desc: 'Our goal is to safeguard wealth down the generations. We bring the best experts together and coordinate external partners at our Wealth Table:', cta: 'TAKE A SEAT',       href: 'https://kaiserpartner.com/services/wealth-advisory/' },
  { title: 'Reporting & Controlling',icon: 'chart',    desc: 'A reliable overview of how your assets are performing will give you greater certainty. Our services offer new insights and control options:',   cta: 'GAIN INSIGHTS',    href: 'https://kaiserpartner.com/services/wealth-reporting-and-controlling/' },
  { title: 'Family Office',          icon: 'family',   desc: 'We support wealthy families: concierge services, family seminars and advice on, for example, relocation, private investments, real estate, philanthropy and education.', cta: 'LET US HELP',   href: 'https://kaiserpartner.com/services/family-office/' },
  { title: 'Fiduciary Services',     icon: 'building', desc: 'Wealth benefits from an appropriate structure. We can advise you and set up structures for you to suit your needs, including family foundations, holding structures and trusts in Liechtenstein and around the world.', cta: 'USE STRUCTURES', href: 'https://kaiserpartner.com/services/fiduciary-services/' },
  { title: 'Asset Protection',       icon: 'shield',   desc: 'Protect what is most important to you. We grow wealth sustainably and create concepts for structures to protect your assets comprehensively and for the long term.',     cta: 'PROTECTING ASSETS', href: 'https://kaiserpartner.com/solution/asset-protection-a-holistic-task/' },
  { title: 'Inheritance Planning',   icon: 'inherit',  desc: 'Businesses, property, collections... wealth comes in many shapes and forms. Transferring assets to the next generation is often complex, but with the right strategy, you can safeguard your interests.', cta: 'TAKE PRECAUTIONS', href: 'https://kaiserpartner.com/solution/good-inheritance-planning-doesnt-happen-under-time-pressure/' },
]

export default function HomePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${BG}; color: ${TEXT}; }

        /* ── Nav ── */
        .kp-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 200; height: 76px; background: ${BG}; display: flex; align-items: center; }
        .kp-nav-inner { width: 100%; max-width: 990px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; justify-content: space-between; }
        .kp-nav-links { display: flex; align-items: center; gap: 36px; }
        .kp-nav-link { font-family: ${CAMBRIA}; font-size: 19px; font-weight: 400; color: ${TEXT}; text-decoration: none; text-transform: uppercase; }
        .kp-nav-link:hover { color: ${ACCENT}; }
        .kp-nav-contact { font-family: ${CAMBRIA}; font-size: 15.2px; color: ${ACCENT}; text-decoration: none; text-transform: uppercase; display: inline-flex; align-items: center; gap: 8px; border-left: 1px solid ${BORDER}; padding-left: 24px; margin-left: 12px; }
        .kp-svc-card-link { color: ${ACCENT}; text-decoration: none; display: flex; flex-direction: column; height: 100%; }
        .kp-svc-icon { height: 77px; display: flex; align-items: flex-end; padding-bottom: 16px; color: ${ACCENT}; }

        /* ── Hero ── */
        .kp-hero { min-height: calc(100vh - 76px); display: flex; align-items: stretch; overflow: hidden; }
        .kp-hero-text { flex: 0 0 40%; display: flex; flex-direction: column; justify-content: center; padding: 100px 60px 80px 80px; }
        .kp-hero-image { flex: 1; display: flex; align-items: flex-end; }
        .kp-hero-image img { width: 100%; height: auto; display: block; }

        /* ── Section container ── */
        .kp-container { max-width: 990px; margin: 0 auto; padding: 0 15px; }

        /* ── Services ── */
        .kp-services { border-top: 1px solid ${BORDER}; padding: 60px 0 120px; }
        .kp-svc-grid { display: flex; flex-wrap: wrap; margin: 0 -15px; }
        .kp-svc-col { flex: 0 0 33.333%; padding: 0 15px; margin-bottom: 30px; }
        .kp-svc-card { border: 1px solid rgb(196, 193, 189); padding: 60px 25px 25px; height: 100%; display: flex; flex-direction: column; transition: border-color 0.2s; }
        .kp-svc-card:hover { border-color: ${ACCENT}; }
        .kp-svc-card:hover .kp-svc-cta { opacity: 0.7; }
        .kp-svc-title { font-family: ${CALIBRI_BOLD}; font-size: 20.9px; font-weight: 700; color: ${TEXT}; line-height: 1.1; margin-bottom: 12px; }
        .kp-svc-desc { font-family: ${CALIBRI_LIGHT}; font-size: 20.9px; font-weight: 300; color: ${TEXT}; line-height: 1.5; flex: 1; margin-bottom: 24px; }
        .kp-svc-cta { font-family: ${CALIBRI_BOLD}; font-size: 20.9px; font-weight: 700; color: ${ACCENT}; text-transform: uppercase; transition: opacity 0.2s; }

        /* ── Philosophy ── */
        .kp-philo { border-top: 1px solid ${BORDER}; }
        .kp-philo-banner { padding: 40px 0 0; margin-bottom: 40px; }
        .kp-philo-inner { padding-bottom: 80px; }
        .kp-philo-row { display: flex; gap: 0; margin: 0 -15px; }
        .kp-philo-col { flex: 0 0 50%; padding: 0 15px; }
        .kp-philo-video { position: relative; aspect-ratio: 16/9; overflow: hidden; background: #1a1a1a; cursor: pointer; }
        .kp-philo-video img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .kp-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
        .kp-play-btn { width: 80px; height: 80px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center; transition: transform 0.2s; }
        .kp-philo-video:hover .kp-play-btn { transform: scale(1.08); }
        .kp-play-arrow { width: 0; height: 0; border-style: solid; border-width: 14px 0 14px 28px; border-color: transparent transparent transparent rgba(255,255,255,0.95); margin-left: 8px; }

        /* ── Section labels ── */
        .kp-label { font-family: ${CAMBRIA}; font-size: 19px; font-weight: 500; color: ${ACCENT}; text-transform: uppercase; line-height: 1.1; }
        .kp-h1 { font-family: ${CALIBRI_LIGHT}; font-size: 57px; font-weight: 400; color: ${TEXT}; line-height: 1.1; }
        .kp-h2 { font-family: ${CALIBRI_LIGHT}; font-size: 38px; font-weight: 400; color: ${TEXT}; line-height: 1.1; }
        .kp-body { font-family: ${CALIBRI_LIGHT}; font-size: 20.9px; font-weight: 300; color: ${TEXT}; line-height: 1.5; }

        /* ── Contact form ── */
        .kp-contact { background: ${NEWS_BG}; border-top: 1px solid ${BORDER}; padding: 80px 0; }
        .kp-form { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 60px; max-width: 860px; }
        .kp-field { display: flex; flex-direction: column; gap: 8px; }
        .kp-field label { font-family: ${CAMBRIA}; font-size: 13px; font-weight: 400; color: ${TEXT}; text-transform: uppercase; letter-spacing: 0.08em; }
        .kp-field input, .kp-field select, .kp-field textarea { font-family: ${CALIBRI_LIGHT}; font-size: 16px; font-weight: 300; color: ${TEXT}; background: transparent; border: none; border-bottom: 1px solid ${BORDER}; padding: 8px 0; outline: none; width: 100%; appearance: none; resize: none; }
        .kp-btn { font-family: ${CAMBRIA}; font-size: 14px; font-weight: 400; color: #fff; background: ${ACCENT}; border: none; padding: 14px 44px; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── Footer ── */
        .kp-footer { background: ${BG}; border-top: 1px solid ${BORDER}; padding: 32px 0; }
        .kp-footer-inner { display: flex; justify-content: space-between; align-items: center; font-family: ${CALIBRI_LIGHT}; font-size: 15.2px; font-weight: 300; color: ${TEXT}; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .kp-hero { flex-direction: column; }
          .kp-hero-text { flex: none; padding: 60px 24px; }
          .kp-hero-image { flex: none; }
          .kp-svc-col { flex: 0 0 100%; }
          .kp-philo-row { flex-direction: column; }
          .kp-form { grid-template-columns: 1fr; }
          .kp-nav-links { display: none; }
          .kp-h1 { font-size: 38px; }
        }
        @media (max-width: 992px) and (min-width: 769px) {
          .kp-svc-col { flex: 0 0 50%; }
        }
      `}</style>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header className="kp-nav">
        <div className="kp-nav-inner">
          {/* Logo SVG */}
          <a href="/" style={{ lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://kaiserpartner.com/wp-content/themes/kp-wp-theme/img/illustrations/logo.svg"
              alt="Kaiser Partner"
              height={38}
            />
          </a>

          {/* Nav links */}
          <nav className="kp-nav-links">
            {['WHY US', 'SERVICES', 'TEAM', 'CAREER'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="kp-nav-link">
                {item}
              </a>
            ))}
          </nav>

          {/* CONTACT CTA — Cambria, terracotta, send icon (same as original) */}
          <a href="#contact" className="kp-nav-contact">
            Contact
            {/* Send / paper-plane icon matching kp icon-send-30 */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{display:'inline-block'}}>
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="kp-hero" style={{ paddingTop: 76 }}>
        {/* Text column ~40% */}
        <div className="kp-hero-text">
          <h1 className="kp-h1" style={{ marginBottom: 16 }}>
            Responsibility in Wealth
          </h1>
          <h2 className="kp-h2">
            Kaiser Partner<br />Wealth Advisors
          </h2>
          {/* Bouncing down-arrow */}
          <div style={{ marginTop: 80, color: ACCENT, fontSize: 28, animation: 'kp-bounce 2s infinite' }}>
            <style>{`@keyframes kp-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }`}</style>
            ↓
          </div>
        </div>

        {/* Building image ~60% */}
        <div className="kp-hero-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://kaiserpartner.com/wp-content/uploads/2018/03/KP-Campus.png"
            alt="Kaiser Partner Campus Vaduz"
          />
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="kp-services" id="services">
        <div className="kp-container">
          {/* Label */}
          <h4 className="kp-label" style={{ marginBottom: 7.6 }}>SERVICES</h4>

          {/* Big heading — margin: 50px top, 120px bottom (from real site) */}
          <h2 className="kp-h1" style={{ marginTop: 50, marginBottom: 120 }}>
            Learn how we can work best for you.
          </h2>

          {/* 3-col grid matching Bootstrap col-lg-4 */}
          <div className="kp-svc-grid">
            {SERVICES.map((svc, i) => (
              <div key={i} className="kp-svc-col">
                <div className="kp-svc-card">
                  <a href={svc.href} className="kp-svc-card-link" target="_blank" rel="noopener noreferrer">
                    {/* Icon area — 77px tall matching original */}
                    <div className="kp-svc-icon" dangerouslySetInnerHTML={{ __html: ICONS[svc.icon] }} />
                    {/* Content */}
                    <div className="kp-svc-title">{svc.title}</div>
                    <p className="kp-svc-desc">{svc.desc}</p>
                    <span className="kp-svc-cta">{svc.cta}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="kp-philo" id="why-us">
        <div className="kp-container">
          {/* Label banner */}
          <div className="kp-philo-banner">
            <h4 className="kp-label">OUR PHILOSOPHY</h4>
          </div>

          <div className="kp-philo-inner">
            <div className="kp-philo-row">
              {/* Text column */}
              <div className="kp-philo-col">
                <h2 className="kp-h1" style={{ marginBottom: 36 }}>A guide for Wealthy Owners</h2>
                <p className="kp-body" style={{ marginBottom: 48 }}>
                  The world is changing faster and more fundamentally than at any time in history.
                  Therefore, we need to change the way wealth is managed and created.
                  &ldquo;If &hellip;&rdquo;, the film of Kaiser Partner, summarizes our vision
                  of how to navigate wealth in these unprecedented times.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://kaiserpartner.com/wp-content/themes/kp-wp-theme/img/if.png"
                  alt="if..."
                  style={{ maxWidth: 160, height: 'auto' }}
                />
              </div>

              {/* Video column */}
              <div className="kp-philo-col">
                <a
                  href="https://www.youtube.com/watch?v=HXpPIBicBNQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kp-philo-video"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://kaiserpartner.com/wp-content/themes/kp-wp-theme/img/Sam.Running.gif"
                    alt="Kaiser Partner philosophy film"
                  />
                  <div className="kp-play">
                    <div className="kp-play-btn">
                      <div className="kp-play-arrow" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ─────────────────────────────────────────────── */}
      <section className="kp-contact" id="contact">
        <div className="kp-container">
          <h2 className="kp-h1" style={{ marginBottom: 20 }}>Get in touch</h2>
          <p className="kp-body" style={{ marginBottom: 56, maxWidth: 600 }}>
            Contact us for personal advice and solutions tailored to your needs for your portfolio.
          </p>

          <form className="kp-form" action="/api/contact" method="POST">
            {/* Salutation */}
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 32 }}>
              {['Mr', 'Ms'].map(s => (
                <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: CALIBRI_LIGHT, fontSize: 20.9, fontWeight: 300, color: TEXT }}>
                  <input type="radio" name="salutation" value={s} style={{ accentColor: ACCENT, width: 16, height: 16 }} />
                  {s}
                </label>
              ))}
            </div>

            <div className="kp-field">
              <label>First Name</label>
              <input type="text" name="firstName" />
            </div>
            <div className="kp-field">
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
            <div className="kp-field">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="kp-field">
              <label>Country</label>
              <select name="country">
                <option value="">Please select</option>
                {['Austria', 'Germany', 'Liechtenstein', 'Luxembourg', 'Switzerland', 'United Kingdom', 'United States'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="kp-field" style={{ gridColumn: '1 / -1' }}>
              <label>Message</label>
              <textarea name="message" rows={4} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <button type="submit" className="kp-btn">Send message</button>
            </div>
          </form>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="kp-footer">
        <div className="kp-container">
          <div className="kp-footer-inner">
            <span>© {new Date().getFullYear()} Kaiser Partner Finanzdienstleistungen AG · Liechtenstein</span>
            <div style={{ display: 'flex', gap: 32 }}>
              {['Imprint', 'Privacy', 'Cookie Policy'].map(l => (
                <a key={l} href="#" style={{ color: TEXT, textDecoration: 'none', fontFamily: CALIBRI_LIGHT, fontSize: 15.2, fontWeight: 300 }}>{l}</a>
              ))}
              <a href="/admin" style={{ color: ACCENT, textDecoration: 'none', fontFamily: CALIBRI_LIGHT, fontSize: 15.2, fontWeight: 300 }}>Admin</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
