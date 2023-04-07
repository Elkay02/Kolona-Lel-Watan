import  express  from "express";
import  connection  from "./db.js";

const  app = express();

app.use(express.json());

app.listen(3306, () => {
    console.log("Server is running on port 8080");
    } );

app.get("/test", (req, res) => {
    res.send("Hello World");
    }
    );

// print table query
const  printTableQuery = `Select * from user_profile`;

// get all users
app.get("/users", (req, res) => {
    connection.query(printTableQuery, (err, result) => {
        if (err) {
            console.log(err);
            } else {
            res.send(result);
            }
        }
        );
    }
    );