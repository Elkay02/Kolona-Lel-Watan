import { db } from "../db.js";
import jwt from "jsonwebtoken";



export const getBookings = (req,res)=>{
    const q = "SELECT * FROM participates WHERE postID = ?";
    db.query(q, [req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(data.map(booking=>booking.userID))
      return res.status(200).json(data.map(booking=>booking.userID));
    });
}

export const bookEvent = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    
    const q1 = "UPDATE event_posts SET `nbrParticipants` = nbrParticipants + 1 WHERE `postID` = ? AND nbrParticipants+1 <= goalNbrParticipants;"
    db.query(q1,[req.body.postId],(err, data)=>{
      if(err) return res.status(500).json(err);

          const q2 = "INSERT INTO participates (`userID`,`postID`) VALUES (?)";
          const values = [
            req.body.userId,
            req.body.postId
          ];

          db.query(q2, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User booked event.");
          });
        });
    })
    
};

export const unbookEvent = (req, res) => {

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q1 = "UPDATE event_posts SET `nbrParticipants` = nbrParticipants - 1 WHERE `postID` = ? AND nbrParticipants-1 >= 0;"
    db.query(q1,[req.query.postId],(err,data)=>{
      
      const q = "DELETE FROM participates WHERE `userID` = ? AND `postID` = ?";
          console.log("user Id  "+ req.query.userId);
          console.log("post Id "+ req.query.postId);
          db.query(q, [req.query.userId, req.query.postId], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User unbooked event.");
          });
        });
    });
};



// const bookEvent = (req, res) => {
//     const token = req.cookies.access_token;
//   if (!token) return res.status(401).json("Not authenticated!");

//   jwt.verify(token, "jwtkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//         const postId = req.params.id;

//         const q = "INSERT INTO participates VALUES (?)";

//         const values = [
//             req.body.userId,
//             postId
//         ];
//         db.query(q, [values], (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.json("Booking has been created.");
//         });
//     });
//     };

// export { bookEvent };

// const unbookEvent = (req, res) => {

//     const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

//     db.query(q, [userInfo.id, req.query.postId], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("Post has been disliked.");
//     });
//   });
// }



// export { unbookEvent };





// const getBookings = (req, res) => {

//     const postId = req.params.id;

//     const q = "SELECT * FROM participates WHERE postID = ? AND userID = ?";

//     const values =[
//         postId,
//         req.body.userId
//     ]

//     db.query(q, [...values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json(data[0]);
//     });
    
// }

// export { getBookings };