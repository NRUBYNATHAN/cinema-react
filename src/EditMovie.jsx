
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from 'react';
import { API } from './global';

export function EditMovie() {
  
  const { id } = useParams();
  //const data = obj[id];
  const [Movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);
  console.log(Movie);
  return(
  
      Movie ? <EditMovieForm Movie={Movie}/> : <h1>loadiing...</h1>
   
  );
}
function EditMovieForm({Movie}){
  
  const formValidationSchema=yup.object({
    name: yup.string().required(),
    poster:yup.string().required().min(4).url(),
    summary:yup.string().required().min(20),
    Rating: yup.number().required().min(0).max(10),
    Trailer: yup.string().required().min(4).url(),
   },)
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({

    initialValues:{
        name: Movie.name  ,   
        poster:Movie.poster, 
        summary:Movie.summary,
        Rating:Movie.rating,
        Trailer: Movie.trailer,
    },

    validationSchema : formValidationSchema,

    onSubmit:(newMovie)=>{
    console.log("form value",newMovie);
    ubdateMovie(newMovie);
    }
  });
  

  const navigate=useNavigate();
  const ubdateMovie=async (newMovie)=>{
    
    
      fetch(`${API}/${Movie.id}`,{
        method:"PUT",
        body:JSON.stringify(newMovie),
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
     

     
      <Button type="submit" variant="contained" color="success">Save</Button>
    </form>

  );
}
