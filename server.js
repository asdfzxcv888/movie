import express from 'express'
import router from './routes/routes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
dotenv.config();
const app=express()
//app.use(express.static(path.resolve(__dirname, './client/build')));

const __dirname = dirname(fileURLToPath(import.meta.url));

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json())


app.use(router)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });


const start=async()=>{
    try {

       await mongoose.connect(process.env.url)
        app.listen(5000,()=>console.log('server is on'))

        
    } catch (error) {
        console.log(error)
    }
}

start()