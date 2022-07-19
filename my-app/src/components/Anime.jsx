import '../App.css'

const Anime = (props) => {
   
    return (
        
        <div>
            {props.quotes.map((quote) => (
                <div key={quote.quote} className="grid">
                    <h2>{quote.anime}</h2>
                    <h3>{quote.character}</h3>
                </div>
            ))
            }
        </div> 

    )
}

export default Anime 