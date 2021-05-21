import express from 'express'
import { json, urlencoded } from 'body-parser'
import { config } from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import rootRouter from './routes/index'

config()

const app = express()

app.use(cors())

if (process.env.NODE_ENV === 'prod') {
    app.use(morgan('tiny'))
}

app.use(json())
app.use(urlencoded({ extended: true }))

app.use(rootRouter)

export default app