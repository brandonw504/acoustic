import gql from "graphql-tag";

const typeDefs = gql`
  type Post {
    user: User!
    userId: String!
    song: Song!
    songId: String!
    favorite: Boolean!
    caption: String
  }

  input PostInput {
    userId: String!
    songId: String!
    favorite: Boolean!
    caption: String
  }

  type Query {
    post(userId: ID!, songId: ID!): Post
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(userId: ID!, songId: ID!, input: PostInput!): Post
    deletePost(userId: ID!, songId: ID!): Boolean
  }
`;
export default typeDefs;
