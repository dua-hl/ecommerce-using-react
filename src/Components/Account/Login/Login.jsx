import React, { useState } from 'react'
import style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

export default function Login(props) {
    let schema = Yup.object({
        email: Yup.string().required("email is required").email(`email is not correct`),
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
            props.decodedData();
            navigate('/');
        }
        catch(error){
            const errorMessage = error.message;
            setErrorStatus(errorMessage)
            console.log(errorStatus);
        }

    }

//forget password box display: => it should be displayed when clicking on forget pass in login box
let forgetPassBox = document.getElementById('forgetPassBox')

function forgetPass(){
    forgetPassBox.classList.remove('invisible');     
}

//cancel forget password and return to login:
function cancelForgetPass(){
    forgetPassBox.classList.add('invisible');    
}

  return (
    <div>
        
    <div className={`d-flex align-items-center ${style.login}`}>  

    <div className=''>  
    <h2 className='text-center text-capitalize pb-4'>my account</h2>

    <div className='d-flex justify-content-center gap-4'>

    <div className={`col-6 border p-5 ${style.box} position-relative`}>
        <h3 className='text-uppercase pt-1'>login</h3>
        <p className='py-2'>If you have an account with us, please log in.</p>

        <form onSubmit={formik.handleSubmit}>
        <input type="email" autoComplete='off'  placeholder='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
        {formik.touched.email && formik.errors.email ?
        (<p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.email}</p>)
        :null  
        }

        <input type="password" autoComplete='off' placeholder='password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
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

        <button type='submit' className={`mb-2 mt-1 ${style.loginbutton}`}>Sign In</button>
        </form>

        <div className={`text-end pt-2 pb-4 ${style.link}`}>
        <Link to='' id='forgetPassClick' onClick={forgetPass} className={`text-dark ${style.Link}`}>Forgot Password?</Link>
        </div>


    <div id='forgetPassBox' className={`border p-5 ${style.box} position-absolute w-100 top-0 start-0 invisible`}>
        <h3 className='text-uppercase pt-1'>login</h3>
        <p className='pb-2 pt-1'>If you have an account with us, please log in.</p>

        <h4 className='text-uppercase fw-bold'>Reset your password</h4>
        <p className='pb-2'>We will send you an email to reset your password.</p>

        <form onSubmit={formik.handleSubmit}>
        <input type="email" autoComplete='off'  placeholder='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
        {formik.touched.email && formik.errors.email ?
        (<p className={`fw-bold mt-3 ${style.frontError}`}>{formik.errors.email}</p>)
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

        <button type='submit' className={`mb-1 mt- ${style.loginbutton}`}>SUbmit</button>
        </form>

        <div className={`text-end pt-2 pb-4 ${style.link}`}>
        <Link to='' onClick={cancelForgetPass} className={`text-dark ${style.Link}`}>Cancel</Link>
        </div>
    </div>



    </div>

    <div className={`col-6 border p-5 ${style.box}`}>
        <h3 className='text-uppercase'>new customer?</h3>
        <p className='py-3'>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>
        <button className={`mb-2 mt-1 ${style.loginbutton}`}><Link to='/account/register' className={`text-white text-decoration-none`}>create an account</Link></button>
    </div>


    </div>

    </div> 
    </div> 

    </div>
  )
}
