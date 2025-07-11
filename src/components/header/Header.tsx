'use client';

import UserInfo from "@/components/user-info/UserInfo";
import './header.css'
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";


const Header = () => {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return
        router.push(`/movies/search?query=${encodeURIComponent(query.trim())}`);
        setQuery('')
    }
    return (
        <header>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder={'Search movies...'}
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button type={"submit"} className={'headerButton'}>Search</button>
            </form>

            <UserInfo/>
        </header>
    );
};
export default Header;