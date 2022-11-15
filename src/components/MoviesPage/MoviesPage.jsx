import '../../App.css';
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
function MoviesPage() {
    return (
        <div className="MoviesPage">
            <div className="App-movies-page">
                <NavBar/>
                <MoviesList/>
            </div>
        </div>
    );
}

export default MoviesPage;