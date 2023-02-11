// import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import {  useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
// import { setUserProfile } from "../../redux/profile-reducer";
import { useParams}  from "react-router-dom"
import axios from 'axios';
// import { setUserProfile } from '../../redux/profile-reducer';


// class ProfileContainer extends React.Component {

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(response => {

//                 this.props.setUserProfile(response.data)
//             })
//     }

//     render() {
//         return (
//             <Profile {...this.props} profile={this.props.profile} />
//         )
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         profile: state.profilePage.profile
//     }
// }
// export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)



// робить
function ProfileContainer() {
    const [profile, setUserProfile] = useState({});
    
    const [isLoading, setIsLoading] = useState(true);
    let { userId } = useParams();
    

    useEffect(() => {
        debugger
       
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            
            .then((response) => {
                debugger
                setUserProfile(response.data);
                setIsLoading(false);
            });
    }, [userId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return <Profile profile={profile} />;
}


// const ProfileContainer = () => {
//     const dispatch = useDispatch();
//     const { userId } = useParams();
//     const profile = useSelector(state => state.profilePage.profile);

//     useEffect(() => {
//         let id = userId
//         fetch(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
//             .then(response => response.json())
//             .then(data => {
//                 debugger
//                 dispatch(setUserProfile(data));
//             });
//     }, [dispatch, userId]);

//     return (
//         <Profile profile={profile} />
//     );}



// function ProfileContainer(props) {

//     const profile1 = useState(props => props.profile)
    
//     const profile = useSelector(state => state.profilePage.profile)
//     const {id} = useParams();
//     console.log(useParams)
//     // const location = useLocation()
//     useEffect(() => {
        
//         fetch(`https://social-network.samuraijs.com/api/1.0/profile/`+ id)
            
//         .then(response => {
//                 props.setUserProfile(response.data)
//             debugger
//             })
//     })       //Порожній масив для того що б цей хук виконувався лише при монтуванні компонента
    
    
//     return (
        
//         <Profile {...props} profile={profile1[id]} />
//     )




// }

    


//let WithUrlDataContainerComponent = withRouter(ProfileContainer)


 

export default ProfileContainer;