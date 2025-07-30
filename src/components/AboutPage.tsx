interface AboutPageProps {
  onNavigate: (page: string) => void
}

function AboutPage({ onNavigate }: AboutPageProps) {
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
          🐱 ABOUT CAT CENTRAL 🐱
        </h1>
        <p className="blink">The Purr-fect Story of Our Journey!</p>
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

        {/* Our Story Section */}
        <div className="about-story-section">
          <h2 className="section-title rainbow-text">📖 OUR STORY 📖</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Welcome to <span className="rainbow-text">Cat Central</span> - the most purr-fect corner of the World Wide Web! 
                Founded in 1995 by a group of cat-loving computer enthusiasts, we've been bringing you the finest 
                collection of feline GIFs and cat content since the dawn of the internet age! 🐾
              </p>
              <p>
                Our mission is simple: to spread joy, one dancing cat at a time! We believe that every meow matters 
                and every whisker deserves to be celebrated in pixelated glory! 😸
              </p>
              <img 
                src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                alt="Dancing cat mascot"
                className="story-gif"
              />
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="team-section">
          <h2 className="section-title rainbow-text">👥 MEET THE TEAM 👥</h2>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
                alt="CEO Cat"
                className="team-gif"
              />
              <h3>Whiskers McFluffington</h3>
              <p className="role">Chief Executive Officer (CEO)</p>
              <p>Specializes in napping and strategic purring. Has 9 years of experience in cat management.</p>
            </div>

            <div className="team-member">
              <img 
                src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"
                alt="CTO Cat"
                className="team-gif"
              />
              <h3>Professor Mittens</h3>
              <p className="role">Chief Technology Officer (CTO)</p>
              <p>Expert in HTML, CSS, and advanced yarn ball algorithms. Codes with paws of fury!</p>
            </div>

            <div className="team-member">
              <img 
                src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
                alt="CMO Cat"
                className="team-gif"
              />
              <h3>Sir Fluffybottom</h3>
              <p className="role">Chief Marketing Officer (CMO)</p>
              <p>Master of viral cat content and meme distribution across the information superhighway!</p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mission-section">
          <h2 className="section-title rainbow-text">🎯 OUR MISSION 🎯</h2>
          <div className="mission-content">
            <div className="mission-box">
              <h3>🌟 To Spread Joy</h3>
              <p>Bringing smiles to faces worldwide through the magic of cat GIFs and feline entertainment!</p>
            </div>
            <div className="mission-box">
              <h3>🌍 Global Cat Community</h3>
              <p>Creating the largest online community of cat enthusiasts in cyberspace!</p>
            </div>
            <div className="mission-box">
              <h3>💻 Cutting-Edge Technology</h3>
              <p>Using the latest 90s web technology to deliver the ultimate cat experience!</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <h2 className="section-title rainbow-text blink">📊 BY THE NUMBERS 📊</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">9,999+</div>
              <div className="stat-label">Cat GIFs Collected</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Happy Visitors</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Cat Monitoring</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Purr Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2 className="section-title rainbow-text">📧 GET IN TOUCH 📧</h2>
          <div className="contact-content">
            <p>Want to share your cat stories or submit GIFs? We'd love to hear from you!</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">📧 Email:</span>
                <span className="contact-value">meow@catcentral.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">📞 Phone:</span>
                <span className="contact-value">1-800-MEOW-NOW</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">📍 Address:</span>
                <span className="contact-value">123 Kitty Lane, Catville, CA 90210</span>
              </div>
            </div>
            <img 
              src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
              alt="Contact us cat"
              className="contact-gif"
            />
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards-section">
          <h2 className="section-title rainbow-text">🏆 AWARDS & RECOGNITION 🏆</h2>
          <div className="awards-content">
            <div className="award-item">
              <div className="award-icon">🥇</div>
              <div className="award-text">
                <h3>"Best Cat Website 1996"</h3>
                <p>Internet Cat Society</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-icon">🌟</div>
              <div className="award-text">
                <h3>"Most Purr-fect GIF Collection"</h3>
                <p>World Wide Web Awards</p>
              </div>
            </div>
            <div className="award-item">
              <div className="award-icon">🎖️</div>
              <div className="award-text">
                <h3>"Excellence in Feline Entertainment"</h3>
                <p>Digital Cat Enthusiasts Guild</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 1995 Cat Central - Serving the feline community since day one!</p>
          <p className="blink">Made with ❤️ and lots of catnip</p>
          <div className="footer-gifs">
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing cat" />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="Typing cat" />
            <img src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif" alt="Grumpy cat" />
          </div>
          <p>Powered by 🐾, ☕, and 56k modem magic!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
