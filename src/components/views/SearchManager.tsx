
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/search_manager.css";

const Search = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/search', { state: { query } });
    };

    return ( 
        <section className="header">
            <form action="" className="search-form" onSubmit={handleSubmit} autoComplete="off">
                <input 
                    type="search" 
                    name="nsearch" 
                    id="isearch" 
                    placeholder="Search for movies or TV series..."
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                    autoComplete="off"
                    autoCorrect="off" />
            </form>
        </section>
     );
}
 
export default Search;
