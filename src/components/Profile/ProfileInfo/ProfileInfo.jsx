import React from "react";
import s from "./ProfileInfo.module.css"
import userPhoto from '../../../assets/imgs/user.jpg'

const ProfileInfo = (props) => {
debugger
//перевірка чи є профайл пустим і роздягає об'єкт і відмальовує все інше якщо довжина більше 0
//що б це не писати потрібно зробити isLoading для useEffect
if (props.profile!=null && Object.entries(props.profile).length>0)
     return (
        <div className={s.content}>

            <div>
                <img className={s.wallpaper} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="wallpaper" />
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.ProfAva}>
                <img className={s.profilePhoto} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="avvg" />
                </div>
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
                        <div>Я хочу мати роботу {props.profile.lookingForAJob === true ? "please take me i want to work" : 'no, kill me pleace'}</div>
                        <div>Мені потрібна робота? {props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>

        </div>
     )
}

export default ProfileInfo;