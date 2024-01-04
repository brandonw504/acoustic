import prisma from "../prisma/client.js";

export default class Songs {
  // CREATE
  static async create({ input }) {
    const { id, shares, favorites } = input;
    return prisma.song.create({
      data: {
        id,
        shares,
        favorites,
      },
    });
  }

  // READ
  static async find({ id }) {
    return prisma.song.findUnique({
      where: {
        id,
      },
    });
  }

  static async findMany({ ids }) {
    return prisma.song.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  // UDPATE
  static async update({ id, input }) {
    try {
      const song = await prisma.song.update({
        where: {
          id,
        },
        data: input,
      });
      return song;
    } catch (e) {
      return null;
    }
  }

  // DELETE
  static async delete({ id }) {
    try {
      await prisma.song.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  // OTHER
  static async getPosts({ songId }) {
    return prisma.post.findMany({
      where: {
        songId,
      },
    });
  }
}
