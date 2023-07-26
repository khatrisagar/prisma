import { prisma } from "../../database";

// localhost:8888/posts?limit=5&page=1&sort={"title":"desc"}&search=asas@gmail.com
// { author: { email: { contains: query.search } } },
export const getPostsDb = async (query: any) => {
  try {
    const allowedFields = ["title", "content", { author: ["name", "email"] }];
    const whereCondition: any = [];
    allowedFields.forEach((field: any) => {
      if (typeof field === "string") {
        whereCondition.push({ [field]: { contains: query.search } });
      }
      if (typeof field === "object") {
        const [keys] = JSON.parse(JSON.stringify(Object.keys(field)));
        const subFieldValues = field[keys];
        subFieldValues.forEach((subField: any) => {
          whereCondition.push({
            [keys]: {
              [subField]: {
                contains: query.search,
              },
            },
          });
        });
      }
    });
    const orderByCondition = JSON.parse(query.sort);
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
    const skip = (page - 1) * limit;
    const apiQuery: any = {
      skip: skip,
      take: limit,
      where: { OR: whereCondition },
      orderBy: orderByCondition,
      //  count using aggregate
      // _count: {
      //   _all: true,
      // },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    };
    const [posts, count] = await Promise.all([
      prisma.post.findMany(apiQuery),
      prisma.post.count({ where: { OR: whereCondition } }),
    ]);
    // or
    // delete apiQuery["include"];
    // const count = await prisma.post.count(apiQuery);
    console.log("coutn", count);
    const pagination = {
      count,
      page,
      limit,
      skip,
      availablePosts: posts.length,
    };
    return { data: posts, pagination };
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
