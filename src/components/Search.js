import React from "react"
import { MdSearch } from "react-icons/md"

const Search = ({ handleSearching }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        onChange={(event) => handleSearching(event.target.value)}
        type="text"
        placeholder="enter to search"
      />
    </div>
  )
}

export default Search
