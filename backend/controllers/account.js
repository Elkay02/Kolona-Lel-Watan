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


  export const updateUser = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const userId = req.params.id;
      console.log("here");
      const q = "UPDATE user_profile SET `first_name` = ?, `last_name` = ?, `age`= ?, `gender` = ?, `profession` = ?, `email_address` = ?, `description` = ?, `location` = ?,`profile_picture` = ? WHERE `userID` = ?";
      const values = [
        
        req.body.first_name ,
        req.body.last_name,
        req.body.age,
        req.body.gender,
        req.body.profession,
        req.body.email_address,
        req.body.description,
        req.body.location2,
        req.body.img,
        userId ,
      ];
      
      console.log(values);
      db.query(q, [...values], (err, data) => {
        console.log(q);
        if (err) return res.status(500).json(err);
        return res.json("User info has been updated.");
      });
    });
  };



  export const updateOrg = (req, res) => {
    
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const orgId = req.params.id;
      console.log("here");
      const q = "UPDATE organization SET `name` = ?, `type` = ?, `email_address`= ?, `location` = ?, `mission`=?, `profile_picture` = ? WHERE `OrganizationID` = ?";
      const values = [
        
        req.body.name,
        req.body.type,
        req.body.email_address,
        req.body.location2,
        req.body.mission,
        req.body.img,
        orgId ,
      ];
      
      console.log(values);
      db.query(q, [...values], (err, data) => {
        console.log(q);
        if (err) return res.status(500).json(err);
        return res.json("User info has been updated.");
      });
    });
  };