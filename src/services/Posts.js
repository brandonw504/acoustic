import prisma from "../prisma/client.js";

export default class Posts {
  // CREATE
  static async create({ input }) {
    const { userId, songId, favorite, caption } = input;
    return prisma.post.create({
      data: {
        userId,
        songId,
        favorite,
        caption,
      },
    });
  }

  // READ
  static async find({ userId, songId }) {
    return prisma.post.findUnique({
      where: {
        id: {
          userId,
          songId,
        },
      },
    });
  }

  // UDPATE
  static async update({ userId, songId, input }) {
    try {
      const post = await prisma.post.update({
        where: {
          id: {
            userId,
            songId,
          },
        },
        data: input,
      });
      return post;
    } catch (e) {
      return null;
    }
  }

  // DELETE
  static async delete({ userId, songId }) {
    try {
      await prisma.post.delete({
        where: {
          id: {
            userId,
            songId,
          },
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}
