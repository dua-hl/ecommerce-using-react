import React, { useState } from 'react'
import style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

export default function Login(props) {
    let schema = Yup.object({
        email: Yup.string().required("email is required").email(`email is not correct`).matches(/^[^/,'>]+${}-/, 'Characters are not allowed') ,
        password:Yup.string().required("password is required").min(3,"minimum 5 letters").matches(/^(?=.*[A-Z])(?!.*[\W_]).*$/, 'Password must contain at least one uppercase letter and no special characters'),
    })

    let [errorStatus, setErrorStatus]=useState('')

    let navigate = useNavigate();

    let formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:schema,
        onSubmit: checkDataAuthuntication,
    })

    async function checkDataAuthuntication(values){
        
        try{
            let {data} = await axios.post('https://king-prawn-app-3mgea.ondigitalocean.app/auth/login',values);
            localStorage.setItem('userToken', data.access_token);
            setErrorStatus('');
            navigate('/account/enteraccount');
        }
        catch(error){
            const errorMessage = error.response.data.message;
            setErrorStatus(errorMessage)
            console.log(errorStatus);
        }

    }


  return (
    <div>
        
    <div className={`d-flex align-items-center justify content-center ${style.login}`}>  

    <div className=''>  
    <h2 className='text-center text-capitalize py-4'>my account</h2>

    <div className='d-flex gap-4'>

    <div className='border col-4 p-5'>
        <h3 className='text-uppercase'>login</h3>
        <p className='py-3'>If you have an account with us, please log in.</p>

        <form onSubmit={formik.handleSubmit}>
        <input type="email"  placeholder='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
        {formik.touched.email && formik.errors.email ?
        (<p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.email}</p>)
        :null  
        }

        <input type="password" placeholder='password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
        {formik.touched.password && formik.errors.password ?
        (<p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.password}</p>)
        :null  
        }

        { errorStatus ?
        (<p className={`fw-bold mt-2 mb-2 ${style.backError}`}><span className='text-uppercase'>sorry!</span> {errorStatus}.</p>)
        :null  
        }
        { errorStatus=='Not register account' ?
        <Link to='/account/register' className={`text-dark fw-bold ${style.Link}`}>Create account?</Link>
        : null
        }

        <button type='submit' className={`mb-2 mt-1 ${style.loginbutton}`}>Sign in</button>
        </form>

        <div className={`text-end pt-2 pb-3 ${style.link}`}>
        <Link to='/' className={`text-dark ${style.Link}`}>Forgot password?</Link>
        </div>
    </div>

    <div className='border col-4 p-5'>
        <h3 className='text-uppercase'>new customer?</h3>
        <p className='py-3'>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>
        <button><Link to='/account/register' className='text-white text-decoration-none'>create an account</Link></button>
    </div>


    </div>

    </div> 
    </div> 

    </div>
  )
}
