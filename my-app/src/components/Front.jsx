import '../App.css'

const Card = (props) => {
   
    return (
        
                <div className="flip-card-front">
                    <div key={props.quote} className="grid">
                        <h2>{props.anime}</h2>
                        <h3>{props.character}</h3>
                    </div> 
                </div>  

    )
}

export default Card 