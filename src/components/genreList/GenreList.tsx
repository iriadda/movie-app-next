import {MoviesService} from "@/services/MoviesService";
import GenreBadge from "@/components/genreBadge/GenreBadge";
import Link from "next/link";
import './GenresList.css'

type Props = {
    selectedGenreId?: number
}

const GenreList = async ({selectedGenreId}: Props) => {

    const {genres} = await MoviesService.getGenres()

    return (
        <div className={"genresList"}>
            <Link href="/movies?page=1">
                <GenreBadge isActive={!selectedGenreId} name="All"/>
            </Link>
            {genres.map((genre) => (
                <Link key={genre.id} href={`/movies?page=1&with_genres=${genre.id}`}>
                    <GenreBadge isActive={selectedGenreId === genre.id} name={genre.name}/>
                </Link>))}
        </div>
    );
};
export default GenreList;