import React from 'react'
import { Useglobalcontext } from '../globalcontext/Useglobalcontext'
import Home from './Home'
import {Navigate} from 'react-router-dom'


const Verify = () => {
    const {user}=Useglobalcontext()
    
      if(!user){
       return <Navigate to='/login'/>
   }
   
   

  return <Home></Home>


  
}

export default Verify