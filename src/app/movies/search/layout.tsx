import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Search Movies ",
    description: "Search Movies for TMBD",
};

type Props = { children: React.ReactNode };

const SearchLayout = ({children}: Props) => {


    return (
        <>
            {children}
        </>
    );
}
export default SearchLayout;