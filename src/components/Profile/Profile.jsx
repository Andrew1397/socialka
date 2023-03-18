import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';

import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile; 