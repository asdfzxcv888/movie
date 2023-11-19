import hello from "../models/user.js"





const login=async(req,res)=>{
    console.log(req.body.email)
    const{name,email,password}={...req.body}
   
    try {
        if( !email ||!password){
            let e='please provide '
            if(!email){e+='email '}
            
            if(!password){e+=email ?'password ':',password' }
            throw new Error(e)
        }
        const user=await hello.findOne({email})

    if(!user){
        throw new Error('invalid email id ')
    }
    if(user){
        if(password!==user.password){
            throw new Error('invalid password')
        }
    }
    res.json({user})
    } catch (error) {
       res.json({error:error.message})
    }
    

}




const createuser=async(req,res)=>{
    const{name,email,password}={...req.body}

    try {
        if(!name ||!email|| !password){
            throw new Error('please provide all values inorder to register ')
        }
        const user=await hello.create({...req.body})
        res.json({user})
        
    } catch (error) {
        res.json({error:error.message})
    }
  
}
const updateuser=async(req,res)=>{
    console.log('server user called')
    const{id,name,email,password}={...req.body}
    try {
        const user=await hello.findOne({_id:id})
        
    user.name=name
    user.email=email
    user.password=password
        
    await user.save()
    console.log(user)
    res.json({user})

}
     catch (error) {
        console.log(error)
    }
    
}

const deleteuser=async(req,res)=>{

    const{email}={...req.body}
    try {
        console.log(email)
        const user=await hello.deleteOne({email})

        
         
        console.log('delete')
        console.log(user)

        res.json({user})
    } catch (error) {
        
    }


}
const trial=async(req,res)=>{
    console.log('function called')
    res.json({msg:'its working'})
}

export {createuser,login,updateuser,deleteuser,trial}