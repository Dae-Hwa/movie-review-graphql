const movieModel = require("../movieModel");

console.log();

const resolvers = {
  Query: {
    movies: () => movieModel.findAll(),
    movie: (_, { imdbID }) => {
      return movieModel.findById(imdbID);
    }
  }
};

module.exports = resolvers;
