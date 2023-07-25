import { Request, Response } from "express";
import {
  addUsersDb,
  deleteUserDb,
  getUsersDb,
  updateUserDb,
} from "../../services";
import { request } from "http";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersDb();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const addUsers = async (req: Request, res: Response) => {
  try {
    console.log("first", req.body);
    const user = await addUsersDb(req.body);
    res.json(user);
  } catch (error) {
    // res.status(500).json({ message: "Internal Server Error" });
    res.status(500).json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await updateUserDb(userId, req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
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
