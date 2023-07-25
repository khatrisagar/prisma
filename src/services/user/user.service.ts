import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const getUsersDb = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};

export const addUsersDb = async (userPayload: any) => {
  try {
    console.log(userPayload);
    const user = await prisma.user.create({ data: userPayload });
    return user;
  } catch (error) {
    throw error;
  }
};
export const updateUserDb = async (userId: number, userPayload: any) => {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: userPayload,
    });
    return user;
  } catch (error) {
    throw error;
  }
};
export const deleteUserDb = async (userId: number) => {
  try {
    const user = await prisma.user.delete({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
