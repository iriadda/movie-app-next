import Link from "next/link";
import logo from '../../app/logo.svg'
import Image from "next/image";
import GenreList from "@/components/genreList/GenreList";
import "./NavBar.css"

interface Props {
    genreId?: number | undefined,
}

const NavBar = ({genreId}: Props) => {
    return (
        <div className="navBar">
            <Link href={'/'} className={'logo-link'}><Image src={logo} alt={'logo'} height={40}/> </Link>

            <p>Genres</p>
            <GenreList selectedGenreId={genreId}/>
        </div>
    );
};
export default NavBar;