import { prisma } from "../../database";

export const getPostsDb = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    return posts;
  } catch (error) {
    throw error;
  }
};
export const createPostsDb = async (postPayload: any) => {
  try {
    const posts = await prisma.post.create({ data: postPayload });
    return posts;
  } catch (error) {
    throw error;
  }
};

export const updatePostDb = async (postId: number, postPayload: any) => {
  try {
    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: postPayload,
    });
    return post;
  } catch (error) {
    throw error;
  }
};

export const deletePostDb = async (postId: number) => {
  try {
    const post = await prisma.post.delete({ where: { id: postId } });
    return post;
  } catch (error) {
    throw error;
  }
};
