import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/imgs/user.jpg'
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    // let pagesToShow = props.pagesToShow;
    // let startIndex = pagesCount - (pagesToShow / 2);

    // let endIndex = pagesCount + (pagesToShow / 2);
    // let visiblePages = pages.slice(startIndex, endIndex);
debugger

    return (
        <div className={styles.content}>
            <div>
                {pages.map(p => {
                    return (
                        <span key={p} className={props.currentPage === p && styles.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    )
                })}
            </div>

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
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }} className={styles.btnFrienss}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
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
            {props.currentPage * props.pageSize < props.totalUsersCount && <button className={styles.addMore} onClick={() => props.onPageChanged(props.currentPage + 1)}>Показати ще</button>}
        </div>
    )
}

export default Users