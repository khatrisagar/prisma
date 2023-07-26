import { Request, Response } from "express";
import {
  addUsersDb,
  createProfileDb,
  deleteUserDb,
  getSingleUserDb,
  getUserWithPostDb,
  getUsersDb,
  updateUserDb,
} from "../../services";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersDb();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const users = await getSingleUserDb(userId);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const getUserWithPost = async (req: Request, res: Response) => {
  try {
    const users = await getUserWithPostDb();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addUsers = async (req: Request, res: Response) => {
  try {
    const { name, email, bio, contact } = req.body;
    const user = await addUsersDb({ name, email });
    const profile = await createProfileDb(user.id, {
      bio,
      contact,
    });
    console.log(profile);
    res.json({ ...user, profile: profile });
  } catch (error) {
    // res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
    res.status(500).json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await updateUserDb(userId, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await deleteUserDb(userId);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
