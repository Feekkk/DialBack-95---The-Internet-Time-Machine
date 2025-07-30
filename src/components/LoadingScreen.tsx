interface LoadingScreenProps {
  progress: number
}

function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="loading-screen">
      <div className="stars"></div>
      <div className="loading-container">
        <h1 className="blink">🐱 CAT CENTRAL 🐱</h1>
        <p>Connecting to the World Wide Web...</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{Math.floor(progress)}% Complete</p>
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

export default LoadingScreen
