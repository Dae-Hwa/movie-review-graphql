import React from "react";
import { Query, Mutation } from "react-apollo";
import * as query from "./query";
const Movie = ({ movie }, { key }) => (
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

function AddRating({ imdbID }) {
  const [ratingValueStr, setRatingValue] = React.useState("5");
  const [commentValue, setCommentValue] = React.useState("");
  return (
    <Mutation mutation={query.addRating}>
      {(rating, { data }) => {
        return (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                const ratingValue = parseInt(ratingValueStr, 10);
                rating({
                  variables: {
                    imdbID: imdbID,
                    rating: ratingValue,
                    comment: commentValue
                  }
                });
                setRatingValue(5);
                setCommentValue("");
              }}
            >
              <input
                type="number"
                min="1"
                max="5"
                value={ratingValueStr}
                onChange={e => {
                  return setRatingValue(e.target.value);
                }}
              />
              <input
                value={commentValue}
                onChange={e => {
                  return setCommentValue(e.target.value);
                }}
              />
              <button type="submit">Add</button>
            </form>
          </div>
        );
      }}
    </Mutation>
  );
}

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
