import React from 'react'

interface ForumPageProps {
  onNavigate: (page: string) => void
}

const ForumPage: React.FC<ForumPageProps> = ({ onNavigate }) => {
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
          💬 FELINE FORUM 💬
        </h1>
        <p className="blink">Where Cat Lovers Unite!</p>
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

        {/* Forum Welcome */}
        <div className="forum-welcome">
          <h2 className="section-title rainbow-text">📋 FORUM CATEGORIES 📋</h2>
          <p>Welcome to the most purr-fect forum on the internet! Choose a category below to start discussing!</p>
        </div>

        {/* Forum Categories */}
        <div className="forum-categories">
          <div className="forum-category">
            <div className="category-icon">🐱</div>
            <div className="category-info">
              <h3>General Cat Discussion</h3>
              <p>Talk about everything cat-related!</p>
              <div className="category-stats">
                <span>📝 1,337 topics</span>
                <span>💬 25,642 posts</span>
                <span>👥 2,048 members</span>
              </div>
            </div>
            <div className="latest-post">
              <div className="latest-title">Latest: "My cat learned to open doors!"</div>
              <div className="latest-author">by WhiskerWizard - 5 mins ago</div>
            </div>
          </div>

          <div className="forum-category">
            <div className="category-icon">🏥</div>
            <div className="category-info">
              <h3>Cat Health & Care</h3>
              <p>Get advice from fellow cat parents!</p>
              <div className="category-stats">
                <span>📝 892 topics</span>
                <span>💬 18,347 posts</span>
                <span>👥 1,653 members</span>
              </div>
            </div>
            <div className="latest-post">
              <div className="latest-title">Latest: "Best food for senior cats?"</div>
              <div className="latest-author">by CatMomForever - 12 mins ago</div>
            </div>
          </div>

          <div className="forum-category">
            <div className="category-icon">📸</div>
            <div className="category-info">
              <h3>Show Off Your Cats!</h3>
              <p>Share photos and videos of your feline friends!</p>
              <div className="category-stats">
                <span>📝 5,421 topics</span>
                <span>💬 87,392 posts</span>
                <span>👥 4,567 members</span>
              </div>
            </div>
            <div className="latest-post">
              <div className="latest-title">Latest: "Fluffy's first birthday party! 🎉"</div>
              <div className="latest-author">by PartyPaws - 3 mins ago</div>
            </div>
          </div>

          <div className="forum-category">
            <div className="category-icon">🎮</div>
            <div className="category-info">
              <h3>Cat Games & Entertainment</h3>
              <p>Fun games and activities for cats and humans!</p>
              <div className="category-stats">
                <span>📝 234 topics</span>
                <span>💬 3,456 posts</span>
                <span>👥 876 members</span>
              </div>
            </div>
            <div className="latest-post">
              <div className="latest-title">Latest: "DIY cat toys from household items"</div>
              <div className="latest-author">by CraftyKitty - 25 mins ago</div>
            </div>
          </div>

          <div className="forum-category">
            <div className="category-icon">🛒</div>
            <div className="category-info">
              <h3>Buy, Sell, Trade</h3>
              <p>Cat-related marketplace for our community!</p>
              <div className="category-stats">
                <span>📝 156 topics</span>
                <span>💬 789 posts</span>
                <span>👥 432 members</span>
              </div>
            </div>
            <div className="latest-post">
              <div className="latest-title">Latest: "Cat tree for sale - barely used!"</div>
              <div className="latest-author">by DealHunter - 1 hour ago</div>
            </div>
          </div>

          <div className="forum-category">
            <div className="category-icon">💔</div>
            <div className="category-info">
              <h3>Rainbow Bridge Memorial</h3>
              <p>A peaceful place to remember our beloved cats.</p>
              <div className="category-stats">
                <span>📝 67 topics</span>
                <span>💬 423 posts</span>
                <span>👥 298 members</span>
              </div>
            </div>
            <div className="latest-post">
              <div className="latest-title">Latest: "Remembering Mr. Whiskers 💔"</div>
              <div className="latest-author">by LovingOwner - 2 hours ago</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h3 className="rainbow-text">🔥 RECENT ACTIVITY 🔥</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-user">🟢 MeowMaster</span>
              <span className="activity-action">replied to</span>
              <span className="activity-topic">"Best cat names for orange cats"</span>
              <span className="activity-time">2 mins ago</span>
            </div>
            <div className="activity-item">
              <span className="activity-user">🟢 PurrfectPaws</span>
              <span className="activity-action">started new topic</span>
              <span className="activity-topic">"Help! Cat won't stop meowing at 3 AM"</span>
              <span className="activity-time">5 mins ago</span>
            </div>
            <div className="activity-item">
              <span className="activity-user">🟢 FelineExpert</span>
              <span className="activity-action">liked post in</span>
              <span className="activity-topic">"Understanding cat body language"</span>
              <span className="activity-time">8 mins ago</span>
            </div>
            <div className="activity-item">
              <span className="activity-user">🟢 KittyLover95</span>
              <span className="activity-action">uploaded photo to</span>
              <span className="activity-topic">"Show Off Your Cats!"</span>
              <span className="activity-time">15 mins ago</span>
            </div>
          </div>
        </div>

        {/* Forum Stats */}
        <div className="forum-stats">
          <h3 className="rainbow-text">📊 FORUM STATISTICS 📊</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">8,734</div>
              <div className="stat-label">Total Members</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">142,537</div>
              <div className="stat-label">Total Posts</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1,337</div>
              <div className="stat-label">Online Now</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Cat Support</div>
            </div>
          </div>
        </div>

        {/* Top Contributors */}
        <div className="top-contributors">
          <h3 className="rainbow-text">🏆 TOP CONTRIBUTORS 🏆</h3>
          <div className="contributor-list">
            <div className="contributor">
              <span className="rank">🥇</span>
              <span className="username">FelineExpert</span>
              <span className="post-count">5,432 posts</span>
              <span className="badge">🎖️ Cat Whisperer</span>
            </div>
            <div className="contributor">
              <span className="rank">🥈</span>
              <span className="username">MeowMaster</span>
              <span className="post-count">3,876 posts</span>
              <span className="badge">🌟 Super Cat Parent</span>
            </div>
            <div className="contributor">
              <span className="rank">🥉</span>
              <span className="username">PurrfectPaws</span>
              <span className="post-count">2,654 posts</span>
              <span className="badge">💎 Helpful Helper</span>
            </div>
          </div>
        </div>

        {/* Forum Rules */}
        <div className="forum-rules">
          <h3 className="rainbow-text">📜 FORUM RULES 📜</h3>
          <div className="rules-list">
            <div className="rule-item">
              <span className="rule-number">1️⃣</span>
              <span className="rule-text">Be respectful to all members and their cats</span>
            </div>
            <div className="rule-item">
              <span className="rule-number">2️⃣</span>
              <span className="rule-text">No spam or excessive self-promotion</span>
            </div>
            <div className="rule-item">
              <span className="rule-number">3️⃣</span>
              <span className="rule-text">Keep discussions cat-related</span>
            </div>
            <div className="rule-item">
              <span className="rule-number">4️⃣</span>
              <span className="rule-text">No selling of live animals</span>
            </div>
            <div className="rule-item">
              <span className="rule-number">5️⃣</span>
              <span className="rule-text">Have fun and share the cat love! 🐾</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 1995 Feline Forum - Where every meow matters!</p>
          <p className="blink">Moderated by cats, for cats 🐱</p>
          <div className="footer-gifs">
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing cat" />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" alt="Typing cat" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForumPage
