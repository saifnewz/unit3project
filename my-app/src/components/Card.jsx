import '../App.css'
import Front from './Front'
import Back from './Back'

const Card = (props) => {
   
    return (
        
        <div>
            
            {props.quotes.map((quote) => (
                <div className="flip-card">
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