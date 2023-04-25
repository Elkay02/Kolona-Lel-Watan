import express from "express"
import authRoutes from  "./routes/auth.js"
import auth2Routes from "./routes/auth2.js"
import postRoutes from "./routes/posts.js"
import bookingRoutes from "./routes/bookings.js"
import accountRoutes from "./routes/accounts.js"
//import userRoutes from  "./routes/users.js"
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";





const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/backend/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});




app.use("/backend/auth", authRoutes)
app.use("/backend/auth2",auth2Routes)
app.use("/backend/posts", postRoutes);
app.use("/backend/bookings", bookingRoutes);
app.use("/backend/accounts",accountRoutes);

//app.use("/backend/users", userRoutes)

app.listen(8800, ()=>{
  console.log("Connected!")
})