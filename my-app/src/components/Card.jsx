import '../App.css'
import Front from './Front'
import Back from './Back'

const Card = (props) => {
   
    return (
        
        <div className="flip-card-row">
            
            {props.quotes.map((quote) => (

                <div key={quote.quote} className="flip-card">
                    <div className="flip-card-inner">
                        < Front character={quote.character} anime={quote.anime}/> 
                        < Back quote={quote.quote} />
                    </div>   
                </div>   
            ))          
            }
        </div> 

    )
}

export default Card 