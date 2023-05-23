import React, { useState, useEffect } from 'react'
import "./ResultsPage.scss"
import Axios from "axios"
import { useParams, useLocation } from 'react-router-dom'
import SearchedItem from '../../components/SearchedItem/SearchedItem';

import ResultsPageNav from '../../components/ResultsPageNav/ResultsPageNav';

function ResultsPage() {
    const location = useLocation();
    const [results, setResults] = useState([])

    const {id} = useParams();


    useEffect(() => {
        switch(location.pathname){
            case(`/search/${id}`):
            Axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyASZ-8EAOI-WIoEfOejUTQdASG2yuDyoxE&cx=74fe0f52a88044d9e&q=${id}`).then((response) => {
                console.log(response)
                setResults(response.data.items)
            })

            case(`/search/${id}/images`):
            Axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyASZ-8EAOI-WIoEfOejUTQdASG2yuDyoxE&cx=74fe0f52a88044d9e&searchType=image&q=${id}`).then((response) => {
                console.log(response)
                setResults(response.data.items)
            })
        }
      
    }, [location])

  switch(location.pathname){
    case(`/search/${id}`):
    return (
        <div className='resultsPage'>
           <ResultsPageNav />
            <div className='results'>
                {results.map((item, key) => {
                    return <SearchedItem item={item}/>
                })}
            </div>
        </div>
      )
      case(`/search/${id}/images`):
            return (
                <>
                <ResultsPageNav />
                <div className='imageResults'>
                {results.map((item, key) => {
                    return(
                        <div className='imageItem'>
                            <img src={item.link} alt="" />
                            <p>{item.snippet}</p>
                        </div>
                    )
                })}
                </div>
                </>
            
            )
  }

}

export default ResultsPage