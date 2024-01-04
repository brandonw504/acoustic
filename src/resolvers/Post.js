import Posts from "../services/Posts.js";
import Users from "../services/Users.js";
import Songs from "../services/Songs.js";

const resolvers = {
  Post: {
    user: ({ userId }) => Users.find({ id: userId }),
    song: ({ songId }) => Songs.find({ id: songId }),
  },
  Query: {
    post: (_, { userId, songId }) => Posts.find({ userId, songId }),
  },
  Mutation: {
    createPost: (_, { input }) => Posts.create({ input }),
    updatePost: (_, { userId, songId, input }) =>
      Posts.update({ userId, songId, input }),
    deletePost: (_, { userId, songId }) => Posts.delete({ userId, songId }),
  },
};

export default resolvers;
