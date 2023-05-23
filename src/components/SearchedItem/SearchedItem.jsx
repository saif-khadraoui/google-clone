import React from 'react'
import "./searchedItem.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SearchedItem({ item }) {
  return (
    <div className='searchedItem'>
        <div className='top'>
            <div className="left">
                {/* <AccountCircleIcon /> */}
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&
                    <img src={item.pagemap?.cse_image[0]?.src} alt="" />
                }
                
            </div>
            <div className="middle">
                <p>{item.urlTitle}</p>
                <a className='searchedItemLink' href={item.formattedUrl}>{item.formattedUrl}</a>
            </div>
            <div className="right">
                <MoreVertIcon />
            </div>
        </div>
        <a className='searchedItemTitle' href={item.formattedUrl}><h2>{item.title}</h2></a>
        <p className='searchedItemDescription'>{item.snippet}</p>
    </div>
  )
}

export default SearchedItem