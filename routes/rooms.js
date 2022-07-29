import express from "express";
import {
  createRoom,
  deletedRoom,
  getRoom,
  getRoomAll,
  updatedRoom,
} from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updatedRoom);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deletedRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRoomAll);

export default router;
