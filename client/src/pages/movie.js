import React from 'react'
import { Useglobalcontext } from '../globalcontext/Useglobalcontext'
import {Navigate} from 'react-router-dom'
import {FaSearch,FaArrowDown} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

import {FaPlay} from 'react-icons/fa'
import '../assets/movie.css'

let x=false
const Movie = () => {
    const {movies,user,logout,setmovie,movie,search,deleteuser}=Useglobalcontext()
    const navigate=useNavigate() 
    const showbutton=()=>{
        const ele=document.querySelector('.temp')
        if(!x){
        ele.style.display='block'
        x=!x
      return}else{
        ele.style.display='none'
        x=!x
      }
  
      }

    const showvideo=()=>{
        const doc= document.querySelector('.container')
        doc.style.display='none'

       const vid= document.querySelector('video')
       vid.style.display='block';
    }
    const enter=()=>{
            document.getElementById('button').style.display='block'
    }
    const exit=()=>{
        // document.getElementById('button').style.display='none'
}
    if(!movie ||!user){
        return (
            <Navigate to='/'></Navigate>
    
  )
 }

 else{
    return<div className='movie'><h1>{movie.Title}</h1>
    <div className="navbar">
    <button onClick={()=>{navigate('/verify')}}>HOME</button>
    <button onClick={logout}>LOG-OUT</button>
    <div className='user-holder'><div className='user'>{user.name?user.name:'cant find name'}<button onClick={showbutton}><FaArrowDown/></button></div></div>
    </div >
        <div className='container'><img className='img' src={movie.Poster}  onMouseEnter={enter} onMouseLeave={exit}></img><button onClick={showvideo}className='btn' id='button'><FaPlay/></button></div>
        <video  src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'  width="750" height="500" controls></video>
        <div><h1>cast:</h1>{movie.Actors}</div>
        <div><h1>Plot:</h1>{movie.Plot}</div>
        <div><h1>Language:</h1>{movie.Language}</div>

        
        
        

        
        
    </div>  }




}


export default Movie