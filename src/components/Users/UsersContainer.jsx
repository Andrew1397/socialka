import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, getUsers, toggleFollowingProgress, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import ReactPaginate from "react-paginate";
import "./UC.module.css"


const UsersContainer = () => {
  const dispatch = useDispatch();
  const { users, pageSize, totalUsersCount, currentPage, pagesToShow, isFetcing, followingInProgress } = useSelector(state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pagesToShow: state.usersPage.pagesToShow,
    isFetcing: state.usersPage.isFetcing,
    followingInProgress: state.usersPage.followingInProgress
    
  }));
  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const onPageChanged = (pageNumber) => {
    dispatch(getUsers(pageNumber, pageSize));
    
  }

  return (
    <>
      {isFetcing ? <Preloader /> : null}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(totalUsersCount / pageSize)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={7}
        onPageChange={(page) => onPageChanged(page.selected + 1)}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}

      />
      <Users totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        users={users}
        pagesToShow={pagesToShow}
        follow={(userId) => dispatch(follow(userId))}
        unfollow={(userId) => dispatch(unfollow(userId))} 
        toggleFollowingProgress={toggleFollowingProgress}
        followingInProgress={followingInProgress}
        getUsers={getUsers}
        />
      
      
    </>
  )
}

export default UsersContainer;


