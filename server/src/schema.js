const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    imdbID: String
    title: String
    year: Int
    poster: Int
    released: String
    director: String
    actors: [String]
    plot: String
    ratings: [Rating]
    averageRating: Float
  }

  type Rating {
    rating: Int
    comment: String
  }

  type Query {
    movies: [Movie]
    movie(imdbID: String!): Movie
  }

  type Mutation {
    rating(imdbID: String!, rating: Int!, comment: String!): Movie
  }
`;

module.exports = typeDefs;
