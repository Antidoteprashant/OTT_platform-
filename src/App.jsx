import { useState } from 'react'
import { Play, Tv, Smartphone, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import './index.css'

// ─── Shared service data (acts as mock DB — admin can CRUD this array) ───────
const SERVICES = [
  {
    id: 1,
    name: 'Netflix',
    description: 'Subscription support, account setup & plan upgrades for Netflix.',
    badge: 'Most Popular',
    color: '#E50914',
    bgGradient: 'linear-gradient(135deg, #E50914, #831010)',
    logo: (
      <svg viewBox="0 0 111 30" width="80" height="22" fill="#E50914">
        <path d="M105.06 0l-8.1 23.01L88.88 0H78.9l12.78 30-12.78 30h9.98l8.08-23.01L105.06 60h9.98L102.26 30 115.04 0zM0 0v60h9.98V0zm14.97 0v60h9.98V0zM29.94 0v60h9.98V0zm14.96 0v60h9.98V37.5L60.84 0zm0 0" />
      </svg>
    ),
    logoText: 'NETFLIX',
    logoStyle: { color: '#E50914', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.02em', fontStyle: 'italic' },
  },
  {
    id: 2,
    name: 'Amazon Prime',
    description: 'Prime Video account assistance, billing support & content access.',
    badge: '',
    color: '#00A8E1',
    bgGradient: 'linear-gradient(135deg, #00A8E1, #005F8A)',
    logo: null,
    logoText: 'prime video',
    logoStyle: { color: '#00A8E1', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.02em' },
  },
  {
    id: 3,
    name: 'JioHotstar',
    description: 'JioHotstar subscription plans, offers & streaming support.',
    badge: '',
    color: '#0f3cc9',
    bgGradient: 'linear-gradient(135deg, #0f3cc9, #e8171e)',
    logo: null,
    logoText: 'JioHotstar',
    logoStyle: { color: '#0f3cc9', fontSize: '1.3rem', fontWeight: 800 },
  },
  {
    id: 4,
    name: 'YouTube',
    description: 'YouTube Premium setup, family plans & ad-free streaming help.',
    badge: '',
    color: '#FF0000',
    bgGradient: 'linear-gradient(135deg, #FF0000, #8B0000)',
    logo: null,
    logoText: 'YouTube',
    logoStyle: { color: '#FF0000', fontSize: '1.4rem', fontWeight: 700 },
  },
  {
    id: 5,
    name: 'Spotify',
    description: 'Spotify subscription, duo/family plans & payment assistance.',
    badge: 'New',
    color: '#1DB954',
    bgGradient: 'linear-gradient(135deg, #1DB954, #1565C0)',
    logo: null,
    logoText: 'Spotify',
    logoStyle: { color: '#1DB954', fontSize: '1.4rem', fontWeight: 700 },
  },
]

function Navbar() {
  return (
    <nav className="glass-nav" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 50, padding: '1rem 0' }}>
      <div className="container flex-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>GLITCH<span className="text-gradient">.tv</span></span>
        </div>




        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        <div className="glass-panel" style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>

          <div style={{ maxWidth: '600px', zIndex: 1 }}>
            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px', background: 'rgba(184, 204, 193, 0.3)', border: '1px solid rgba(184, 204, 193, 0.5)', fontSize: '0.85rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              🎉 New Season Premiere
            </div>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Experience <br/><span className="text-gradient">Cinematic</span> Magic
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV. Cancel anytime.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary animate-pulse-glow" style={{ gap: '0.5rem' }}>
                <Play color="white" fill="white" size={18} /> Start Free Trial
              </button>
              <a href="#plans" className="btn btn-glass" style={{ textDecoration: 'none' }}>View Plans</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services / Platform Cards ────────────────────────────────────────────────
function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? service.bgGradient : 'rgba(255,255,255,0.95)',
        border: hovered ? `1px solid ${service.color}` : '1px solid #E2E8F0',
        borderRadius: '24px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: hovered ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
        boxShadow: hovered
          ? `0 25px 50px -12px ${service.color}55`
          : '0 2px 12px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
      }}
    >
      {/* badge */}
      {service.badge && (
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(184,204,193,0.3)',
          color: hovered ? '#fff' : '#0F172A',
          padding: '0.25rem 0.75rem', borderRadius: '999px',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em',
          border: hovered ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(184,204,193,0.5)',
          transition: 'all 0.35s ease',
        }}>
          {service.badge}
        </div>
      )}

      {/* decorative glow blob */}
      {hovered && (
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '120px', height: '120px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)', filter: 'blur(30px)',
          pointerEvents: 'none',
        }} />
      )}

      {/* logo area */}
      <div style={{
        width: '72px', height: '72px', borderRadius: '20px',
        background: hovered ? 'rgba(255,255,255,0.15)' : `${service.color}15`,
        border: hovered ? '1px solid rgba(255,255,255,0.25)' : `1px solid ${service.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.35s ease',
        backdropFilter: 'blur(4px)',
      }}>
        <span style={{
          ...service.logoStyle,
          color: hovered ? '#ffffff' : service.color,
          fontSize: '0.85rem',
          fontWeight: 900,
          letterSpacing: '0.04em',
        }}>
          {service.logoText.slice(0, 2).toUpperCase()}
        </span>
      </div>

      {/* platform name */}
      <div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: 800,
          color: hovered ? '#ffffff' : '#0F172A',
          transition: 'color 0.3s ease',
          marginBottom: '0.25rem',
        }}>
          {service.name}
        </h3>
        <p style={{
          color: hovered ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          transition: 'color 0.3s ease',
        }}>
          {service.description}
        </p>
      </div>

      {/* features list */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {['Subscription Support', 'Account Setup', 'Payment Assistance'].map((feat) => (
          <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem',
            color: hovered ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)', transition: 'color 0.3s ease' }}>
            <CheckCircle size={14} color={hovered ? 'rgba(255,255,255,0.9)' : service.color} />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://forms.gle/7EeHafuYJnHt7ZtB6"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 'auto',
          width: '100%',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          border: hovered ? '1px solid rgba(255,255,255,0.4)' : `1px solid ${service.color}`,
          background: hovered ? 'rgba(255,255,255,0.2)' : 'transparent',
          color: hovered ? '#ffffff' : service.color,
          fontWeight: 700,
          fontSize: '0.95rem',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(4px)',
          fontFamily: 'inherit',
          textDecoration: 'none',
          boxSizing: 'border-box',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = hovered ? 'rgba(255,255,255,0.3)' : `${service.color}15`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = hovered ? 'rgba(255,255,255,0.2)' : 'transparent'
        }}
      >
        Book Now <ArrowRight size={16} />
      </a>
    </div>
  )
}

function Services() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? SERVICES : SERVICES.slice(0, 4)

  return (
    <section id="services" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '999px',
              background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)',
              fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', color: '#0284c7',
              marginBottom: '1rem', textTransform: 'uppercase' }}>
              Our Services
            </div>
          </div>
          <div className="flex-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                One Platform, All Streams
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.7, fontSize: '1.05rem' }}>
                Get expert help for your favourite streaming platforms — subscriptions, setup, and beyond.
              </p>
            </div>
            <button
              className="btn btn-glass"
              onClick={() => setShowAll(!showAll)}
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              {showAll ? 'Show Less' : 'View All'} <ChevronRight size={16} style={{ transition: 'transform 0.3s', transform: showAll ? 'rotate(90deg)' : 'rotate(0deg)' }} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem',
        }}>
          {displayed.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { icon: <Tv size={32} color="var(--primary)"/>, title: 'Watch everywhere', desc: 'Stream on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' },
    { icon: <Smartphone size={32} color="var(--secondary)"/>, title: 'Download your shows', desc: 'Save your favorites easily and always have something to watch offline.' }
  ]

  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {features.map((f, i) => (
          <div key={i} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(241, 245, 249, 0.5)', borderRadius: '16px', width: 'fit-content', border: '1px solid #E2E8F0' }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Basic', price: '8.99', quality: '720p', devices: 1 },
    { name: 'Standard', price: '13.99', quality: '1080p', devices: 2, popular: true },
    { name: 'Premium', price: '19.99', quality: '4K + HDR', devices: 4 }
  ]

  return (
    <section id="plans" style={{ padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>Choose your <span className="text-gradient">Plan</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          {plans.map((plan, i) => (
            <div key={i} className={`glass-card ${plan.popular ? 'animate-float' : ''}`} style={{ padding: '3rem 2rem', position: 'relative', border: plan.popular ? '1px solid var(--primary)' : '' }}>
              {plan.popular && (
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  Most Popular
                </div>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>
                ${plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/mo</span>
              </div>

              <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Tv size={18} color="var(--primary)"/> Quality: {plan.quality}</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Smartphone size={18} color="var(--primary)"/> {plan.devices} Devices</li>
              </ul>

              <a href="https://forms.gle/7EeHafuYJnHt7ZtB6" target="_blank" rel="noopener noreferrer" className={`btn ${plan.popular ? 'btn-primary' : 'btn-glass'}`} style={{ width: '100%', textDecoration: 'none' }}>Select Plan</a>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '4rem auto 0',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <h4 style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
            📌 IMPORTANT NOTE
          </h4>
          <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 500 }}>
            Your credentials will be sent via WhatsApp/Email within 24–48 hours of booking confirmation.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Didn't receive them on time? Please contact us immediately using the details below.
          </p>
        </div>
      </div>
    </section>
  )
}



function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.05em' }}>GLITCH<span className="text-gradient">.tv</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>The ultimate destination for premium streaming entertainment.</p>
          </div>

          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h5 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Company</h5>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Legal</h5>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; 2026 GLITCH.tv. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default App
