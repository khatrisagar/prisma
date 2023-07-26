import { Request, Response } from "express";
import {
  createPostsDb,
  deletePostDb,
  getPostsDb,
  updatePostDb,
} from "../../services";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const posts = await getPostsDb(query);
    res.json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createPosts = async (req: Request, res: Response) => {
  try {
    const post = await createPostsDb({ ...req.body });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.postId);
    const post = await updatePostDb(postId, { ...req.body });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = parseInt(req.params.postId);
    const post = await deletePostDb(postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
