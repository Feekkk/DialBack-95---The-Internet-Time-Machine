import { useState, useEffect } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ChatRoomPage from './components/ChatRoomPage'
import WebcamPage from './components/WebcamPage'
import CatRingPage from './components/CatRingPage'
import ForumPage from './components/ForumPage'
import CounterPage from './components/CounterPage'

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

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

  if (!isLoaded) {
    return <LoadingScreen progress={loadingProgress} />
  }

  if (currentPage === 'about') {
    return <AboutPage onNavigate={setCurrentPage} />
  }

  if (currentPage === 'chat') {
    return <ChatRoomPage onNavigate={setCurrentPage} />
  }

  if (currentPage === 'webcam') {
    return <WebcamPage onNavigate={setCurrentPage} />
  }

  if (currentPage === 'ring') {
    return <CatRingPage onNavigate={setCurrentPage} />
  }

  if (currentPage === 'forum') {
    return <ForumPage onNavigate={setCurrentPage} />
  }

  if (currentPage === 'counter') {
    return <CounterPage onNavigate={setCurrentPage} />
  }

  return <HomePage onNavigate={setCurrentPage} />
}

export default App
