import {IBaseResponseModel} from "@/models/IBaseResponseModel";
import {IBaseGenres} from "@/models/IBaseGenres";
import {IMovieModel} from "@/models/IMovieModel";
import {IBaseVideo} from "@/models/IVideo";
import {IBaseSearchResult} from "@/models/IBaseSearchResults";
import {apiFetch} from "@/services/api.service";

export const MoviesService = {
    getAllMovies: (page: number, with_genres?: number): Promise<IBaseResponseModel> => {
        return apiFetch("/discover/movie", {page, with_genres})
    },
    getGenres: (): Promise<IBaseGenres> => {
        return apiFetch('/genre/movie/list')
    },
    getMovieById: (id: string): Promise<IMovieModel> => {
        return apiFetch(`/movie/${id}`)
    },
    getMovieVideo: (id: string): Promise<IBaseVideo> => {
        return apiFetch(`/movie/${id}/videos`)
    },
    searchMovie: (page: number, query: string | undefined): Promise<IBaseSearchResult> => {
        return apiFetch(`/search/keyword`, {page, query})
    }
}








