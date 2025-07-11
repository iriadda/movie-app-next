import {IMovieShortModel} from "@/models/IMovieModel";
import Link from "next/link";
import PosterPreview from "@/components/posterPreview/PosterPreview";
import './MoviesListCard.css'

interface MoviesListCardProps {
    movie: IMovieShortModel
}

const MoviesListCard = ({movie}: MoviesListCardProps) => {
    return (
        <>
            <li className={'item'}>
                <Link href={'/movies/' + movie.id}>
                    <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                    <p className={'movie-title'}>{movie.title}</p>
                    <p>{movie.release_date}</p>
                </Link>
            </li>
        </>
    );
};
export default MoviesListCard;