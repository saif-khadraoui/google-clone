import React, { useContext, useState } from 'react'
import "./searchBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { SearchContext } from '../../contexts/SearchContext';
import { useNavigate } from "react-router-dom"

function SearchBar() {
    const {searchedItem, setSearchedItem} = useContext(SearchContext)
    const navigate = useNavigate();

    const search = (e) => {
        if(e.key == "Enter"){
            if(searchedItem !== ""){
                navigate(`/search/${searchedItem}`)
            }
        }

        console.log(searchedItem)
    }

  return (
    <div className='searchBar'>
        <SearchIcon />
        <input type="text" onChange={((e)=> setSearchedItem(e.target.value))} onKeyDown={search}/>
        <MicIcon />

    </div>
  )
}

export default SearchBar