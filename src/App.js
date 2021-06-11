
import './App.css';
import getMovies from './services/movies-api';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard'

function App() {

const [appData, setAppData] = useState([]);

const [card, setCard] = useState(false);

useEffect(() => {
  async function getAppData() {
    const data = await getMovies();
    setAppData(data.results)
  }
  getAppData();
    }, [])

function handleClick() {
  console.log('clicked')
}

  return (
    <div className="App">
      <h1>MOVIES NOW PLAYING</h1>
      <h2 onMouseOver={handleClick} >{appData.map((movie => (
        <MovieCard
        key={movie.id}
        img = {movie.poster_path}
        
        // title = {movie.original_title}
        // overview = {movie.overview}
        />
      )))}
        </h2>
    </div>
  );
}

export default App;
