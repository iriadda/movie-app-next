import {FC} from "react";
import MovieInfo from "@/components/movieInfo/MovieInfo";
import {Metadata} from "next";
import {MoviesService} from "@/services/MoviesService";

type Props = {
      params: Promise<{
          [key: string]: string
        }>;
}
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params
    const movie = await MoviesService.getMovieById(id);
    return {
        title: `${movie.title}`,
        description: `${movie.overview}`,
    }
};

const MoviesDetailsPage: FC<Props> = async ({params}) => {
    const {id} = await params

    return (
        <>
            <MovieInfo id={id}/>
        </>
    );
};
export default MoviesDetailsPage;