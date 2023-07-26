import { Request, Response } from "express";
import { createProfileDb, getProfileDb, updateProfileDb } from "../../services";

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const profile = await getProfileDb(userId);
    res.json(profile);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const profile = await updateProfileDb(userId, req.body);
    res.json(profile);
  } catch (error) {
    res.status(500).json(error);
  }
};
