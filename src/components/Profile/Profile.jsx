import React from 'react';
import MyPostsContainer from './myPosts/MyPostsContainer';

import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
debugger
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile; 