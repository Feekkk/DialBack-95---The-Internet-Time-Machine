import React from 'react'

interface CounterPageProps {
  onNavigate: (page: string) => void
}

const CounterPage: React.FC<CounterPageProps> = ({ onNavigate }) => {
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
          🔢 CAT COUNTER 🔢
        </h1>
        <p className="blink">Count Your Cats & More!</p>
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

        {/* Counter Introduction */}
        <div className="counter-intro">
          <h2 className="section-title rainbow-text">🧮 WELCOME TO CAT COUNTER! 🧮</h2>
          <div className="intro-content">
            <p>
              Keep track of everything cat-related with our amazing counter tools! 
              Whether you're counting cats, treats, toys, or purrs per minute, we've got you covered!
            </p>
            <img 
              src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
              alt="Counting cat"
              className="counter-mascot"
            />
          </div>
        </div>

        {/* Cat Counters */}
        <div className="counters-section">
          <h3 className="rainbow-text">🎯 CAT COUNTERS 🎯</h3>
          
          <div className="counters-grid">
            <div className="counter-widget">
              <h4>🐱 My Cats Counter</h4>
              <div className="counter-display">
                <span className="counter-number">5</span>
              </div>
              <div className="counter-controls">
                <button className="counter-btn minus">➖</button>
                <button className="counter-btn plus">➕</button>
              </div>
              <p>How many cats do you have?</p>
            </div>

            <div className="counter-widget">
              <h4>🍖 Treats Given Today</h4>
              <div className="counter-display">
                <span className="counter-number">27</span>
              </div>
              <div className="counter-controls">
                <button className="counter-btn minus">➖</button>
                <button className="counter-btn plus">➕</button>
              </div>
              <p>Keep track of spoiling your cats!</p>
            </div>

            <div className="counter-widget">
              <h4>🧶 Yarn Balls Destroyed</h4>
              <div className="counter-display">
                <span className="counter-number">42</span>
              </div>
              <div className="counter-controls">
                <button className="counter-btn minus">➖</button>
                <button className="counter-btn plus">➕</button>
              </div>
              <p>The eternal cat mission!</p>
            </div>

            <div className="counter-widget">
              <h4>😴 Naps Taken</h4>
              <div className="counter-display">
                <span className="counter-number">12</span>
              </div>
              <div className="counter-controls">
                <button className="counter-btn minus">➖</button>
                <button className="counter-btn plus">➕</button>
              </div>
              <p>Today's nap count!</p>
            </div>

            <div className="counter-widget">
              <h4>🎾 Toys Hidden Under Couch</h4>
              <div className="counter-display">
                <span className="counter-number">17</span>
              </div>
              <div className="counter-controls">
                <button className="counter-btn minus">➖</button>
                <button className="counter-btn plus">➕</button>
              </div>
              <p>The mysterious toy disappearance!</p>
            </div>

            <div className="counter-widget">
              <h4>💕 Head Bonks Received</h4>
              <div className="counter-display">
                <span className="counter-number">89</span>
              </div>
              <div className="counter-controls">
                <button className="counter-btn minus">➖</button>
                <button className="counter-btn plus">➕</button>
              </div>
              <p>Cat love meter!</p>
            </div>
          </div>
        </div>

        {/* Special Counters */}
        <div className="special-counters">
          <h3 className="rainbow-text">⭐ SPECIAL COUNTERS ⭐</h3>
          
          <div className="special-counter-widget">
            <h4>🎵 Purr-o-Meter</h4>
            <div className="purr-meter">
              <div className="purr-display">
                <span className="purr-count">156</span>
                <span className="purr-unit">purrs/min</span>
              </div>
              <div className="purr-bar">
                <div className="purr-fill" style={{width: '78%'}}></div>
              </div>
              <p>Current happiness level: EXTREMELY PURR-FECT! 😸</p>
            </div>
          </div>

          <div className="special-counter-widget">
            <h4>🌙 Days Since Last Midnight Zoomies</h4>
            <div className="zoomies-counter">
              <span className="big-number">0</span>
              <p className="reset-text">Reset at 3:00 AM today 😅</p>
              <button className="reset-btn">RESET COUNTER</button>
            </div>
          </div>
        </div>

        {/* Counter Statistics */}
        <div className="counter-stats">
          <h3 className="rainbow-text">📊 YOUR CAT STATISTICS 📊</h3>
          <div className="stats-summary">
            <div className="stat-item">
              <div className="stat-icon">🐾</div>
              <div className="stat-info">
                <span className="stat-label">Total Cat Actions Today:</span>
                <span className="stat-value">347</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📈</div>
              <div className="stat-info">
                <span className="stat-label">Most Active Hour:</span>
                <span className="stat-value">3:00 AM</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <span className="stat-label">Cat Parent Level:</span>
                <span className="stat-value">Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Tips */}
        <div className="counter-tips">
          <h3 className="rainbow-text">💡 COUNTER TIPS & TRICKS 💡</h3>
          <div className="tips-list">
            <div className="tip-item">
              <span className="tip-emoji">🎯</span>
              <div className="tip-content">
                <h4>Track Everything!</h4>
                <p>The more you count, the better you understand your cat's patterns and needs.</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-emoji">📱</span>
              <div className="tip-content">
                <h4>Bookmark This Page</h4>
                <p>Add Cat Counter to your favorites for easy daily tracking!</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-emoji">🔔</span>
              <div className="tip-content">
                <h4>Set Daily Reminders</h4>
                <p>Remember to update your counters at the same time each day for accuracy.</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-emoji">📊</span>
              <div className="tip-content">
                <h4>Look for Patterns</h4>
                <p>Weekly and monthly trends can help you better care for your feline friends.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Save & Load */}
        <div className="save-load-section">
          <h3 className="rainbow-text">💾 SAVE YOUR PROGRESS 💾</h3>
          <div className="save-load-controls">
            <button className="nineties-button save-btn">
              💾 SAVE COUNTERS
            </button>
            <button className="nineties-button load-btn">
              📁 LOAD COUNTERS
            </button>
            <button className="nineties-button reset-all-btn">
              🔄 RESET ALL
            </button>
          </div>
          <p>Your counter data is saved locally on your computer!</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 1995 Cat Counter - Counting cats since counting was cool!</p>
          <p className="blink">Every number tells a purr-fect story 📈</p>
          <div className="footer-gifs">
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing cat" />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="Typing cat" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterPage
