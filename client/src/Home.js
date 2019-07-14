import React from "react";
import { Query } from "react-apollo";
import * as query from "./query";

const Home = () => {
  return (
    <Query query={query.movies}>
      {({ loading, error, data }) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>error</span>;
        if (data) {
          const Movies = () => {
            return data.movies.map(movie => (
              <Movie key={movie.imdbID} movie={movie} />
            ));
          };
          const Movie = ({ movie }) => (
            <div
              style={{
                padding: 16,
                marginTop: 16,
                marginBottom: 16,
                border: "1px solid #eee",
                backgroundColor: "#f2f2f2"
              }}
            >
              <div
                style={{
                  display: "flex"
                }}
              >
                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  style={{ height: 210, marginRight: 16 }}
                />
                <div>
                  <h2 style={{ marginTop: 0 }}>
                    {movie.title} <small>({movie.year})</small>
                  </h2>
                  <p>
                    <strong>Director</strong>: {movie.director}
                  </p>
                  <p>
                    <strong>Actors</strong>: {movie.actors.join(", ")}
                  </p>
                  <p>
                    <strong>Plot</strong>: {movie.plot}
                  </p>
                  <p>
                    <strong>AverageRating</strong>:{" "}
                    {movie.averageRating && movie.averageRating.toFixed(1)}
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: 10,
                  marginTop: 10,
                  border: "1px solid #eee",
                  backgroundColor: "#fff"
                }}
              >
                <strong>Ratings</strong>:{" "}
                <ol style={{ maxHeight: 120, overflowY: "scroll" }}>
                  {movie.ratings.map((rating, i) => (
                    <li key={i}>
                      <strong>{rating.rating}</strong> - {rating.comment}
                    </li>
                  ))}
                </ol>
                <AddRating imdbID={movie.imdbID} />
              </div>
            </div>
          );
          function AddRating() {
            return (
              <div>
                <form>
                  <input type="number" defaultValue="5" min="1" max="5" />
                  <input />
                  <button type="submit">Add</button>
                </form>
              </div>
            );
          }
          return (
            <div>
              <Movies />
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Home;
