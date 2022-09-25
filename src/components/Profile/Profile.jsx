import React from 'react';
import MyPosts from './myPosts/MyPosts';

import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} />
        </div>
    )
}

export default Profile; 