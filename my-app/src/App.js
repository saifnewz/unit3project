import { BASE_URL } from './globals.js'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Anime from './components/Anime'
import Quote from './components/Quote.jsx'
import Title from './components/Title.jsx'

const App = () => {

  const [quotes, setQuotes] = useState([])
  useEffect(() => {
    async function getQuotes() {
      const response = await axios.get(`${BASE_URL}`)
      setQuotes(response.data)
      console.log(response)
    }
    getQuotes()
  }, [])
  
  return (
    <div>
      <Title />
      <div className="grid">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Anime quotes={quotes} />
          <div className="flip-card-back">
            <Quote quotes={quotes}/>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  )
}


export default App