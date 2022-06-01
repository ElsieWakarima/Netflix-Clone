import  React  from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

// i dont get it why nikieka yangu inakataa kudisplay anything/ acha nicompare codes zote quick 
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
     <Row title="Trending now" fetchUrl={requests.fetchTrending} isLargeRow />
     <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Animations" fetchUrl={requests.fetchAnimation} />
     <Row title="Scifi Movies" fetchUrl={requests.fetchScifi} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
