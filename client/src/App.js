import logo from './logo.svg';

import Landing from './pages/Landing';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'
import Verify from './pages/Verify';
import Movie from './pages/movie';
import Update from './pages/Update';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt inventore odit facere hic voluptate consequatur ut delectus voluptas, dolore nesciunt nisi omnis error ad quisquam dolorum id assumenda minima, quo, cumque harum sapiente magni. Repellat fugit dolores, reiciendis corrupti odit repudiandae perferendis similique ab minus atque incidunt neque tempore iste vitae explicabo quia modi suscipit nemo ullam totam eos aperiam officia. Ipsum, molestias architecto. Architecto cum rem, temporibus laborum iure sapiente sed quidem. Sint eum nulla repudiandae suscipit est quidem asperiores, officiis quo reprehenderit, optio sunt, rerum ab incidunt vitae! Temporibus, quo. Quibusdam similique nemo delectus fugiat obcaecati consequuntur.</p>
         <div> <Outlet /></div></div>}>
        
        <Route path='verify'  element={<Verify/>}></Route>

        <Route path='/'  element={<Landing/>}></Route>
        </Route>
        <Route path='/login'  element={<Login/>}></Route>
        
        <Route path='/movie'  element={<Movie/>}></Route>
        <Route path='/update'  element={<Update/>}></Route>

        

         </Routes>   </BrowserRouter>

  );
}

export default App;
