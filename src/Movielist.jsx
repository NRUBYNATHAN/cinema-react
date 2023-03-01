import { useState } from "react";
import { useEffect } from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function Movielist () {
  //movie list fetch in API
  const [obj, setObject] = useState([]);

const getMovies=()=>{
  fetch(`${API}/`)
      .then((data) => data.json())
      .then((mvs) => setObject(mvs));
}

  useEffect(() => getMovies(), []);

  const deleteMovie = async(id)=>{
   //Technique :1
    //  fetch(`${API}/${id}`,{
    //   method:"DELETE",
    // }).then(()=>getMovies());

    //Technique:2
  await fetch(`${API}/${id}`,{
      method:"DELETE",
    });
    getMovies();
  }
  const navigate=useNavigate()
  return (
    //ithula index and key value ethukuna map panrapo error kattama iruka
    <div>
      {/* <AddMovie obj={obj} setObject={setObject} /> */}
      <div className="movieslist">
        {obj.map((mv) => 
        (<Movie key={mv.id} 
        data={mv} 
        id={mv._id} 
        DeletteButton={  
        <IconButton  color="error" onClick={()=>deleteMovie(mv.id)} aria-label="delete">
        <DeleteIcon />
        </IconButton>}
         EditButton={  
          <IconButton  color="secondary" onClick={()=>navigate(`/movie-list/edit/${mv.id}`)} aria-label="edit movie">
          <EditIcon />
          </IconButton>}
        />))}
      </div>
    </div>

  );
}
