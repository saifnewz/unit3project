import '../App.css'

const Quote = (props) => {
   
    return (
        
        <div>
            {props.quotes.map((quote) => (
                <div key={quote.anime}>
                    <h2>{quote.anime}</h2>
                    <h3>{quote.character}</h3>
                    <p>"{quote.quote}"</p>
                </div>
            ))
            }
        </div> 
    )
}


export default Quote 