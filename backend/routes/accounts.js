import express from "express";
import {
    getUser,
    getOrg,
    updateUser,
    updateOrg
} from "../controllers/account.js"

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/organization/:id", getOrg);
router.put("/update_user/:id", updateUser)
router.put("/update_organization/:id", updateOrg)


export default router;