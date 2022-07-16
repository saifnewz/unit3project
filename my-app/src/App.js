import { BASE_URL } from './globals.js'
import { useEffect } from 'react'
import axios from 'axios'
import Quote from './components/Quote'
import { useState } from 'react'
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
      <Quote quotes={quotes} />
    </div>

  )
}


export default App