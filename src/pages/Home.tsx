import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Movie from "../models/movie";
import Title from "../models/title";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    try {
        const response = await fetch("https://swapi.dev/api/films/");
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
  
        const data = await response.json();
  
        const transformedTitles = data.results.map(
          (movieData: {
            episode_id: number;
            title: string;
          }) => {
            return new Title(
              movieData.episode_id,
              movieData.title,
            );
          }
        );
  
        setMovies(transformedTitles);
      } catch (error) {
        console.log(error);
      }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  console.log(movies);

  return (
    <>
      <ul>
        {movies.length > 0 &&
          movies.map((movie: Movie) => (
            <li key={movie.id}>
                {movie.title}
                <Link to={`/movies/${movie.id}`}></Link>
            </li>
          ))}
      </ul>

      {/* <h1>Click movies to see the list</h1>
            <p>
                Go to <Link to="/movies">the list of movies</Link>.
            </p> */}
    </>
  );
}
