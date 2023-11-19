import React from 'react'
import { Useglobalcontext } from '../globalcontext/Useglobalcontext'

import '../assets/login.css'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const {isuser,msg,login,user,isusertrigger,register}=Useglobalcontext()
  const navigate=useNavigate() 


  const [email,setemail]=useState('')
  const [name,setname]=useState('')
  const [password,setpassword]=useState('')

  useEffect(() => {
    if (user) {
      
        navigate('/verify');
      
    }
   
  }, [user, navigate]);


  const submit=async(e)=>{
    
    e.preventDefault()
    if(isuser){
    await login({email,password})}
    else{
      await register({email,name,password})
    }
   
  }
  return (
    <div className='container2'>hello
    <form className='wrapper' onSubmit={submit}>
      <div className='row'>
      <label className='label'> email:</label>
      
      <input  type="text"  placeholder='please enter your email' className='input' onChange={(e)=>setemail(e.target.value)}></input></div>
      
        {!isuser && (<div  className='row'><label className='label'>name:</label>
      
      <input type="text"  placeholder='please enter your name' className='input'  onChange={(e)=>setname(e.target.value)}></input></div>)}
     
     

     <div   className='row'>
      <label  className='label'>password:</label>
      <input type='password' onChange={(e)=>setpassword(e.target.value)}></input></div>

      <div className='bbb'><button className='button' type='submit'>{isuser?'Login':'Register'}</button></div>
      <div className='bbb'><button className='butt' type='button' onClick={isusertrigger}>{isuser?'not a user yet?':'already a user?'}</button></div>
      <div><h1>{msg}</h1></div>
    </form>
    </div>
  )
}

export default Login