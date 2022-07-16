import '../App.css'

const Quote = (props) => {
   
    return (
        
        <div className="column">
            {props.quotes.map((quote) => (
                <div key={quote.anime} className="text">
                    <h2>{quote.anime}</h2>
                    <h3>{quote.character}</h3>
                    <h4>"{quote.quote}"</h4>
                </div>
            ))
            }
        </div> 
    )
}


export default Quote 