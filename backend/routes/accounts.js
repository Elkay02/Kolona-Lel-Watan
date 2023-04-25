import express from "express";
import {
    getUser,
    getOrg,
    updateUser
} from "../controllers/account.js"

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/organization/:id", getOrg);
router.put("/update_user/:id", updateUser)

export default router;