import { useState, useEffect } from 'react'

interface HomePageProps {
  onNavigate: (page: string) => void
}

function HomePage({ onNavigate }: HomePageProps) {
  const [visitorCount, setVisitorCount] = useState(0)
  const [currentCat, setCurrentCat] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
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

  // Visitor counter simulation
  useEffect(() => {
    const count = Math.floor(Math.random() * 9999) + 1000
    setVisitorCount(count)
  }, [])

  // Random popup ads
  useEffect(() => {
    const popupTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        setShowPopup(true)
      }
    }, 15000)

    return () => clearInterval(popupTimer)
  }, [])

  const handleCatClick = () => {
    setCurrentCat((prev) => (prev + 1) % catFacts.length)
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
            <button 
              className="nineties-link"
              onClick={() => onNavigate('chat')}
            >
              Cat Chat Room
            </button>
            <button 
              className="nineties-link"
              onClick={() => onNavigate('webcam')}
            >
              Kitten Webcam
            </button>
            <button 
              className="nineties-link"
              onClick={() => onNavigate('ring')}
            >
              Cat Ring
            </button>
            <button 
              className="nineties-link"
              onClick={() => onNavigate('forum')}
            >
              Feline Forum
            </button>
            <button 
              className="nineties-link"
              onClick={() => onNavigate('counter')}
            >
              Cat Counter
            </button>
          </div>
        </div>

        {/* About Us Navigation */}
        <div className="about-us-section">
          <h3 className="rainbow-text blink">📖 LEARN MORE ABOUT US! 📖</h3>
          <p>Discover the purr-fect story behind Cat Central!</p>
          <button 
            className="nineties-button about-us-btn"
            onClick={() => onNavigate('about')}
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

export default HomePage
