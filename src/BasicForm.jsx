
import { useFormik } from "formik";
import * as yup from "yup";
import {useState} from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const formValidationSchema=yup.object({

 email:
  yup.string().email().required("why not fill this email ? 😒").min(12,"need a 12 charecters in email😁").max(20,"pls fill 20 charecters in email😁"),
 password: 
 yup.string().required("why not fill this password ? 😒").min(8,"need a 8 charecters in password😁").max(12,"pls fill 12 charecters in password😁"),
})

export function BasicForm() {
  //object destructuring first line bracket la ullathu
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({
    initialValues:{email:"",password:""},
    validationSchema : formValidationSchema,
    onSubmit:(values)=>console.log("form value",values),
  });
const[on,setOn]=useState(true)
  return (
   <form onSubmit={handleSubmit}>

    <input 
    name="email"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email} 
    type="email" 
    placeholder="email"/>

{touched.email && errors.email ?errors.email : null}

    <input
    name="password"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.password}
    type= {(on === true ?"password" : 'text')}
    placeholder="password" 
   
    />
     {<IconButton onClick={()=>setOn(!on)} aria-label="HIDE">
    {on ? <VisibilityOffIcon /> :<VisibilityIcon />  }
      </IconButton>}

{touched.password && errors.password ?errors.password : null}


    <button type="submit">submit</button>
   </form>
  );
}

