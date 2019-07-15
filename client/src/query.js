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
  query movie($imdbID: String!) {
    movie(imdbID: $imdbID) {
      title
    }
  }
`;

export const addRating = gql`
  mutation rating($imdbID: String!, $rating: Int!, $comment: String!) {
    rating(imdbID: $imdbID, rating: $rating, comment: $comment) {
      ratings {
        rating
        comment
      }
    }
  }
`;
