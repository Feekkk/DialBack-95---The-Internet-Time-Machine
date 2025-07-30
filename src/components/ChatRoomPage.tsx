import React from 'react'

interface ChatRoomPageProps {
  onNavigate: (page: string) => void
}

const ChatRoomPage: React.FC<ChatRoomPageProps> = ({ onNavigate }) => {
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
          💬 CAT CHAT ROOM 💬
        </h1>
        <p className="blink">Welcome to the Purr-fect Chat Experience!</p>
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

        {/* Chat Room Section */}
        <div className="chat-room-section">
          <h2 className="section-title rainbow-text">🗨️ LIVE CAT CHAT 🗨️</h2>
          
          {/* Chat Messages */}
          <div className="chat-messages">
            <div className="chat-message">
              <span className="username">WhiskerFan95:</span>
              <span className="message">Hey everyone! Just got a new kitten! 😸</span>
              <span className="timestamp">[2:34 PM]</span>
            </div>
            <div className="chat-message">
              <span className="username">CatLover2000:</span>
              <span className="message">OMG SO CUTE! What's their name?? 🐱</span>
              <span className="timestamp">[2:35 PM]</span>
            </div>
            <div className="chat-message">
              <span className="username">MeowMaster:</span>
              <span className="message">Welcome to the chat! This place is pawsome! 🐾</span>
              <span className="timestamp">[2:36 PM]</span>
            </div>
            <div className="chat-message">
              <span className="username">FelineExpert:</span>
              <span className="message">Did you know cats purr at 25-50 Hz? Same frequency as healing!</span>
              <span className="timestamp">[2:37 PM]</span>
            </div>
            <div className="chat-message">
              <span className="username">TabbyTales:</span>
              <span className="message">My cat just knocked over my plant... again 🙄</span>
              <span className="timestamp">[2:38 PM]</span>
            </div>
          </div>

          {/* Chat Input */}
          <div className="chat-input-section">
            <div className="chat-input-container">
              <input 
                type="text" 
                placeholder="Type your meow-ssage here..."
                className="chat-input"
              />
              <button className="send-button">SEND 📤</button>
            </div>
          </div>

          {/* Chat Rules */}
          <div className="chat-rules">
            <h3 className="rainbow-text">📋 CHAT RULES 📋</h3>
            <ul>
              <li>🐱 Only cat-related topics allowed!</li>
              <li>😸 Be purr-lite to other members</li>
              <li>🚫 No dogs allowed (sorry!)</li>
              <li>💝 Share your cat pics freely!</li>
              <li>🎉 Have a claw-some time!</li>
            </ul>
          </div>

          {/* Online Users */}
          <div className="online-users">
            <h3 className="rainbow-text">👥 ONLINE CATS (42) 👥</h3>
            <div className="user-list">
              <span className="online-user">🟢 WhiskerFan95</span>
              <span className="online-user">🟢 CatLover2000</span>
              <span className="online-user">🟢 MeowMaster</span>
              <span className="online-user">🟢 FelineExpert</span>
              <span className="online-user">🟢 TabbyTales</span>
              <span className="online-user">🟢 PurrfectPaws</span>
              <span className="online-user">🟢 KittyKing</span>
              <span className="online-user">🟢 FluffyTails</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 1995 Cat Central Chat Room - Meow responsibly!</p>
          <p className="blink">Powered by 56k modem and lots of catnip ☕</p>
          <div className="footer-gifs">
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing cat" />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="Typing cat" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatRoomPage
