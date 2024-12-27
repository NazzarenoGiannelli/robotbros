const SearchBox = ({ searchChange }) => {
    return (
        <div className="py-6">
            <input
                className="text-xl py-2 text-center text-cyan-200 placeholder:text-cyan-500 bg-cyan-900 border-2 border-cyan-600 rounded-full"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox
