import express from 'express'
// import cors from 'cors'
import mongoose from 'mongoose'
import router from './src/routers/index.js'
import errorHandler from './src/middlewares/errorMiddlewares.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('db TODO-APP connected'))

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())

// ROUTERS
app.use('/api', router)


// ERROR HANDLER
app.use(errorHandler)

// SERVER
const port = process.env.PORT || 8000
app.listen( port, () => {
    console.log('app is running on port ', port)
})