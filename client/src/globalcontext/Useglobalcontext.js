import {createContext,useContext,useReducer} from 'react'
import  movie from  '../pages/movies'
import axios from 'axios'

import reducer from './reducer'
const moviex= {
  "Title": "They Shall Not Grow Old",
  "Year": 2018,
  "Rated": "R",
  "Released": "01 Feb 2019",
  "Runtime": "99 min",
  "Genre": "Documentary, History, War",
  "Director": "Peter Jackson",
  "Writer": "Peter Jackson",
  "Actors": "Mark Kermode, Peter Jackson",
  "Plot": "A documentary about World War I with never-before-seen footage to commemorate the centennial of the end of the war.",
  "Language": "English",
  "Country": "UK, New Zealand",
  "Awards": "Nominated for 1 BAFTA Film Award. Another 4 wins & 10 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.3/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "100%"
    },
    {
      "Source": "Metacritic",
      "Value": "91/100"
    }
  ],
  "Metascore": 91,
  "imdbRating": 8.3,
  "imdbVotes": "21,722",
  "imdbID": "tt7905466",
  "Type": "movie",
  "DVD": "N/A",
  "BoxOffice": "N/A",
  "Production": "Warner Bros. Pictures",
  "Response": "True"
}

const AppContext=createContext()

const Appprovider=({children})=>{

    const data={
       isuser:false,
        user:'',
        email:"",
      
        movies:movie,
        msg:'',
        movie:moviex,
        update:true
    }

   const [state, dispatch] = useReducer(reducer, data)

   const register=async({email,name,password})=>{
   
    const data=await axios.post('/createuser',{email,name,password})
    const ans=data.data
   
    if(ans.user){
        
      dispatch({type:'login success',payload:{user:ans.user,msg:'register successful'}})
    }else{
      dispatch({type:'loginfail',payload:{error:ans.error}})
    }
    setTimeout(()=>{dispatch({type:'clearmsg'})},1000)

   }

   const update=async({id,email,name,password})=>{
    
    
    const data=await axios.post('/update',{id,email,name,password})
    const ans=data.data
    
    
    
    
    if(ans.user){
        
      dispatch({type:'login success',payload:{user:ans.user,msg:'update successful'}})
    }else{
      dispatch({type:'loginfail',payload:{error:ans.error}})
    }
    setTimeout(()=>{dispatch({type:'clearmsg'})},1000)

   }


    const login=async({email,password})=>{
      const data=await axios.post('/login',{email,password})
       const ans=data.data
       
       if(ans.user){
        
         dispatch({type:'login success',payload:{user:ans.user}})

       }else{
         dispatch({type:'loginfail',payload:{error:ans.error}})
       }
       setTimeout(()=>{dispatch({type:'clearmsg'})},1000)

       }

       const logout=()=>{
         dispatch({type:'logout'})
       }



    const isusertrigger=async()=>{
      dispatch({type:'isuser'})

    }

    const setmovie=async(name)=>{
       dispatch({type:'movie',payload:{movie:name}})
      
    }

    const search=async(arg)=>{
      
      const regex=new RegExp(arg,'i')
      if(arg===''){dispatch({type:'search',payload:{value:movie}})}
     
      let newmovies= movie
      newmovies=newmovies.filter((item)=>regex.test(item.Title))
      
      if(newmovies.length===0){dispatch({type:'search',payload:{value:[]}})}
      else{dispatch({type:'search',payload:{value:newmovies}})}

    }

    const deleteuser=async(email)=>{
      
      const data=await axios.post('/delete',{email})
      const ans=data.data
       
       if(ans.user){
        
        dispatch({type:'login success',payload:{user:'',msg:''}})
      }else{
        dispatch({type:'loginfail',payload:{error:ans.error}})
      }

    }
    return (
        <AppContext.Provider
          value={{
           ...state,login,isusertrigger,logout,register,setmovie,search,update,deleteuser
          }}
        >
          {children}
        </AppContext.Provider>
      );
}

const Useglobalcontext=()=>{
    return useContext(AppContext)
}

export {Useglobalcontext,Appprovider}