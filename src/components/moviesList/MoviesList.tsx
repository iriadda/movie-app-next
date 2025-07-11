import {MoviesService} from "@/services/MoviesService";
import MoviesListCard from "@/components/moviesListCard/MoviesListCard";
import './MoviesList.css'
import Pagination from "@/components/pagination/Pagination";


interface Props {
    page: number,
    genreId?: number | undefined,
}

const MoviesList = async ({page, genreId}: Props) => {

    const {results, total_pages} = await MoviesService.getAllMovies(page, genreId)


    return (
        <>
            <ul className={'moviesList'}>{results.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}</ul>
            <Pagination currentPage={page} totalPages={Math.min(total_pages, 500)} genreId={genreId}/>
        </>
    );
};
export default MoviesList;