import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useFormik } from "formik";
import * as yup from "yup";
import { API } from './global';

export function AddMovie() {
  const formValidationSchema=yup.object({
   name: yup.string().required(),
   poster:yup.string().required().min(4).url(),
   summary:yup.string().required().min(20),
   Rating: yup.number().required().min(0).max(10),
   Trailer: yup.string().required().min(4).url(),
  },)
   
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({

    initialValues:{
        name: "",
        poster: "",
        summary: "",
        Rating: "",
        Trailer: "",
    },

    validationSchema : formValidationSchema,

    onSubmit:(newMovie)=>{
    console.log("form value",newMovie);
    addMovie(newMovie);
    }
  });
  
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const navigate=useNavigate();
  const addMovie=async (newMovie)=>{
    
      // const newMovie = {
      //   name: name,
      //   poster: poster,
      //   summary: summary,
      //   rating: rating,
      //   trailer: trailer,
      // };
      fetch(`${API}`,{
        method:"POST",
        body:JSON.stringify([newMovie]),
        headers:{"Content-Type": "application/json",},
        
      });
      navigate("/movie-list")
       };

      
  return (
    <form onSubmit={handleSubmit} className="input">
      <TextField  error={touched.name && errors.name} name ="name"    onChange={handleChange} onBlur={handleBlur} value={values.name} label="name"       helperText={touched.name && errors.name? errors.name : null} variant="outlined" />
      <TextField  error={touched.poster && errors.poster} name ="poster"  onChange={handleChange} onBlur={handleBlur} value={values.poster} label="poster url"  helperText={touched.poster && errors.poster? errors.poster : null} variant="outlined" />
      <TextField error={touched.summary && errors.summary} name ="summary" onChange={handleChange} onBlur={handleBlur} value={values.summary} label="summary"     helperText={touched.summary && errors.summary? errors.summary : null} variant="outlined" />
      <TextField error={touched.Rating && errors.Rating} name ="Rating"  onChange={handleChange} onBlur={handleBlur} value={values.Rating} label="Rating"     helperText={touched.Rating && errors.Rating? errors.Rating : null} variant="outlined" />
      <TextField error={touched.Trailer && errors.Trailer} name ="Trailer" onChange={handleChange} onBlur={handleBlur} value={values.Trailer} label="Trailer"   helperText={touched.Trailer && errors.Trailer? errors.Trailer : null} variant="outlined" />
     

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
      <Button type="submit" variant="contained">Add Movie</Button>
    </form>

  );
}
