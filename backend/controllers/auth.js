import {db} from "../db.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const register = (req,res)=>{
  const q = "SELECT * FROM user_profile WHERE email = ?"

  db.query(q,[req.body.email], (err,data)=>{
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO user_profile(`firstname`,`lastname`,`email`,`password`) VALUES (?)"
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      hash,
    ]

    db.query(q, [values], (err,data)=>{
      if(err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req,res)=>{

  const q = "SELECT * FROM user_profile WHERE email = ?"

  db.query(q, [req.body.email], (err,data)=>{
    if (err) return res.json(err);
    if(data.length === 0) return res.status(404).json("User not found!")

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if(!isPasswordCorrect) return res.status(400).json("Wrong email or password");

    const token = jwt.sign({id:data[0].id})
  })
};

export const logout = (req,res)=>{
  res.json("from controller")
};
