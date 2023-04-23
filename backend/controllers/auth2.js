import {db} from "../db.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = (req,res)=>{
  const q = "SELECT * FROM organization WHERE email_address = ?"

  db.query(q,[req.body.email_address], (err,data)=>{
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("Organization already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const predefined_data_query = "SELECT * FROM organizations_predefined WHERE name LIKE ?"
  db.query(predefined_data_query,[req.body.org_name],(err,data2)=>{
        if(err) return res.json(err);


        const q = "INSERT INTO organization(`name`,`location`,`type`,`email_address`,`password`) VALUES (?) "
    const values = [
      req.body.org_name,
      data2[0].location,
      data2[0].type,
      req.body.email_address,
      hash,
    ]

    db.query(q, [values], (err,data)=>{
      if(err) return res.json(err);
      return res.status(200).json("User has been created.");
    });

    })

    
  });
};





export const login = (req,res)=>{

    const q = "SELECT * FROM organization WHERE email_address = ?"
  
    db.query(q, [req.body.email_address], (err,data)=>{
      if (err) return res.json(err);
      if(data.length === 0) return res.status(404).json("User not found!")
  
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
  
      if(!isPasswordCorrect) return res.status(400).json("Wrong email or password");
  
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
  
      res.cookie("access_token", token, {
          httpOnly: true,
        }).status(200).json(other);  })
  };
  
  export const logout = (req,res)=>{
    res.clearCookie("access_token",{
      sameSite: "none",
      secure: true
    }).status(200).json("User has been logged out.");
    
  };