import gql from "graphql-tag";

const typeDefs = gql`
  type Song {
    id: ID!
    shares: Int!
    favorites: Int!
    posts: [Post]
  }

  input SongInput {
    id: ID!
    shares: Int
    favorites: Int
  }

  type Query {
    song(id: ID!): Song
    songs(ids: [ID]!): [Song]
  }

  type Mutation {
    createSong(input: SongInput!): Song
    updateSong(id: ID!, input: SongInput!): Song
    deleteSong(id: ID!): Boolean
  }
`;
export default typeDefs;
