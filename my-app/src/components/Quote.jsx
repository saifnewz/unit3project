import '../App.css'

const Quote = (props) => {
   
    return (
        
        <div className="column">
            {props.quotes.map((quote) => (
                <div key={quote.anime} className="text">
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