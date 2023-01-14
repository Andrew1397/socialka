import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/imgs/user.jpg'

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


    return (
        <div >
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && styles.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    )
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.user}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' className={styles.userPhoto} />
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
        </div>
    )
}

export default Users