import '../App.css'

const Quote = (props) => {
   
    return (
        
        <div>
            {props.quotes.map((quote) => (
                <div key={quote.anime} className="text">
                    <h4>
                        {quote.quote}
                    </h4>
                </div>
            ))
            }
        </div> 
    )
}


export default Quote 