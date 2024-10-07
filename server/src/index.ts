// # pwd : h81F1z0h7aZZtGYb

import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial_records'
import cors from 'cors'


const app:Express = express();
const port = process.env.PORT || 3004

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const mongoURI: string = "mongodb+srv://vibinrajkk:h81F1z0h7aZZtGYb@cluster0.jkzs1.mongodb.net/"

mongoose.connect(mongoURI)
    .then(() => console.log("Database Connected"))
    .catch(() => console.error("Failed to Cennect Database"))


app.use('/financial-record', financialRecordRouter)


app.listen(port, () => {
    console.log(`server running on port :${port}`)
})

