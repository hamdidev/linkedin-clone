import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOptions from './HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
    const dispatch = useDispatch();
    const logoutOfApp = ()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
           <div className="header__left">
               <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linkedin Logo"/>
               <div className="header__search">
                   {/* SearchIcon */}
                   <SearchIcon />

                   <input placeholder="Search" type="text" /> 

               </div>
           </div>
           <div className="header__right">
               <HeaderOptions Icon={HomeIcon} title="Home" />
               <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
               <HeaderOptions Icon={SupervisorAccountIcon} title='Jobs' />
               <HeaderOptions Icon={ChatIcon} title='Messaging' />
               <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
               <HeaderOptions title="me"
               onClick={logoutOfApp}
               avatar={true}
               />

           </div>
        </div>
    )
}

export default Header
