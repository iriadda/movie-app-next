import MoviesList from "@/components/moviesList/MoviesList";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}
const MoviesPage = async ({searchParams}:Props ) => {
    const {page, with_genres}= await searchParams
    const genre=with_genres? Number(with_genres):undefined
    const SPpage = Number(page|| 1);
    return (
        <>
            <MoviesList page={SPpage} genreId={genre}/>
        </>
    );
};
export default MoviesPage;