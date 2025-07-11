import {MoviesService} from "@/services/MoviesService";
import {IMovieModel} from "@/models/IMovieModel";
import Pagination from "@/components/pagination/Pagination";
import MoviesListCard from "@/components/moviesListCard/MoviesListCard";
import './Search.css'
import '../moviesList/MoviesList.css'

interface Props {
    query?: string | undefined,
    page?: string | undefined
}

const Search = async ({query, page}: Props) => {
    const defaultPage = Number(page ?? 1)

    const {results, total_pages} = await MoviesService.searchMovie(defaultPage, query)
    const searchResults = await Promise.allSettled(
        results.map((item) => MoviesService.getMovieById(item.id.toString()))
    )
    const successfulMovies = searchResults
        .filter((r): r is PromiseFulfilledResult<IMovieModel> => r.status === "fulfilled")
        .map((r) => r.value)
        .filter((movie) => "id" in movie);


    return (
        <div>
            <h2 className={'search-title'}>Search results for {query}</h2>
            {!successfulMovies.length && <p className={'search-p'}>No results</p>}

            <ul className={'moviesList'}>{successfulMovies.map((movie) => <MoviesListCard movie={movie}
                                                                                          key={movie.id}/>)}</ul>
            {!!successfulMovies.length &&
                <Pagination currentPage={defaultPage} totalPages={Math.min(total_pages, 500)} sQuery={query}/>}

        </div>
    );
};
export default Search;