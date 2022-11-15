import '../../../App.css';
function MoviesListDivs({img, title}) {
    return (
        <div className={"MoviesListDivs"}>
            <div className={"rec-block"}>
                <img src={img} alt="img" />
                <span>{title}</span>
            </div>
        </div>
    );
}

export default MoviesListDivs;
