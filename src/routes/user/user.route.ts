import { Router } from "express";
import { addUsers, deleteUser, getUsers, updateUser } from "../../controllers";

const router = Router();

router.get("/", getUsers);
router.post("/", addUsers);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export { router as userRoutes };
