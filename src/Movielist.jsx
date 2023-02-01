import { useState } from "react";
import { useEffect } from "react";
import { Movie } from "./Movie";

export function Movielist () {
  //movie list fetch in API
  const [obj, setObject] = useState([]);

  useEffect(() => {
    fetch("https://63d870175a330a6ae16865de.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setObject(mvs));
  }, []);

  const deleteMovie = ()=>{
    console.log("deleted")
  }
  return (
    //ithula index and key value ethukuna map panrapo error kattama iruka
    <div>
      {/* <AddMovie obj={obj} setObject={setObject} /> */}
      <div className="movieslist">
        {obj.map((mv) => (<Movie key={mv.id} data={mv} id={mv.id} DeletteButton={<button onClick={()=>deleteMovie()}>delete</button>}/>))}
      </div>
    </div>

  );
}
