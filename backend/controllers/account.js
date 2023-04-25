import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const q =  "SELECT * FROM user_profile WHERE `userID` = ?";

  db.query(q,[req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);
   

    return res.status(200).json(data[0]);
  });
};

export const getOrg = (req, res) => {
  const q ="SELECT *  FROM organization  WHERE `OrganizationID` =  ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    

    return res.status(200).json(data[0]);
  });
};

export const updateUser = (req,res)=>{
    const q = "UPDATE user_profile SET `first_name` = ?, `last_name` = ?, `gender` = ?, `profession` = ?, `email_address` = ?, `description` = ?, `age` = ?, WHERE `userID` = ?";
    console.log("here")
    const id = req.params.id;
    console.log([req.body.first_name, req.body.last_name, req.body.gender, req.body.profession, req.body.email_address, req.body.description, req.body.age, id])
    db.query(q, [req.body.first_name, req.body.last_name, req.body.gender, req.body.profession, req.body.email_address, req.body.description, req.body.age, id], (err,result)=>{
      if (err) return res.json("Error");
      return res.json({updated: true})
    })
  };