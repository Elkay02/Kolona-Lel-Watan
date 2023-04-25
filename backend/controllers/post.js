import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q =  "SELECT *,  DATE_FORMAT(event_date, '%Y-%m-%d') AS event_date,e.location AS location FROM event_posts e, organization o WHERE e.organizationID = o.OrganizationID ";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q ="SELECT * , DATE_FORMAT(e.event_date, '%Y-%m-%d') AS event_date  FROM event_posts e, organization o WHERE o.OrganizationID = e.organizationID  AND e.postID = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};


export const getOrgPost = (req, res) => {
  const q ="SELECT * , DATE_FORMAT(event_date, '%Y-%m-%d') AS event_date  FROM event_posts  WHERE organizationID = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO event_posts (`title`,`post_text`,`media`,`category`,`event_date`,`data_time`,`location`,`nbrParticipants`,`goalNbrParticipants`,`organizationID`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.eventdate,
      req.body.date,
      req.body.location,
      0,
      req.body.numParticipants,
      req.body.userid
    ];

    db.query(q, [values], (err, data) => {
      console.log(q)
        if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM event_posts WHERE `postID` = ?";

    db.query(q, [postId], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    console.log(postId);
    const q =
      "UPDATE event_posts SET `title`=?,`post_text`=?,`category`=?, `event_date`=? ,`location` = ? , `goalNbrParticipants` = ?, `media`=?  WHERE `postID` = ? ";

    const values = [
      req.body.title,
      req.body.desc, 
      req.body.cat,
      req.body.eventdate,
      req.body.location,
      req.body.numParticipants,
      req.body.img,
      postId
    ];

    db.query(q, [...values], (err, data) => {
      console.log(q)
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};