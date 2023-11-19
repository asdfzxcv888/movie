import React from 'react'
import {FaSearch,FaArrowDown} from 'react-icons/fa'
import { Useglobalcontext } from '../globalcontext/Useglobalcontext'
import {useNavigate} from 'react-router-dom'
import '../assets/home.css'

let x=false

const Home = () => {
    const {movies,user,logout,setmovie,movie,search,deleteuser}=Useglobalcontext()
    const [searchterm,setsearchterm]=React.useState('')
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
    React.useEffect(()=>{
      
      console.log(movie)
      if(movie){}},[movie,user])
    const navigate=useNavigate() 
   
    const notfound="data:image/jpeg;base64,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"
  return (
  <div className='home'>
  <div className="navbar">
  <div><input className='search' type='text' onChange={(e)=>{setsearchterm(e.target.value)
    search(e.target.value)
   }}></input><button onClick={()=>search(searchterm)}><FaSearch/></button></div>
    <button onClick={()=>{navigate('/')}}>HOME</button>
    <button onClick={logout}>LOG-OUT</button>
    <div className='user-holder'><div className='user'>{user.name?user.name:'cant find name'}<button onClick={showbutton}><FaArrowDown/></button></div>
    
    <div className="temp"> <div><button onClick={()=>{navigate('/update')}}>update</button></div>
    <div><button  onClick={()=>{deleteuser(user.email)}}>delete</button></div></div>
   </div>
    
    

  </div>
  <div className='flex'>
   
    
    { movies && movies.map((item,index)=><div  key={index}>
    
    <h1>{item.Title}</h1>
    <div className='imgholder'><img  src={item.Poster?item.Poster:'data:image/png;base64,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'} /></div>
    
    <div className="details"><h1>rating:{item.imdbRating}</h1>
    <div><h1 className='director'>Director:{item.Director}</h1></div>
    <button onClick={()=>{setmovie(item)
    navigate('/movie')}}>watch now</button>
    </div>

  </div>)}</div>
  </div>
  
  )
}

export default Home