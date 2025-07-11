import React, {FC} from "react";
import {MoviesService} from "@/services/MoviesService";
import StarsRating from "@/components/StarsRating/StarsRating";
import Link from "next/link";
import GenreBadge from "@/components/genreBadge/GenreBadge";
import './MovieInfo.css'
import MoviesTrailer from "@/components/moviesTrailer/MoviesTrailer";

type Props = {
    id: string;
}
const MovieInfo: FC<Props> = async ({id}) => {

    const movie = await MoviesService.getMovieById(id)

    const backdrop = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;


    return (
        <div className={'wrapper'}>


            <div style={{backgroundImage: `url(${backdrop})`}} className={'blur'}>

                <h1>{movie.title} </h1>
                <p>{movie.status} • {movie.release_date} • {movie.runtime} min</p>
                <ul className={'movie-genres'}>
                    {movie.genres.map((genre) => (
                        <Link key={genre.id} href={`/movies?page=1&with_genres=${genre.id}`}>
                            <GenreBadge name={genre.name}/>
                        </Link>))}
                </ul>
                <StarsRating rating={movie.vote_average}/>


                <p className={'movie-overview'}>{movie.overview}</p>

                <div className={'buttons'}>
                    {movie.homepage && (<a href={movie.homepage} target={"_blank"} className="official-site-button">
                            Visit Official Site</a>
                    )}


                    <MoviesTrailer id={movie.id.toString()}/>
                </div>

            </div>
        </div>
    );
};
export default MovieInfo;