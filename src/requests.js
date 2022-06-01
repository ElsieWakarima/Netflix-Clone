const API_KEY="4ffcad6e5e76627dbf3860a1a83343e8";
const requests={
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`

}
export default requests;