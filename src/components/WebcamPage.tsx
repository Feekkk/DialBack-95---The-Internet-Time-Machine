import React from 'react'

interface WebcamPageProps {
  onNavigate: (page: string) => void
}

const WebcamPage: React.FC<WebcamPageProps> = ({ onNavigate }) => {
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
          📹 KITTEN WEBCAM 📹
        </h1>
        <p className="blink">Watch Live Kittens 24/7!</p>
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

        {/* Webcam Section */}
        <div className="webcam-section">
          <h2 className="section-title rainbow-text">🎥 LIVE KITTEN CAM 🎥</h2>
          
          {/* Main Webcam */}
          <div className="webcam-container">
            <div className="webcam-frame">
              <img 
                src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                alt="Live kitten cam"
                className="webcam-feed"
              />
              <div className="webcam-overlay">
                <div className="live-indicator">🔴 LIVE</div>
                <div className="viewer-count">👁️ 1,337 viewers</div>
              </div>
            </div>
            <div className="webcam-info">
              <h3>📍 Main Kitten Nursery</h3>
              <p>Currently showing: 6 adorable orange kittens playing!</p>
            </div>
          </div>

          {/* Multiple Webcam Feeds */}
          <div className="webcam-grid">
            <div className="mini-webcam">
              <img 
                src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
                alt="Sleeping cats cam"
                className="mini-feed"
              />
              <div className="mini-info">
                <h4>😴 Sleepy Time Cam</h4>
                <span>👁️ 892 viewers</span>
              </div>
            </div>

            <div className="mini-webcam">
              <img 
                src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"
                alt="Play time cam"
                className="mini-feed"
              />
              <div className="mini-info">
                <h4>🎾 Play Time Cam</h4>
                <span>👁️ 654 viewers</span>
              </div>
            </div>

            <div className="mini-webcam">
              <img 
                src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
                alt="Food time cam"
                className="mini-feed"
              />
              <div className="mini-info">
                <h4>🍽️ Dinner Time Cam</h4>
                <span>👁️ 1,205 viewers</span>
              </div>
            </div>
          </div>

          {/* Chat for Webcam */}
          <div className="webcam-chat">
            <h3 className="rainbow-text">💬 WEBCAM CHAT 💬</h3>
            <div className="webcam-chat-messages">
              <div className="webcam-chat-message">
                <span className="username">KittenLover:</span> OMG they're so cute! 😻
              </div>
              <div className="webcam-chat-message">
                <span className="username">CatFan95:</span> The orange one is my favorite!
              </div>
              <div className="webcam-chat-message">
                <span className="username">PurrMaster:</span> This is better than TV! 📺
              </div>
              <div className="webcam-chat-message">
                <span className="username">FelineWatcher:</span> I've been watching for 3 hours! 🕒
              </div>
            </div>
          </div>

          {/* Webcam Stats */}
          <div className="webcam-stats">
            <h3 className="rainbow-text">📊 WEBCAM STATISTICS 📊</h3>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Live Streaming</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Daily Viewers</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">12</div>
                <div className="stat-label">Active Cameras</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">∞</div>
                <div className="stat-label">Cuteness Level</div>
              </div>
            </div>
          </div>

          {/* Webcam Schedule */}
          <div className="webcam-schedule">
            <h3 className="rainbow-text">📅 DAILY SCHEDULE 📅</h3>
            <div className="schedule-list">
              <div className="schedule-item">
                <span className="time">6:00 AM</span>
                <span className="activity">🌅 Morning Stretch & Yawns</span>
              </div>
              <div className="schedule-item">
                <span className="time">8:00 AM</span>
                <span className="activity">🥛 Breakfast Time</span>
              </div>
              <div className="schedule-item">
                <span className="time">10:00 AM</span>
                <span className="activity">🎾 Play Time Extravaganza</span>
              </div>
              <div className="schedule-item">
                <span className="time">12:00 PM</span>
                <span className="activity">😴 Midday Nap Session</span>
              </div>
              <div className="schedule-item">
                <span className="time">3:00 PM</span>
                <span className="activity">🧶 Yarn Ball Adventures</span>
              </div>
              <div className="schedule-item">
                <span className="time">6:00 PM</span>
                <span className="activity">🍽️ Dinner & Grooming</span>
              </div>
              <div className="schedule-item">
                <span className="time">9:00 PM</span>
                <span className="activity">🌙 Evening Cuddles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 1995 Cat Central Webcam - Broadcasting cuteness since day one!</p>
          <p className="blink">Sponsored by Whiskas® and unlimited bandwidth dreams</p>
          <div className="footer-gifs">
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing cat" />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="Typing cat" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebcamPage
