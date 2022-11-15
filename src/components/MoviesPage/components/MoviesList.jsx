import '../../../App.css';
import Categories from "./Categories";
import {useState} from "react";

function MoviesList(array) {
    const [data,setData] = useState(Categories);
    return (
        <div className="movies-by-categories">
            <div className="movies-by-categories-list">
                {data.map((values)=>{
                    const {id, title, image, category} = values;
                    return(
                        <>
                            <div className="card-body" key={id}>
                                <img src={image} className={"card-image"} alt={""} width={180} height={120} key={image}/>
                                <h5 className={"card-title"}>{title}</h5>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    );
}

export default MoviesList;
