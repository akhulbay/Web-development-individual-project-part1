import '../../../App.css';
import {useState} from "react";
function NavBar() {
    const [hideHiddenDiv, setHideHiddenDiv] = useState(true);
    return (
        <div className="NavBar">
            <div className="App-movies-page-navbar">
                <div className="movies-page-navbar-title">
                    <h2>Movies</h2>
                </div>
                <div className="movies-category">
                    <form name={"formCategory"}>
                        <input type={"text"} name={"inputCategory"} readOnly={true}/>
                        <svg onClick={() => setHideHiddenDiv(false)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </form>
                </div>
                <div className={`hidden-categories ${hideHiddenDiv ? "hide-div" : ""}`}>
                    <ul>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Military
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Detectives
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            For Family
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            For Kids
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Dramas
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Documentary
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Comedy
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Horror
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Adventure
                        </li>
                        <li onClick={() => setHideHiddenDiv(true)}>
                            Fantasy
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default NavBar;