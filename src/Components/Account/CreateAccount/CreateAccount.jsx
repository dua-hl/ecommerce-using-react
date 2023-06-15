import React, { useState } from 'react'
import style from './CreateAccount.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';

export default function CreateAccount() {
  let [errors,setErrors]=useState([]);
  let [errorStatus,setErrorStatus]=useState("");
  let navigate=useNavigate();

  const schema = Yup.object({
     email: Yup.string().required("email is required").email("email is not correct").matches(/^[^/,'>]+${}-/, 'Characters are not allowed') ,
     userName:Yup.string().required("name is required").min(3,"minimum 3 letters").max(10,"maximum 10 letters").matches(/^[^/,'>]+${}-/, 'Characters are not allowed') ,
      password:Yup.string().required("password is required").min(5,"minimum 5 letters").matches(/^(?=.*[A-Z])(?!.*[\W_]).*$/, 'Password must contain at least one uppercase letter and no special characters'),
      cPassword: Yup.string().required("confirm your password").oneOf([Yup.ref('password')],"not matching passwords"),
    })

  const formik= useFormik({
    initialValues:{
      userName: ' ',
      email: '',
      password:'',
      cPassword: ''
    },
    validationSchema:schema,
    onSubmit:SendRegistrationData,
  
  })

  async function SendRegistrationData(values){

    try{
      let {data} = await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/signup",values)
      console.log(data)

      navigate('/account/login')
      setErrorStatus('');
    }
    catch (error) {
      const errorMessage =error.response.data.message;
      setErrorStatus(errorMessage);
      console.log(errorMessage);
    };
    
  }

  return (
    <div>

    <form onSubmit={formik.handleSubmit} className={`d-flex justify-content-center align-items-center ${style.registall}`}>  
    <div className={`${style.regist}`}>

    <h2 className='text-capitalize p-3 text-center'>create an account</h2>

    <input type="text" placeholder="Name" name="userName" value={formik.values.userName} onChange={formik.handleChange} />
{formik.touched.userName && formik.errors.userName ? <p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.userName}</p> : null}



<input type="email" placeholder='Email' name='email' value={formik.values.email} onChange={formik.handleChange} />
{formik.touched.email && formik.errors.email ? (<p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.email}</p>) : null}

    <input type="password" placeholder='Password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
    {formik.touched.password ? 
    (<p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.password}</p>)  
    :null
    }

    <input type="password" placeholder='Confirm password' name='cPassword' value={formik.values.cPassword} onChange={formik.handleChange}/>
    {formik.touched.cPassword ? 
    (<p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.cPassword}</p>)
    : null
    }

      <div>
        <input type="checkbox" className='d-inline-block' />
        <Link to=""><p className='d-inline-block ms-2'>Subscribe to stay updated with new products and offers!</p></Link>
    </div>    

    { errorStatus ?
    (<p className={`fw-bold mt-3 ${style.backError}`}><span className='text-uppercase'>sorry!</span> {errorStatus}. Try again, please.</p>)
    :null  
    }

    <button type='submit' className='m-auto w-100 text-center text-uppercase mt-3'>submit</button>
    
    </div>
    </form>
    </div>

  )
}
