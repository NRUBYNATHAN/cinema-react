import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate=useNavigate();
  const addMovie=async ()=>{
    
      const newMovie = {
        name: name,
        poster: poster,
        summary: summary,
        rating: rating,
        trailer: trailer,
      };
      fetch("https://63d870175a330a6ae16865de.mockapi.io/movies",{
        method:"POST",
        body:JSON.stringify(newMovie),
        headers:{"Content-Type": "application/json",},
        
      });
      navigate("/movie-list")
      };

      
  return (
    <div className="input">
      <TextField onChange={(event) => setName(event.target.value)} label="name" variant="outlined" />
      <TextField onChange={(event) => setPoster(event.target.value)} label="poster url" variant="outlined" />
      <TextField onChange={(event) => setSummary(event.target.value)} label="summary" variant="outlined" />
      <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
      <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />

      {/*<input onChange={(event)=>setName(event.target.value)} type="text" placeholder="name"/>
            <input onChange={(event)=>setPoster(event.target.value)} type="text" placeholder="poster"/>
            <input onChange={(event)=>setSummary(event.target.value)} type="text" placeholder="summary"/>
            <input onChange={(event)=>setRating(event.target.value)} type="text" placeholder="rating"/> */}

      {/*meterial button introduce */}

      {/* <button onClick={()=>{
            const newMovie= {
              name:name,
              poster:poster,
              summary:summary,
              rating:rating,};
              setObject([...obj,newMovie]);
            }}>Add Movie</button> */}
      {/* meterial button  */}
      <Button onClick={addMovie} variant="contained">Add Movie</Button>
    </div>

  );
}
