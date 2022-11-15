import '../../../App.css';
import React, {useState} from "react";
import Categories from "./Categories";

function NavBar() {
    const [data, setData] = useState(Categories);
    const [hideHiddenDiv, setHideHiddenDiv] = useState(true);
    const filterItems = (catItem) => {
        document.formCategory.inputCategory.value = catItem;
        const result = Categories.filter((curData)=>{
            return curData.category === catItem;
        });
        setData(result);
    }
    return (
        <div className="NavBar">
            <div className="App-movies-page-navbar">
                <div className="movies-page-navbar-title">
                    <h2>Movies</h2>
                </div>
                <div className="movies-category">
                    <form name={"formCategory"} className={"form-category"}>
                        <input type={"text"} className={"input-category"} name={"inputCategory"} readOnly={true} placeholder={"All"}/>
                        <svg onClick={() => setHideHiddenDiv(false)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </form>
                </div>
                <div className={`hidden-categories ${hideHiddenDiv ? "hide-div" : ""}`}>
                    <ul>
                        <li onClick={() => {setHideHiddenDiv(true); setData(Categories); document.formCategory.inputCategory.value = "All"}}>
                            All
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Military")}}>
                            Military
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Detectives")}}>
                            Detectives
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("For Family")}}>
                            For Family
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("For Kids")}}>
                            For Kids
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Dramas")}}>
                            Dramas
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Documentary")}}>
                            Documentary
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Comedy")}}>
                            Comedy
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Horror")}}>
                            Horror
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Adventure")}}>
                            Adventure
                        </li>
                        <li onClick={() => {setHideHiddenDiv(true); filterItems("Fantasy")}}>
                            Fantasy
                        </li>
                    </ul>

                </div>
            </div>
            <div className="movies-by-categories">
                <div className="movies-by-categories-list">
                    {data.map((values) => {
                        const {id, title, image} = values;
                        return (
                            <>
                                <div className="card-body" key={id}>
                                    <img src={image} className={"card-image"} alt={""} width={160} height={100}
                                         key={image}/>
                                    <h5 className={"card-title"}>{title}</h5>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default NavBar;