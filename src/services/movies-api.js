
function getMovies() {

    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=US`).then(res => res.json());
}


const API_KEY = '01d8cda98918b4254748ca838842a38b'

// https://api.themoviedb.org/3/movie/now_playing?api_key=01d8cda98918b4254748ca838842a38b&language=en-US&page=1&region=US


export default getMovies