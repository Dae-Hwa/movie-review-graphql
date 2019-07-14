import { gql } from "apollo-boost";

export const movies = gql`
  {
    movies {
      imdbID
      title
      year
      poster
      released
      director
      actors
      plot
      ratings {
        rating
        comment
      }
      averageRating
    }
  }
`;

export const movie = gql`
  {
    movie(imdbID: "tt0371746") {
      title
    }
  }
`;
