import express from "express";
import {
  createHotel,
  deletedHotel,
  getHotel,
  updatedHotel,
  getHotelAll,
  countByCity,
  countByType,
  getHotelRooms,
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
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotelAll);

// Count by city
router.get("/countByCity", countByCity);

// count by type
router.get("/countByType", countByType);

// get room by id hotel
router.get("/room/:id", getHotelRooms);
export default router;
