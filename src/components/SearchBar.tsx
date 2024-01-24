"use client"

import { useState } from "react"

import { SearchManuFacturer } from "."

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () =>{}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__items">
            <SearchManuFacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar