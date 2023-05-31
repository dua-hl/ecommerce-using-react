import React, { useState } from 'react'
import style from './CreateAccount.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';

export default function CreateAccount() {
  let [errors,setErrors]=useState([]);
  let [errorStatus,setErrorStatus]=useState('');
  let navigate=useNavigate();

  const schema = Yup.object({
     email: Yup.string().required("email is required").email("not valid") ,
      name:Yup.string().required("name is required").min(3,"minimum 3 letters").max(10,"maximum 10 letters") ,
      password:Yup.string().required("password is required"),
      cPassword: Yup.string().required("confirm your password").oneOf([Yup.ref('password')],"not matching passwords"),
    })

  const formik= useFormik({
    initialValues:{
      email: ' ',
      name: '',
      password:'',
      cPassword: ''
    },
    validationSchema:schema,
    onSubmit:SendRegistrationData,
  
  })

  async function SendRegistrationData(values){

    let {data}= await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",values)
    .catch((errorstatus)=>{
      setErrorStatus(errorstatus.response)
      console.log(errorStatus)
    })

    if(data.message=="success"){
      console.log("welcome")
      navigate('/account/login');
      console.log("welcome")
    }else{
      setErrors(data.err[0])
      console.log(errors)   
    }
  }

  return (
    <div>

    <form onSubmit={formik.handleSubmit} className={`d-flex justify-content-center align-items-center ${style.registall}`}>  
    <div className={`${style.regist}`}>

    <h2 className='text-capitalize p-3 text-center'>create an account</h2>

    <input type="text" placeholder='Name' name='name' value={formik.values.name} onChange={formik.handleChange}/>
    <p className='text-danger'>{formik.errors.name}</p>

    <input type="email" placeholder='Email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
    <p className='text-danger'>{formik.errors.email}</p>

    <input type="password" placeholder='Password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
    <p className='text-danger'>{formik.errors.password}</p>

    <input type="password" placeholder='Confirm password' name='cPassword' value={formik.values.cPassword} onChange={formik.handleChange}/>
    <p className='text-danger'>{formik.errors.cPassword}</p>

      <div>
        <input type="checkbox" className='d-inline-block' />
        <Link to=""><p className='d-inline-block ms-2'>Subscribe to stay updated with new products and offers!</p></Link>
    </div>    

    <button type='submit' className='m-auto w-100 text-center text-uppercase mt-3'>submit</button>
    
    </div>
    </form>
    </div>

  )
}
