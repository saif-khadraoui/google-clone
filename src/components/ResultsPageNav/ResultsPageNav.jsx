import React from 'react'
import "./resultsPageNav.scss";
import logo from "../../assets/google_logo.png"
import SearchBar from '../../components/SearchBar/SearchBar';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate, useParams } from 'react-router-dom';

function ResultsPageNav() {
    const navigate = useNavigate();
    const {id} = useParams();
  return (
    <div className='resultsPageNav'>
         <div className='top'>
                <div className="left">
                    <img src={logo} alt="google logo" onClick={(() => navigate("/"))}/>
                    <SearchBar />
                </div>
                <div className="right">
                    <SettingsIcon />
                    <AppsIcon />
                    <AccountCircleIcon />
                </div>
            </div>
            <div className='searchTab'>
                <div className='item' onClick={(() => navigate(`/search/${id}`))}><SearchIcon fontSize='small'/>All</div>
                <div className='item' onClick={(() => navigate(`/search/${id}/images`))}><CropOriginalIcon fontSize='small'/>Images</div>
                <div className='item'><VideoLibraryIcon fontSize='small'/>Videos</div>
                <div className='item'><NewspaperIcon fontSize='small'/>News</div>
                <div className='item'><LocalOfferIcon fontSize='small'/>Shopping</div>
                <div className='item'><MoreVertIcon fontSize='small'/>More</div>
            </div>
            <hr />
    </div>
  )
}

export default ResultsPageNav