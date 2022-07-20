import { BASE_URL } from './globals.js'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './components/Title.jsx'
import Card from './components/Card'

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
      <div> 
        <div> 
          <Title />
        </div>  
              <Card quotes={quotes} />
      </div>
    </div>
   
  )
}

export default App