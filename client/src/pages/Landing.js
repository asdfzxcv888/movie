import React from 'react'
import {Link } from 'react-router-dom'
import '../assets/landing.css'
const Landing = () => {
  const func=async()=>{
    const data=await fetch('/trial')
    const ss=await data.json()
    console.log(ss.msg)
  }

  const [ans,setans]=React.useState(false)
  return (
    <div><h1>welcome to this movie streaming platform to navigate accordingly press the required button </h1>
      <div className='img-contsiner'><img src= {require('../assets/qq.jpeg')}/></div>
      <div className='content'><p>Step into the world of limitless entertainment with This website – your gateway to a cinematic experience like no other! We're thrilled to have you on board as we redefine the way you enjoy movies and TV shows. Get ready to immerse yourself in a universe of captivating stories, all at your fingertips.</p>
      {ans && <p>Embark on an extraordinary cinematic journey where every genre, era, and niche finds its place. Explore a vast library of movies and TV shows, ranging from timeless classics to the latest blockbusters. Our carefully curated collections and personalized recommendations ensure that there's always something incredible waiting for you. For Content Creators: Bring your stories to life. We celebrate creativity and welcome filmmakers to share their masterpieces with a global audience. Our platform provides a unique opportunity for your content to shine and be discovered by enthusiasts who appreciate the art of storytelling.</p>}
      
      <button className='btn' onClick={()=>{setans(!ans)}}>{!ans?'..read more?':'read less...'}</button>
      </div>
      
      <div className="flex-land">
      <Link to='/login'><button  className='btn'>LOGIN</button></Link>
      
      </div>
     
     
    </div>
  )
}

export default Landing
