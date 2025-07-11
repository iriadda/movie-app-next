import {FC} from "react";
import Link from "next/link";
import './Pagination.css'


interface Props {
    currentPage: number;
    totalPages: number;
    genreId?: number;
    sQuery?: string;

}

const Pagination: FC<Props> = ({totalPages, currentPage, genreId, sQuery}) => {
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const genre = () => genreId ? `&with_genres=${genreId}` : ''
    const query = () => sQuery ? `&query=${sQuery}` : ''


    return (
        <div className={'pagination'}>
            <Link href={`?page=1${genre()}${query()}`}
                  className={`pagination-link ${currentPage === 1 ? "disabled" : ""}`}>First</Link>
            <Link href={`?page=${prevPage}${genre()}${query()}`}
                  className={`pagination-link ${!prevPage ? "disabled" : ""}`}>Prev</Link>
            <span>Page {currentPage} </span>
            <Link href={`?page=${nextPage}${genre()}${query()}`}
                  className={`pagination-link ${!nextPage ? "disabled" : ""}`}>Next</Link>
            <Link href={`?page=${totalPages}${genre()}${query()}`}
                  className={`pagination-link ${currentPage === totalPages ? "disabled" : ""}`}
            >Last</Link>
        </div>
    );
};
export default Pagination;