import React from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {w500PosterURL} from "../../constants/urls/urls";

const MoviesListCard = ({movie}) => {
    // const navigate = useNavigate()
    const {id,poster_path, original_title} = movie

    return (
        <div>
            <h3>{original_title}</h3>
           <div>
                <Link to={`/movieInfo/${id}`}>
                    <img style={{width:250,display:"flex", flexWrap:"wrap", justifyContent:"space-between"}} src={`${w500PosterURL}${poster_path}`}/>
                </Link>
           </div>
              <Outlet/>
        </div>
    );
};

export default MoviesListCard;