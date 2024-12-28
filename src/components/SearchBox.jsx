const SearchBox = ({ searchChange }) => {
    return (
        <div className="py-6">
            <input
                className="py-2 text-xl font-bold text-center text-green-800 bg-green-200 rounded-full border-2 border-green-600 max-w-60 placeholder:font-normal placeholder:text-green-600 placeholder:text-center"
                type="search"
                placeholder="Search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox
