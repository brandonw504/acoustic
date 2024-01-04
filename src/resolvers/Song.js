import Songs from "../services/Songs.js";

const resolvers = {
  Song: {
    posts: ({ id }) => Songs.getPosts({ songId: id }),
  },
  Query: {
    song: (_, { id }) => Songs.find({ id }),
    songs: (_, { ids }) => Songs.findMany({ ids }),
  },
  Mutation: {
    createSong: (_, { input }) => Songs.create({ input }),
    updateSong: (_, { id, input }) => Songs.update({ id, input }),
    deleteSong: (_, { id }) => Songs.delete({ id }),
  },
};

export default resolvers;
