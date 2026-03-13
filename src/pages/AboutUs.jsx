import React from 'react'
import "../styles/about-us.css"

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section style={{height : "100vh"}} id="hero">
        <div className="container">
          <div className="hero-eyebrow">WHO WE ARE</div>
          <h1 className="hero-title">Crafting Excellence Since 2018</h1>
          <p className="hero-subtitle">
            Elite Guard Car Care is Dubai and Abu Dhabi’s trusted name for premium window tinting, car wrapping, PPF, ceramic coating and detailing — delivered with precision, passion and uncompromising quality.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2018, Elite Guard Car Care was born from a simple belief: every vehicle — and every space — deserves the highest level of protection and style. What started as a small mobile tinting service in Dubai has grown into the region’s go-to name for certified, luxury-grade automotive and architectural protection.
              </p>

              <h3>Why Clients Choose Us</h3>
              <p>
                We don’t just apply films or coatings — we engineer results. Every project begins with understanding your lifestyle, your vehicle, and your expectations. From there, we bring world-class materials (3M Crystalline, 3M 1080, XPEL, Ceramic Pro and more) together with obsessive craftsmanship.
              </p>

              <h3>Our Promise</h3>
              <ul>
                <li>100% certified installation teams</li>
                <li>Only genuine premium materials</li>
                <li>Transparent pricing – no surprises</li>
                <li>Door-to-door convenience across Dubai, Abu Dhabi & Al Ain</li>
                <li>Lifetime / long-term warranties on most services</li>
                <li>Customer satisfaction or we make it right — guaranteed</li>
              </ul>
            </div>

            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80"
                alt="Elite Guard Car Care team installing premium window tint on luxury vehicle in Dubai"
              />
            </div>
          </div>

          {/* Values */}
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Precision</h3>
              <p className="value-desc">
                Every millimeter matters. We measure twice, cut once, and inspect under multiple light conditions.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3 className="value-title">Authenticity</h3>
              <p className="value-desc">
                Only original 3M, XPEL, Ceramic Pro and other certified premium products — never cheap alternatives.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🚗</div>
              <h3 className="value-title">Convenience</h3>
              <p className="value-desc">
                Mobile service at your home, office, villa or showroom — no need to leave your schedule behind.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Trust</h3>
              <p className="value-desc">
                Thousands of satisfied clients, transparent process, and warranties you can actually count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Ready to Experience the Elite Difference?
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              maxWidth: '680px',
              margin: '0 auto 40px',
              opacity: 0.95,
              color : "#444343"
            }}
          >
            Join hundreds of Dubai and Abu Dhabi vehicle owners who trust us with their most prized possessions.
          </p>
          <a
            href="/quick-contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#016a97',
              color: '#fff',
              fontWeight: 700,
              fontSize: '16px',
              padding: '.5rem .8rem',
              borderRadius: '999px',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              transition: 'all 0.35s',
            }}
          >
            Get Your Free Quote Today →
          </a>
        </div>
      </section>
    </>
  )
}

export default AboutUs