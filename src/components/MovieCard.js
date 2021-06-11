import "./MovieCard.css"

function MovieCard(props) {
    return <div className="movieCard">
            {/* <h1>{props.title}</h1> */}
            
           <span className="card"> <img src={`https://image.tmdb.org/t/p/w300${props.img}`} alt="movie poster"/>
            {/* <p>{props.overview}</p> */}</span>
            

            

    </div>
}
export default MovieCard