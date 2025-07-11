import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Movies App",
    description: "Movies App for TMBD",
};

type Props = { children: React.ReactNode };

const MoviesLayout = ({children}: Props) => {


    return (
        <>
            {children}
        </>
    );
}
export default MoviesLayout;