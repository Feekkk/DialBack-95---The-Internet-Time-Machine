import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [currentCat, setCurrentCat] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [guestbookEntries, setGuestbookEntries] = useState([
    { name: "CatLover1995", message: "OMG this site is sooo COOL!!! I love the dancing cat! 😸" },
    { name: "KittyFan", message: "Your webpage is purrfect! 🐾 Can you add more cat GIFs?" },
    { name: "90sKid", message: "This brings back memories! Got any Tamagotchi cats?" }
  ])

  const catFacts = [
    "Cats sleep 70% of their lives! 😴",
    "A group of cats is called a 'clowder' 🐱",
    "Cats have 32 muscles in each ear! 👂",
    "Ancient Egyptians worshipped cats! 🏺",
    "Cats can rotate their ears 180 degrees! 🔄"
  ]

  const catGifs = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Dancing cat
    "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif", // Typing cat
    "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif", // Grumpy cat
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif", // Cat with sunglasses
  ]

  // Simulated dial-up loading
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoaded(true)
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 5
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  // Visitor counter simulation
  useEffect(() => {
    const count = Math.floor(Math.random() * 9999) + 1000
    setVisitorCount(count)
  }, [])

  // Random popup ads
  useEffect(() => {
    if (isLoaded) {
      const popupTimer = setInterval(() => {
        if (Math.random() > 0.7) {
          setShowPopup(true)
        }
      }, 15000)

      return () => clearInterval(popupTimer)
    }
  }, [isLoaded])

  const handleCatClick = () => {
    setCurrentCat((prev) => (prev + 1) % catFacts.length)
  }

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="stars"></div>
        <div className="loading-container">
          <h1 className="blink">🐱 CAT CENTRAL 🐱</h1>
          <p>Connecting to the World Wide Web...</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p>{Math.floor(loadingProgress)}% Complete</p>
          <div className="loading-cat">
            <img 
              src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" 
              alt="Loading cat"
              width="100"
            />
          </div>
        </div>
      </div>
    )
  }

  // About Us page (empty for now as requested)
  if (currentPage === 'about') {
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
              onClick={() => setCurrentPage('home')}
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
                  <span className="contact-label">� Address:</span>
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
      
      {/* Popup Ad */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-ad">
            <button 
              className="close-btn" 
              onClick={() => setShowPopup(false)}
            >
              ❌
            </button>
            <h3 className="blink">🎉 CONGRATULATIONS! 🎉</h3>
            <p>You are visitor #{visitorCount}!</p>
            <p>You've won a FREE virtual cat! 🐱</p>
            <img 
              src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" 
              alt="Winner cat"
              width="150"
            />
            <button className="nineties-button">CLAIM YOUR CAT!</button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="header">
        <h1 className="rainbow-text">
          🐱 WELCOME TO CAT CENTRAL 🐱
        </h1>
        <p className="blink">The Ultimate Feline Experience on the World Wide Web!</p>
      </div>

      {/* Scrolling Marquee */}
      <div className="marquee">
        🌟 NEW! Check out our dancing cat collection! 🌟 Best viewed in Netscape Navigator! 🌟 Don't forget to sign our guestbook! 🌟
      </div>

      <div className="main-content">
        {/* Visitor Counter */}
        <div className="visitor-counter">
          <img 
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif" 
            alt="Cool cat" 
            width="50"
          />
          <span>You are visitor #{visitorCount}</span>
          <img 
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif" 
            alt="Cool cat" 
            width="50"
          />
        </div>

        {/* Under Construction */}
        <div className="construction">
          🚧 UNDER CONSTRUCTION 🚧
          <img 
            src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" 
            alt="Working cat"
            width="50"
          />
          New cat GIFs coming soon!
        </div>

        {/* Cat Gallery */}
        <div className="cat-gallery">
          <h2 className="section-title rainbow-text">🎭 CAT GIF COLLECTION 🎭</h2>
          
          <div className="gif-grid">
            {catGifs.map((gif, index) => (
              <div key={index} className="gif-container">
                <img 
                  src={gif} 
                  alt={`Cat ${index + 1}`} 
                  className="cat-gif"
                />
                <div className="gif-label">Cat #{index + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Section */}
        <div className="interactive-section">
          <h3 className="rainbow-text">🎯 CLICK FOR CAT FACTS! 🎯</h3>
          <button 
            className="nineties-button"
            onClick={handleCatClick}
          >
            MEOW FOR WISDOM!
          </button>
          <div className="cat-fact">
            <p>{catFacts[currentCat]}</p>
          </div>
          <img 
            src={catGifs[currentCat % catGifs.length]}
            alt="Featured cat"
            className="featured-cat"
          />
        </div>

        {/* Links Section */}
        <div className="links-section">
          <h3 className="rainbow-text">🔗 COOL CAT LINKS 🔗</h3>
          <div className="link-list">
            <a href="#" className="nineties-link">Cat Chat Room</a>
            <a href="#" className="nineties-link">Kitten Webcam</a>
            <a href="#" className="nineties-link">Cat Ring</a>
            <a href="#" className="nineties-link">Feline Forum</a>
            <a href="#" className="nineties-link">Cat Counter</a>
          </div>
        </div>

        {/* About Us Navigation */}
        <div className="about-us-section">
          <h3 className="rainbow-text blink">📖 LEARN MORE ABOUT US! 📖</h3>
          <p>Discover the purr-fect story behind Cat Central!</p>
          <button 
            className="nineties-button about-us-btn"
            onClick={() => setCurrentPage('about')}
          >
            🐱 VISIT OUR ABOUT PAGE 🐱
          </button>
          <div className="about-preview">
            <img 
              src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" 
              alt="Typing cat"
              width="80"
            />
            <p className="blink">Click to learn our story!</p>
            <img 
              src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" 
              alt="Dancing cat"
              width="80"
            />
          </div>
        </div>

        {/* Guestbook */}
        <div className="guestbook">
          <h3 className="rainbow-text">📝 SIGN OUR GUESTBOOK! 📝</h3>
          <div className="guestbook-frame">
            {guestbookEntries.map((entry, index) => (
              <div key={index}>
                <p><strong>{entry.name}:</strong> {entry.message}</p>
                <hr />
              </div>
            ))}
          </div>
          <button 
            className="nineties-button"
            onClick={() => {
              const name = prompt("Enter your name:")
              const message = prompt("Leave a message:")
              if (name && message) {
                setGuestbookEntries([...guestbookEntries, { name, message }])
              }
            }}
          >
            SIGN GUESTBOOK
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 1995 Cat Central - Best viewed with Netscape Navigator 2.0</p>
          <p className="blink">Created on a 486 DX2/66 with 8MB RAM</p>
          <div className="footer-gifs">
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing cat" />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="Typing cat" />
            <img src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif" alt="Grumpy cat" />
          </div>
          <p>Powered by 🐾 and 56k modem magic!</p>
        </div>
      </div>
    </div>
  )
}

export default App
