import {FC} from "react";
import Search from "@/components/search/Search";

type Props={
      searchParams: Promise<{
          [key: string]: string | undefined;
        }>;
}
const SearchPage:FC<Props> = async ({searchParams}) => {
    const {query, page}=await searchParams

    return (
        <>
        <Search query={query} page={page}/>
        </>
    );
};
export default SearchPage;