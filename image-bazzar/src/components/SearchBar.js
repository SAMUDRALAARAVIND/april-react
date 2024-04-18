const SearchBar = ({ onChangeText, onSearch, isLoading }) => {
    return <div className="search-bar">
        <div className="inner-container">
            <input placeholder="Search for images ..." onChange={onChangeText} />
            <button disabled={isLoading} onClick={onSearch}>Search</button>
        </div>
    </div>
}

export default SearchBar;