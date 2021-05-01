const express =require('express');
const app=express();
const env=require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const cors=require('cors')
const userRouter=require('./routes/users')
const imagesRouter=require('./routes/images')
const path=require('path')

mongoose.connect(process.env.DB_CONN,{ useNewUrlParser: true,
    useUnifiedTopology: true  }).then(()=>{
    console.log('db connected')
}).catch(err=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    return res.status(200).json({'msg':'hello from node'})
 })

app.use(express.static('uploads'))
app.use(cors())
app.use(bodyParser.json())
app.use('/api/users',userRouter)
app.use('/images',imagesRouter)



app.listen(process.env.PORT,()=>{
    console.log(`server listening on ${process.env.PORT}`)
})


