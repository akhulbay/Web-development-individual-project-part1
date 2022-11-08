import './App.css';
import MoviesRecDiv from "./MoviesRecDiv";
function Container() {
    return (
        <div className="Container">
            <div className="App-container">
                <div className="main-banner">
                    <div className="left-arrow">
                        <img src={"left-arrow.png"}/>
                    </div>
                    <div className="banner">
                        <img src={"banner.png"}/>
                    </div>
                    <div className="right-arrow">
                        <img src={"right-arrow.png"}/>
                    </div>
                </div>
                <div className="play-button-banner">
                    <div className="button-content">
                        <img src={"play-button.png"} width={20} height={20}/>
                        <h3>Play</h3>
                    </div>
                </div>
                <MoviesRecDiv/>
            </div>
        </div>
    );
}

export default Container;