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
      <div className='content'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos id saepe corrupti voluptatum cumque excepturi quasi voluptatibus ipsa magnam praesentium aut impedit quia incidunt adipisci animi, laborum quod natus molestias debitis quibusdam illo. Atque natus quaerat obcaecati, quos odit vitae deleniti a cum quam est nulla sequi non minus facere.</p>
      {ans && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias excepturi. Magnam ut exercitationem optio libero at labore sunt porro, illum quae odio quisquam culpa asperiores aut dolore incidunt ab, repudiandae et iste voluptatem soluta! Distinctio officiis explicabo officia consectetur maxime voluptatum facilis provident! Eius perspiciatis cupiditate sint deleniti recusandae odio libero laboriosam necessitatibus eos velit quod obcaecati, eveniet asperiores repudiandae beatae voluptatibus soluta pariatur dolore mollitia, quam alias dolores, sed quisquam. Perspiciatis illo perferendis optio earum delectus reiciendis numquam voluptatum iure, vitae, blanditiis pariatur labore suscipit, sit quas? Similique eveniet illum officia quae, sequi voluptatibus magnam, consequatur quas harum voluptate dignissimos! Nemo numquam quis fuga expedita exercitationem modi, inventore minus dignissimos aliquam optio enim voluptate. Error perferendis, enim praesentium ullam voluptatum harum recusandae velit dolor, illo, fugit quis? Illum facere reiciendis animi enim ipsa aliquid tempora consequuntur! Reprehenderit perferendis voluptatibus rem ipsam a fugit eveniet perspiciatis maxime sit voluptates.</p>}
      
      <button className='btn' onClick={()=>{setans(!ans)}}>{!ans?'..read more?':'read less...'}</button>
      </div>
      
      <div className="flex-land">
      <Link to='/login'><button  className='btn'>LOGIN</button></Link>
      
      </div>
     
     
    </div>
  )
}

export default Landing