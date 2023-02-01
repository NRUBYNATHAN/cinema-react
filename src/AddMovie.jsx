import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export function AddMovie({ obj, setObject }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
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
      <Button onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          summary: summary,
          rating: rating,
          trailer: trailer,
        };
        setObject([...obj, newMovie]);
      }} variant="contained">Add Movie</Button>
    </div>

  );
}
