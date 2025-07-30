import { useState, useEffect } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

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

  return <HomePage onNavigate={setCurrentPage} />
}

export default App
