import React from 'react';
import MyPosts from './myPosts/MyPosts';

import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile; 