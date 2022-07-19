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
    <div> <Title />
              <Anime quotes={quotes} />
          </div>
      <div className='flip-card-back'>
        <Quote quotes={quotes}/>
      </div>
      </div>
    

    
      
  )
}


export default App