const SearchBox = ({ searchChange }) => {
    return (
        <div className="py-6">
            <input
                className="py-2 text-xl text-center text-cyan-200 bg-cyan-900 rounded-full border-2 border-cyan-600 placeholder:text-cyan-500"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox
