import { Router } from "express";
import { getProfile, updateProfile } from "../../controllers";

const router = Router();

router.get("/:userId", getProfile);
router.patch("/:postId", updateProfile);

export { router as profileRoutes };
