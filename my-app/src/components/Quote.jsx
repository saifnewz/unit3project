import '../App.css'

const Quote = (props) => {
   
    return (
        
        <div className="grid">
            {props.quotes.map((quote) => (
                <div key={quote.quote} className="grid">
                    <h4>{quote.quote}</h4>
                </div>
            ))
            }
        </div> 
    
    )
}


export default Quote 