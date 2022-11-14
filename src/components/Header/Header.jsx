import '../../App.css';
import {NavLink} from "react-router-dom";
function Header() {
    return (
        <div className="Header">
            <header className="App-header">
                <div className="logo">
                    <img src="logo.png"/>
                </div>
                <div className="navbar">
                    <ul>
                        <li><NavLink to={"/home"} style={{textDecoration: 'none', color: 'white'}} >Home</NavLink></li>
                        <li><NavLink to={"/movies"} style={{textDecoration: 'none', color: 'white'}} >Movies</NavLink></li>
                        <li>Series</li>
                        <li>TV-Shows</li>
                        <li><NavLink to={"/sign-in"} style={{textDecoration: 'none', color: 'white'}} >Sign-in</NavLink></li>
                    </ul>
                </div>
                <div className="search-button">
                    <form>
                        <input type={"text"} placeholder={"Search"}/>
                        <button type={"button"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default Header;