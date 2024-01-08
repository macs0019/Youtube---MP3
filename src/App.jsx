import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YouTubeVideoDownloader from './components/YoutubeVideoDownloader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <YouTubeVideoDownloader></YouTubeVideoDownloader>
    </>
  )
}

export default App
