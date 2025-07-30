import React from 'react'

interface CatRingPageProps {
  onNavigate: (page: string) => void
}

const CatRingPage: React.FC<CatRingPageProps> = ({ onNavigate }) => {
  return (
    <div className="nineties-container">
      <div className="stars"></div>
      
      {/* Floating 90s shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1">🔺</div>
        <div className="shape shape-2">🔶</div>
        <div className="shape shape-3">🔸</div>
        <div className="shape shape-4">🟣</div>
        <div className="shape shape-5">🔵</div>
        <div className="shape shape-6">🟨</div>
      </div>

      {/* Header */}
      <div className="header">
        <h1 className="rainbow-text">
          🔗 THE CAT RING 🔗
        </h1>
        <p className="blink">Navigate the Feline Web!</p>
      </div>

      <div className="main-content">
        {/* Navigation back to home */}
        <div className="navigation-section">
          <button 
            className="nineties-button"
            onClick={() => onNavigate('home')}
          >
            🏠 BACK TO HOME 🏠
          </button>
        </div>

        {/* Cat Ring Introduction */}
        <div className="cat-ring-intro">
          <h2 className="section-title rainbow-text">🌐 WELCOME TO THE CAT RING! 🌐</h2>
          <div className="intro-content">
            <p>
              The Cat Ring is the purr-fect way to explore the best cat websites on the World Wide Web! 
              Click through our carefully curated collection of feline-friendly sites. Each site has been 
              personally approved by our team of expert cats! 🐾
            </p>
            <img 
              src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
              alt="Ring navigator cat"
              className="ring-mascot"
            />
          </div>
        </div>

        {/* Ring Navigation */}
        <div className="ring-navigation">
          <h3 className="rainbow-text">🧭 RING NAVIGATION 🧭</h3>
          <div className="ring-buttons">
            <button className="ring-nav-button">
              ⬅️ PREVIOUS SITE
            </button>
            <button className="ring-nav-button random-button">
              🎲 RANDOM SITE
            </button>
            <button className="ring-nav-button">
              NEXT SITE ➡️
            </button>
          </div>
        </div>

        {/* Featured Ring Sites */}
        <div className="ring-sites">
          <h3 className="rainbow-text">⭐ FEATURED RING SITES ⭐</h3>
          <div className="sites-grid">
            <div className="ring-site">
              <div className="site-preview">
                <img 
                  src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                  alt="Dancing Cats Galore"
                  className="site-thumbnail"
                />
              </div>
              <div className="site-info">
                <h4>🕺 Dancing Cats Galore 🕺</h4>
                <p>The ultimate collection of dancing cat GIFs from around the globe!</p>
                <button className="visit-button">VISIT SITE 🚀</button>
              </div>
            </div>

            <div className="ring-site">
              <div className="site-preview">
                <img 
                  src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"
                  alt="Grumpy Cat's Corner"
                  className="site-thumbnail"
                />
              </div>
              <div className="site-info">
                <h4>😾 Grumpy Cat's Corner 😾</h4>
                <p>For when you're feeling less than purr-fect. Attitude-filled content!</p>
                <button className="visit-button">VISIT SITE 🚀</button>
              </div>
            </div>

            <div className="ring-site">
              <div className="site-preview">
                <img 
                  src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
                  alt="Cool Cats Club"
                  className="site-thumbnail"
                />
              </div>
              <div className="site-info">
                <h4>😎 Cool Cats Club 😎</h4>
                <p>Only the coolest cats allowed! Sunglasses and attitude required.</p>
                <button className="visit-button">VISIT SITE 🚀</button>
              </div>
            </div>

            <div className="ring-site">
              <div className="site-preview">
                <img 
                  src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
                  alt="Typing Cats Academy"
                  className="site-thumbnail"
                />
              </div>
              <div className="site-info">
                <h4>⌨️ Typing Cats Academy ⌨️</h4>
                <p>Learn to type like a professional cat! Paw-friendly keyboards included.</p>
                <button className="visit-button">VISIT SITE 🚀</button>
              </div>
            </div>
          </div>
        </div>

        {/* Ring Statistics */}
        <div className="ring-stats">
          <h3 className="rainbow-text">📈 RING STATISTICS 📈</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Member Sites</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Monthly Visitors</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1995</div>
              <div className="stat-label">Year Founded</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Cat Approved</div>
            </div>
          </div>
        </div>

        {/* Join the Ring */}
        <div className="join-ring">
          <h3 className="rainbow-text">📝 JOIN THE CAT RING! 📝</h3>
          <div className="join-content">
            <p>
              Want your cat website to be part of the Ring? It's easy! Just follow these simple steps:
            </p>
            <div className="join-steps">
              <div className="join-step">
                <span className="step-number">1️⃣</span>
                <span className="step-text">Create an awesome cat website</span>
              </div>
              <div className="join-step">
                <span className="step-number">2️⃣</span>
                <span className="step-text">Add our Ring navigation code</span>
              </div>
              <div className="join-step">
                <span className="step-number">3️⃣</span>
                <span className="step-text">Submit your site for review</span>
              </div>
              <div className="join-step">
                <span className="step-number">4️⃣</span>
                <span className="step-text">Get approved by our cat committee</span>
              </div>
              <div className="join-step">
                <span className="step-number">5️⃣</span>
                <span className="step-text">Enjoy the traffic and new visitors!</span>
              </div>
            </div>
            <button className="nineties-button join-button">
              🎯 SUBMIT YOUR SITE 🎯
            </button>
          </div>
        </div>

        {/* Ring Code */}
        <div className="ring-code">
          <h3 className="rainbow-text">💻 RING HTML CODE 💻</h3>
          <div className="code-container">
            <pre className="html-code">
{`<!-- Cat Ring Navigation Code -->
<div class="cat-ring-nav">
  <a href="previous.html">⬅️ Previous Cat Site</a>
  <a href="random.html">🎲 Random Cat Site</a>
  <a href="next.html">Next Cat Site ➡️</a>
</div>
<!-- End Cat Ring Code -->`}
            </pre>
            <button className="copy-button">📋 COPY CODE</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 1995 The Cat Ring - Connecting cat lovers since the dawn of the web!</p>
          <p className="blink">Proudly powered by 56k modems and infinite cat love 💖</p>
          <div className="footer-gifs">
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing cat" />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="Typing cat" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatRingPage
