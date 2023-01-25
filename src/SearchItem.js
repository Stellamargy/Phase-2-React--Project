function SearchItem({search,SearchItem}){

    return(
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">search</label>
            <input
                id="search"
                type="text"
                placeholder="Search Items"
            />

        </form>

    );
}


export default SearchItem;