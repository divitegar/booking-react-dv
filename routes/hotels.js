import express from "express";
import {
  createHotel,
  deletedHotel,
  getHotel,
  updatedHotel,
  getHotelAll,
  countByCity,
} from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updatedHotel);

// DELETE
router.delete("/:id", verifyAdmin, deletedHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotelAll);

// Count by city
router.get("/countByCity", countByCity);

export default router;
