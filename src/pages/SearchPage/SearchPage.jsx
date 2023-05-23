import React from 'react'
import "./searchPage.scss"
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import logo from "../../assets/google_logo.png"

function SearchPage() {
  return (
    <div className='searchPage'>
        <NavBar />
        <div className='container'>
            <div className='middle'>
                <img src={logo} alt="google logo"/>
                <SearchBar />
                <div className='buttons'>
                    <button>Google Search</button>
                    <button>I'm feeling lucky</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPage