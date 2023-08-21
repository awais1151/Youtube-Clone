import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import './Header.css';
function Header() {
    return (
        <div className='header'>
            <div className='haeder-left'>
                <MenuIcon  className='Menu'/>
                <img src="/images/you.png" alt="" className='img'  />
            </div>
            <div className='center'>
                <input placeholder='Search' type="text" alt='' />
                <SearchIcon  className='serachicon' />
            </div>
            <div className='right'>
                <VideoCallIcon  className='right'/>
                <AppsIcon className='right'/>
                <NotificationsIcon className='right'/>
                <Avatar alt='awais' src='/images/V3.png' className='right'  />
            </div>
        </div>
    )
}

export default Header
// const Container = styled.div`
//  display: flex; 
//  margin-top: 5px;
 
// /* justify-content: center; */
// /* justify-content: space-between; */
//   img{
//  margin-top:7px;
// object-fit: contain;
// height:30%;
// width:30%;
//   }

// `
// const Left = styled.div`
//   justify-content:center;
//   align-items: center;
//   `
// const Center = styled.div`
//   justify-content:center;
//   align-items: center;
//   `
// const Right = styled.div`
//   justify-content:center;
//   align-items: center;
//   `