import { Router } from "express";
import {
  addUsers,
  deleteUser,
  getSingleUser,
  getUserWithPost,
  getUsers,
  updateUser,
} from "../../controllers";

const router = Router();

router.get("/", getUsers);
router.get("/posts", getUserWithPost);
router.get("/:userId", getSingleUser);
router.post("/", addUsers);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export { router as userRoutes };
