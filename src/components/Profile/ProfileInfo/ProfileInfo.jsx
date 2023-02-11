import React from "react";
import s from "./ProfileInfo.module.css"
import userPhoto from '../../../assets/imgs/user.jpg'

const ProfileInfo = (props) => {

    return (
        <div className={s.content}>

            <div>
                <img className={s.wallpaper} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="wallpaper" />
            </div>
            <div className={s.descriptionBlock}>
                
                <img className={s.profilePhoto} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="avvg" />
                
                <div className={s.personalInfo}>
                    <div className={s.nameAboutPhoto}>
                        
                        <div>
                            <p>{props.profile.fullName}</p>

                            Про мене: {props.profile.aboutMe}
                        </div>
                    </div>
                    <div className={s.contactsData}>
                        
                            
                            {props.profile.contacts.mainLInk ? <p>Email: {props.profile.contacts.mainLInk}</p> : null}
                            {props.profile.contacts.twitter ? <p>twitter: {props.profile.contacts.twitter}</p> : null}
                            {props.profile.contacts.website ? <p>website:{props.profile.contacts.website}</p> : null}
                            {props.profile.contacts.youtube ? <p>youtube:{props.profile.contacts.youtube}</p> : null}
                        
                            {props.profile.contacts.github ? <p>github {props.profile.contacts.github}</p> : null}
                            {props.profile.contacts.instagram ? <p>instagram: {props.profile.contacts.instagram}</p> : null}
                            {props.profile.contacts.facebook ? <p>Facebook: {props.profile.contacts.facebook}</p> : null}
                            {props.profile.contacts.vk ? <p>mainLink {props.profile.contacts.vk}</p> : null}
                        
                    </div>
                    <div>
                        <div>IhavebeenWork {props.profile.lookingForAJob === true ? "please take me i want to work" : 'no, kill me pleace'}</div>
                        <div>Візьміть мене будь ласка {props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;