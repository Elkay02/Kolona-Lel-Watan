import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  getOrgPost,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/organization/:id" , getOrgPost)
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;