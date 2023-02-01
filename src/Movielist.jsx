import { useState } from "react";
import { useEffect } from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function Movielist () {
  //movie list fetch in API
  const [obj, setObject] = useState([]);

const getMovies=()=>{
  fetch("https://63d870175a330a6ae16865de.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setObject(mvs));
}

  useEffect(() => getMovies(), []);

  const deleteMovie = async(id)=>{
//technique :1
    //  fetch(`https://63d870175a330a6ae16865de.mockapi.io/movies/${id}`,{
    //   method:"DELETE",
    // }).then(()=>getMovies());
    //technique:2
  await fetch(`https://63d870175a330a6ae16865de.mockapi.io/movies/${id}`,{
      method:"DELETE",
    });
    getMovies();
  }
  return (
    //ithula index and key value ethukuna map panrapo error kattama iruka
    <div>
      {/* <AddMovie obj={obj} setObject={setObject} /> */}
      <div className="movieslist">
        {obj.map((mv) => 
        (<Movie key={mv.id} 
        data={mv} 
        id={mv.id} 
        DeletteButton={  
        <IconButton color="error" onClick={()=>deleteMovie(mv.id)} aria-label="delete">
        <DeleteIcon />
        </IconButton>}/>))}
      </div>
    </div>

  );
}
