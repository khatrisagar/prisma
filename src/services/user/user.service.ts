import { prisma } from "../../database";

export const getUsersDb = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};

export const getSingleUserDb = async (userId: number) => {
  try {
    const users = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
      include: { profile: true, post: true },
    });
    return users;
  } catch (error) {
    throw error;
  }
};

export const getUserWithPostDb = async () => {
  try {
    const users = await prisma.user.findMany({ include: { post: true } });
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
    const [profile, post, user] = await prisma.$transaction([
      prisma.profile.delete({
        where: { userId: userId },
      }),
      prisma.post.deleteMany({
        where: { authorId: userId },
      }),
      prisma.user.delete({
        where: { id: userId },
      }),
    ]);

    return { user, profile, post };
  } catch (error) {
    throw error;
  }
};
