
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema=yup.object({
 email: yup.string().required("why not fill this email ? 😒").min(12,"need a 12 charecters in email😁").max(20,"pls fill 20 charecters in email😁"),
 password: yup.string().required("why not fill this password ? 😒").min(8,"need a 8 charecters in password😁").max(12,"pls fill 12 charecters in password😁"),
})

export function BasicForm() {
  const formik = useFormik({
    initialValues:{email:"",password:""},
    validationSchema : formValidationSchema,
    onSubmit:(values)=>console.log("form value",values),
  });

  return (
   <form onSubmit={formik.handleSubmit}>

    <input 
    name="email"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email} 
    type="email" 
    placeholder="email"/>

{formik.touched.email && formik.errors.email ?formik.errors.email : null}

    <input
    name="password"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.password}
    type="text"
    placeholder="password"/>

{formik.touched.password && formik.errors.password ?formik.errors.password : null}


    <button type="submit">submit</button>
   </form>
  );
}
