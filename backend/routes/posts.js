import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  getOrgPost,
  getUserPost,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/organization/:id" , getOrgPost)
router.get("/user/:id" , getUserPost)
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;