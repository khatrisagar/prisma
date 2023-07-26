import { Router } from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
} from "../../controllers";

const router = Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:postId", updatePost);
router.delete("/:postId", deletePost);

export { router as postRoutes };
