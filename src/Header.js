import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// type rfce for the body to pop up


function Header() {
  return (
    <div className ='header' boobs='big'>
{/* --------------------------------------------------------------- */}
        <div className="header__left">
           {/* linkedin image */}
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwMh_VnPdEjRGc2eptAm8YS3HLJ0dKvz6QQ&usqp=CAU" 
          alt="" /> 

          <div className="header__search">
            {/* search img */}
            <SearchIcon/>
            <input type="text" />

          </div>

        </div>
{/* --------------------------------------------------------------- */}
        <div className="header__right">
          {/* creating a reusable component */}
          <HeaderOption Icon={HomeIcon} title ='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title = 'My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title = 'Jobs'/>
          <HeaderOption Icon={ChatIcon} title = 'Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title = 'Notification'/>
        </div>
        

    </div>
  )
}

export default Header
