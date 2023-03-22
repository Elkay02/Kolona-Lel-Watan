import  express  from "express";

const  app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("Server is running on port 8080");
    } );

app.get("/test", (req, res) => {
    res.send("Hello World");
    }
    );