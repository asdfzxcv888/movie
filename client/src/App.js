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
        <p>Thank you for choosing this as your go-to destination for cinematic bliss. Get ready to escape reality and dive into a world of cinematic wonders!</p>
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
