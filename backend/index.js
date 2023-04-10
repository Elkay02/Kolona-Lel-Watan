import express from "express"
import authRoutes from  "./routes/auth.js"
//import userRoutes from  "./routes/users.js"

const app = express()

app.use(express.json())
app.use("/backend/auth", authRoutes)
//app.use("/backend/users", userRoutes)

app.listen(8800, ()=>{
  console.log("Connected!")
})