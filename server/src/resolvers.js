const movieModel = require("../movieModel");

console.log();

const resolvers = {
  Query: {
    movies: () => movieModel.findAll(),
    movie: (_, { imdbID }) => {
      return movieModel.findById(imdbID);
    }
  },
  Mutation: {
    rating: (_, { imdbID, rating, comment }) => {
      return movieModel.addRating(imdbID, rating, comment);
    }
  }
};

module.exports = resolvers;
