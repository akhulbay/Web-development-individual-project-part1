import './App.css';
import MoviesRec from "./MoviesRec";
function MoviesRecDiv({img, title}) {
    return (
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
    );
}

export default MoviesRecDiv;
