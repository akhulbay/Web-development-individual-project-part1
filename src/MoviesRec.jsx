import './App.css';
function MoviesRec({img, title}) {
    return (
        <div className={"MoviesRec"}>
            <div className={"rec-block"}>
                <img src={img} alt="img" />
                <span>{title}</span>
            </div>
        </div>
    );
}

export default MoviesRec;
