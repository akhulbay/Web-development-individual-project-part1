import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Container from "./Container";
import MoviesRec from "./MoviesRec";
import Footer from "./Footer";


function App() {
    return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="App-container">
          <Container/>
          <div className="movies-recommendation">
              <h2>Movies For You</h2>
              <ul className={"movie-list"}>
                  <li><MoviesRec img={"movie1.png"} title={"Encanto"}/></li>
                  <li><MoviesRec img={"movie2.png"} title={"Big Mommas"}/></li>
                  <li><MoviesRec img={"movie3.png"} title={"Eiffel"}/></li>
                  <li><MoviesRec img={"movie4.png"} title={"Ghostbusters"}/></li>
                  <li><MoviesRec img={"movie5.png"} title={"Purple Hearts"}/></li>
              </ul>
          </div>


      </div>
    <div className="App-footer">
        <Footer/>
    </div>
    </div>
  );
}

export default App;
