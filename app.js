if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const mongoose = require('mongoose')
const seedDb = require('./seed')
const app = express()


//Routes
const noteRoutes = require('./routes/notes')
// 'mongodb://localhost:27017/notekeeper-backend'
mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('DB connected')
    })
    .catch((err)=>{
        console.log('DB not connected')
        console.log(err)
    })

app.use(express.json())
// use routes for notes
app.use(noteRoutes)
// seed db
// seedDb()

app.listen(process.env.PORT || 8080, ()=>{
    console.log('server running at port 8080')
})