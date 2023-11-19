import React from 'react'
import { useState } from 'react'
import { Useglobalcontext } from '../globalcontext/Useglobalcontext'
import {useNavigate} from 'react-router-dom'

const Update = () => {
    const navigate=useNavigate() 
   
    const {isuser,msg,login,user,isusertrigger,register,update}=Useglobalcontext()
     const updateuser=async(e)=>{
       
      e.preventDefault()
      
      await update({email,name,password,id:user._id})
    navigate('/verify')
    
    }
    React.useEffect(()=>{if(!user.name){
        
        navigate('/login')}},[])

     const [email,setemail]=useState(user.email)
  const [name,setname]=useState(user.name)
  const [password,setpassword]=useState(user.password)
  return (
    <div >hello
    <form className='wrapper' onSubmit={updateuser}>
      <div className='row'>
      <label className='label'> <h1>email:</h1></label>
      
      <input type="text"  value={email} className='input' onChange={(e)=>setemail(e.target.value)}></input></div>
      
         <div  className='row'><label className='label'> <h1>name:</h1></label>
      
      <input type="text"  value={name} className='input'  onChange={(e)=>setname(e.target.value)}></input></div>
     
     

     <div   className='row'>
      <label  className='label'><h1>password:</h1></label>
      <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)}></input></div>

      <div className='bbb'><button className='button' type='submit'>{update?'update':'delete'} </button></div>
     
      <div><h1>{msg}</h1></div>
    </form>
    </div>
  )
}

export default Update