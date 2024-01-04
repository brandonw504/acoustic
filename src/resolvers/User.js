import Users from "../services/Users.js";

const resolvers = {
  User: {
    // Get all posts of a user by user ID
    // We are passing in the id property of the User object
    // We could also pass it in under args with (_ { id })
    posts: ({ id }) => Users.getPosts({ userId: id }),
  },
  Query: {
    user: (_, { id }) => Users.find({ id }),
    users: (_, { ids }) => Users.findMany({ ids }),
  },
  Mutation: {
    createUser: (_, { input }) => Users.create({ input }),
    updateUser: (_, { id, input }) => Users.update({ id, input }),
    deleteUser: (_, { id }) => Users.delete({ id }),
  },
};

export default resolvers;
