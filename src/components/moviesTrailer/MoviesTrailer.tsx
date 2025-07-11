import {MoviesService} from "@/services/MoviesService";
import React, {FC} from "react";

type Props = {
    id: string;
}
const MoviesTrailer: FC<Props> = async ({id}) => {
    const {results} = await MoviesService.getMovieVideo(id)
    const trailerVideo = results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    return (
        <div>

            {trailerVideo && <a href={`https://www.youtube.com/embed/${trailerVideo.key}`} target={"_blank"}
                                className="official-site-button">
                Trailer</a>}

        </div>
    );
};
export default MoviesTrailer;