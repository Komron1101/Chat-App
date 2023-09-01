import React from 'react';

// Путь к вашей иконке или изображению
import AdminIcon from '../UserIcons/AdminIcon.jpg'; 

const UserIcon = ({ userName }) => {
    return (
        <div className="UserProfile">
            <img src={AdminIcon} alt="User Icon" className="UserAvatar" />
            <span className="UserName">{userName}</span>
        </div>
    );
}

export default UserIcon;