import express from "express";
import {
  deletedUser,
  getUser,
  getUserAll,
  updatedUser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res) => {
//   res.send("hello user, you are login");
// });

// router.get("/checkauth/:id", verifyUser, (req, res) => {
//   res.send("hello user, you can delete account");
// });

// router.get("/checkauth/:id", verifyAdmin, (req, res) => {
//   res.send("hello admin, you can delete account");
// });

// UPDATE
router.put("/:id", verifyUser, updatedUser);

// DELETE
router.delete("/:id", verifyUser, deletedUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUserAll);

export default router;
