import { prisma } from "../../database";

export const getProfileDb = async (userId: number) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: { id: userId },
      include: {
        user: true,
      },
    });
    return profile;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const createProfileDb = async (
  userId: number,
  userProfilePayload: any
) => {
  try {
    const profile = await prisma.profile.create({
      data: { ...userProfilePayload, userId },
    });
    return profile;
  } catch (error) {
    throw error;
  }
};
export const updateProfileDb = async (
  userId: number,
  userProfilePayload: any
) => {
  try {
    const profile = await prisma.profile.update({
      where: { id: userId },
      data: { ...userProfilePayload },
    });
    return profile;
  } catch (error) {
    throw error;
  }
};
