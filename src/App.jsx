import { useState } from 'react'
import { Play, Info, ChevronRight, ArrowRight, Star } from 'lucide-react'
import './index.css'

// ─── Shared anime data ───────
const ANIME_LIST = [
  {
    id: 1,
    name: 'Attack on Titan',
    description: 'Humanity fights for survival against man-eating giants in a walled city.',
    badge: 'Animecupa',
    color: '#8B0000',
    bgGradient: 'linear-gradient(135deg, #2b0000, #8B0000)',
    poster: '/aot.jpg',
    rating: '9.0/10',
    episodes: '89 Episodes'
  },
  {
    id: 2,
    name: 'Demon Slayer',
    description: 'A young man journeys to seek a cure for his demon-cursed sister.',
    badge: 'Popular',
    color: '#00A8E1',
    bgGradient: 'linear-gradient(135deg, #004d66, #00A8E1)',
    poster: '/demon.jpg',
    rating: '8.7/10',
    episodes: '55 Episodes'
  },
  {
    id: 3,
    name: 'Jujutsu Kaisen',
    description: 'A boy swallows a cursed talisman and becomes a curse himself to save his friends.',
    badge: 'Trending',
    color: '#0f3cc9',
    bgGradient: 'linear-gradient(135deg, #061957, #0f3cc9)',
    poster: '/jujutsu.jpg',
    rating: '8.5/10',
    episodes: '47 Episodes'
  },
  {
    id: 4,
    name: 'One Piece',
    description: 'Monkey D. Luffy sets off on an adventure to find the legendary One Piece treasure.',
    badge: 'Classic',
    color: '#FF0000',
    bgGradient: 'linear-gradient(135deg, #660000, #FF0000)',
    poster: '/onepiece.jpg',
    rating: '8.9/10',
    episodes: '1000+ Episodes'
  },
]

function Navbar() {
  return (
    <nav className="glass-nav" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 50, padding: '1rem 0' }}>
      <div className="container flex-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>Anime<span className="text-gradient">cupa</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#trending" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Trending</a>
          <a href="#news" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>News</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        <div className="glass-panel hero-panel" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', overflow: 'hidden', background: 'rgba(229, 9, 20, 0.08)', border: '1px solid rgba(229, 9, 20, 0.2)' }}>
          <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '300px', height: '300px', background: '#E50914', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>

          <div style={{ maxWidth: '600px', zIndex: 1 }}>
            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px', background: 'rgba(229, 9, 20, 0.15)', border: '1px solid rgba(229, 9, 20, 0.3)', fontSize: '0.85rem', marginBottom: '1.5rem', color: '#E50914', fontWeight: 'bold' }}>
              🔥 Fall 2026 Season is Here
            </div>
            <h1 className="hero-title" style={{ marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Your Ultimate <br/><span className="text-gradient">Anime</span> Hub
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Stream the latest episodes of your favorite anime series. Uncensored, subbed, and dubbed options available.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary animate-pulse-glow" style={{ gap: '0.5rem', background: '#E50914', boxShadow: '0 4px 15px rgba(229, 9, 20, 0.3)' }}>
                <Play color="white" fill="white" size={18} /> Start Watching
              </button>
              <a href="#trending" className="btn btn-glass" style={{ textDecoration: 'none', color: '#E50914', borderColor: '#E50914' }}>Explore Anime</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimeCard({ anime }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? anime.bgGradient : 'rgba(255,255,255,0.95)',
        border: hovered ? `1px solid ${anime.color}` : '1px solid #E2E8F0',
        borderRadius: '24px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: hovered ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
        boxShadow: hovered
          ? `0 25px 50px -12px ${anime.color}55`
          : '0 2px 12px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
      }}
    >
      {/* badge */}
      {anime.badge && (
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
          background: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(229,9,20,0.8)',
          color: '#fff',
          padding: '0.25rem 0.75rem', borderRadius: '999px',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em',
          border: hovered ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
          transition: 'all 0.35s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          {anime.badge}
        </div>
      )}

      {/* Poster area */}
      <div style={{
        width: '100%', height: '320px', borderRadius: '16px',
        backgroundImage: `url(${anime.poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered ? 'rgba(0,0,0,0.2)' : 'transparent',
          transition: 'all 0.3s'
        }}></div>
      </div>

      {/* anime name */}
      <div>
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          color: hovered ? '#ffffff' : '#0F172A',
          transition: 'color 0.3s ease',
          marginBottom: '0.25rem',
        }}>
          {anime.name}
        </h3>
        <p style={{
          color: hovered ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          transition: 'color 0.3s ease',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {anime.description}
        </p>
      </div>

      {/* stats list */}
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: '0.5rem', marginTop: '0.5rem' }}>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem',
          color: hovered ? 'rgba(255,255,255,0.9)' : 'var(--text-main)', fontWeight: 600 }}>
          <Star size={14} color={hovered ? '#FFD700' : '#FFD700'} fill="#FFD700" />
          {anime.rating}
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem',
          color: hovered ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)' }}>
          {anime.episodes}
        </li>
      </ul>

      {/* CTA */}
      <button
        style={{
          marginTop: 'auto',
          width: '100%',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          border: hovered ? '1px solid rgba(255,255,255,0.4)' : `1px solid ${anime.color}`,
          background: hovered ? 'rgba(255,255,255,0.2)' : 'transparent',
          color: hovered ? '#ffffff' : anime.color,
          fontWeight: 700,
          fontSize: '0.95rem',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(4px)',
          fontFamily: 'inherit',
        }}
      >
        Watch Now <Play size={16} fill={hovered ? '#ffffff' : anime.color} />
      </button>
    </div>
  )
}

function TrendingAnime() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? ANIME_LIST : ANIME_LIST.slice(0, 4)

  return (
    <section id="trending" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '999px',
              background: 'rgba(229,9,20,0.1)', border: '1px solid rgba(229,9,20,0.25)',
              fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', color: '#E50914',
              marginBottom: '1rem', textTransform: 'uppercase' }}>
              Trending Now
            </div>
          </div>
          <div className="flex-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Popular on Animecupa
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.7, fontSize: '1.05rem' }}>
                Discover the most watched and highest rated anime series this week.
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
        }}>
          {displayed.map(anime => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimeNews() {
  const news = [
    { title: "Demon Slayer Season 4 Officially Announced", date: "Jul 15, 2026", excerpt: "The highly anticipated Infinity Castle arc is coming to screens sooner than expected." },
    { title: "Jujutsu Kaisen Manga Enters Final Arc", date: "Jul 10, 2026", excerpt: "Gege Akutami confirmed that the hit manga will conclude its epic story this year." },
    { title: "Solo Leveling Anime Breaks Streaming Records", date: "Jul 5, 2026", excerpt: "The adaptation of the popular webtoon has shattered viewership records globally." }
  ]

  return (
    <section id="news" style={{ padding: '4rem 0', background: 'rgba(241, 245, 249, 0.3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Anime <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(135deg, #E50914, #ff6b6b)' }}>News</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Stay updated with the latest in the anime world.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {news.map((item, i) => (
            <div key={i} className="glass-card animate-float" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', animationDelay: `${i * 0.15}s` }}>
              <span style={{ fontSize: '0.85rem', color: '#E50914', fontWeight: 'bold' }}>{item.date}</span>
              <h3 style={{ fontSize: '1.25rem', lineHeight: 1.4 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.excerpt}</p>
              <button className="btn btn-glass" style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 0 2rem 0', marginTop: '1rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>Anime<span className="text-gradient">cupa</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>Your ultimate destination for premium anime streaming and news.</p>
          </div>

          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h5 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Platform</h5>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Trending</li>
                <li>Simulcasts</li>
                <li>News</li>
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
          &copy; 2026 Animecupa. All rights reserved.
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
        <TrendingAnime />
        <AnimeNews />
      </main>
      <Footer />
    </>
  )
}

export default App
