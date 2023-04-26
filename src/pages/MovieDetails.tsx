import { useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from 'react'

import Movie from "../models/movie";

export default function MovieDetails() {
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState<Movie>();

    const fetchMovie = useCallback(async () => {
        try {
            const response = await fetch(`https://swapi.dev/api/films/${id}`);
            if (!response.ok) {
              throw new Error("Something went wrong.");
            }
      
            const data = await response.json();

            const movieDetail = new Movie(data.episode_id, data.title, data.release_date, data.opening_crawl);
            setMovie(movieDetail);
          } catch (error) {
            console.log(error);
          }
      }, []);
    
      useEffect(() => {
        fetchMovie();
      }, [fetchMovie]);

      console.log(movie);
      

    return (
        <>
            <h1>Movie Details</h1>
            <p>{params.id}</p>
        </>
    );
}