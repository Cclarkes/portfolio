import React from 'react';
import '../styles/profile.css'
import profile from '../media/profile.jpeg';

export default function Profile() {
    return(
        <div className='profile-container'>
            <img src={profile} className="profile" alt="logo" />
        </div>
    )
}