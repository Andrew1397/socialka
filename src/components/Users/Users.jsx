import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/imgs/user.jpg'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const dispatch = useDispatch();

    return (
        <div className={styles.content}>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.user}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' className={styles.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        dispatch(props.unfollow(u.id));
                                    }} className={styles.btnFrienss}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        dispatch(props.follow(u.id));
                                    }} className={styles.btnFriens}>Follow</button>}

                            </div>
                        </span>
                        <span className={styles.userTextInfo} key={u.id}>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>

                </div>)
            }
            <div className={styles.buttonContainer}>{props.currentPage * props.pageSize < props.totalUsersCount && <button className={styles.addMore} onClick={() => props.onPageChanged(props.currentPage + 1)}>Показати ще</button>}</div>
        </div>
    )
}

export default Users