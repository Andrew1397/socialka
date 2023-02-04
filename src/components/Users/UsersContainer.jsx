import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "./Preloader";
import ReactPaginate from "react-paginate";
import "./UC.module.css"


const UsersContainer = () => {
  const dispatch = useDispatch();
  const { users, pageSize, totalUsersCount, currentPage, pagesToShow, isFetching } = useSelector(state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pagesToShow: state.usersPage.pagesToShow,
    isFetching: state.usersPage.isFetching
  }));
  useEffect(() => {
    dispatch(toggleIsFetching(true))
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
      })
  }, [dispatch, currentPage, pageSize]);

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true))
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
    .then(response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        
      })
    console.log("data", pageNumber)
    debugger
  }
// let handlePageClick = (data) => {
    //     console.log("data", data)
    // }
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(totalUsersCount / pageSize)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={7}
        onPageChange={(page) => onPageChanged(page.selected + 1)}
        // onPageChange={ onPageChanged}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        // pageClassName={"page-item"}
        // pageLinkClassName={"page-link"}
        // previousClassName={"page-item"}
        // previousLinkClassName={"page-link"}
        // nextClassName={"page-item"}
        // nextLinkClassName={"page-link"}
        // breakClassName={"page-item"}
        // breakLinkClassName={"page-link"}
      />
      <Users totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        users={users}
        pagesToShow={pagesToShow}
        follow={(userId) => dispatch(follow(userId))}
        unfollow={(userId) => dispatch(unfollow(userId))} />
      
      
    </>
  )
}

export default UsersContainer;



// import React, { useEffect } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer";
// import Users from "./Users";
// import Preloader from "./Preloader";
// import ReactPagination from "../common/Pagination/Pagination";

// const UsersContainer = () => {
//   const dispatch = useDispatch();
//   const { users, pageSize, totalUsersCount, currentPage, pagesToShow, isFetching } = useSelector(state => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     pagesToShow: state.usersPage.pagesToShow,
//     isFetching: state.usersPage.isFetching
//   }));
//   useEffect(() => {
//     dispatch(toggleIsFetching(true))
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
// .then(response => {
//       dispatch(toggleIsFetching(false))
//       dispatch(setUsers(response.data.items));
//       dispatch(setTotalUsersCount(response.data.totalCount));
//     });
//   }, [currentPage, dispatch, pageSize]);
//   const onPageChanged = (pageNumber) => {
//     dispatch(setCurrentPage(pageNumber));
//   };
 
//   return <>
//     {isFetching ? <Preloader /> : null}
//     <ReactPagination totalItemsCount={totalUsersCount}
//       pageSize={pageSize}
//       onPageChanged={onPageChanged}
//       pagesToShow={pagesToShow}
//       currentPage={currentPage} />
//     <Users totalUsersCount={totalUsersCount}
//       pageSize={pageSize}
//       onPageChanged={onPageChanged}
//       users={users}
//       follow={follow}
//       unfollow={unfollow} />
//   </>
// };

// export default UsersContainer;























  // const [item, setItem] = useState([])

  // const handlePageClick = (data) => {
  //   console.log(data.selected)
  // }

// class UsersContainer extends React.Component {


//   componentDidMount() {
//     this.props.toggleIsFetching(true)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//       .then(response => {
//         this.props.toggleIsFetching(false)
//         this.props.setUsers(response.data.items)
//         this.props.setTotalUsersCount(response.data.totalCount)
//       })
//   }

//   onPageChanged = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber)
//     this.props.toggleIsFetching(true)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//       .then(response => {
//         this.props.toggleIsFetching(false)
//         this.props.setUsers(response.data.items)
//       })
//   }

//   render() {


//     return (
//       <>
//         {this.props.isFetching ? <Preloader /> : null}

//         <Users totalUsersCount={this.props.totalUsersCount}
//           pageSize={this.props.pageSize}
//           currentPage={this.props.currentPage}
//           onPageChanged={this.onPageChanged}
//           users={this.props.users}
//           pagesToShow={this.props.pagesToShow}
//           follow={this.props.follow}
//           unfollow={this.props.unfollow} />
//       </>
//     )
//   }
// }

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     pagesToShow: state.usersPage.pagesToShow,
//     isFetcing: state.usersPage.isFetching
//   }
// }

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setUsers,
//   setCurrentPage,
//   setTotalUsersCount,
//   toggleIsFetching
// })(UsersContainer)


// const UsersContainer = () => {

//   const users = useSelector(state => state.usersPage.users);
//   const pageSize = useSelector(state => state.usersPage.pageSize);
//   const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount);
//   const currentPage = useSelector(state => state.usersPage.currentPage);
//   const pagesToShow = useSelector(state => state.usersPage.pagesToShow);
//   const isFetching = useSelector(state => state.usersPage.isFetching);

//   useEffect(() => {
//     toggleIsFetching(true)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
//       .then(response => {
//         toggleIsFetching(false)
//         setUsers(response.data.items)
//         setTotalUsersCount(response.data.totalCount)
//       })
//   }, [])

//   const onPageChanged = (pageNumber) => {
//     setCurrentPage(pageNumber)
//     toggleIsFetching(true)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
//       .then(response => {
//         toggleIsFetching(false)
//         setUsers(response.data.items)
//       })
//   }

//   return (
//     <>
//       {isFetching ? <Preloader /> : null}

//       <Users totalUsersCount={totalUsersCount}
//         pageSize={pageSize}
//         currentPage={currentPage}
//         onPageChanged={onPageChanged}
//         users={users}
//         pagesToShow={pagesToShow}
//         follow={follow}
//         unfollow={unfollow} />
//     </>
//   )
// }



// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     pagesToShow: state.usersPage.pagesToShow,
//     isFetching: state.usersPage.isFetching,
//   }
// }


// const UsersContainer = () => {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.usersPage.users);
//   const pageSize = useSelector(state => state.usersPage.pageSize);
//   const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount);
//   const currentPage = useSelector(state => state.usersPage.currentPage);
//   const pagesToShow = useSelector(state => state.usersPage.pagesToShow);
//   const isFetching = useSelector(state => state.usersPage.isFetching);

//   useEffect(() => {
//     dispatch(toggleIsFetching(true))
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
// .then(response => {
//       dispatch(toggleIsFetching(false))
//       dispatch(setUsers(response.data.items))
//       dispatch(setTotalUsersCount(response.data.totalCount))
//     })
//   }, [dispatch, currentPage, pageSize]);

//   const onPageChanged = (pageNumber) => {
//     dispatch(setCurrentPage(pageNumber))
//     dispatch(toggleIsFetching(true))
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
// .then(response => {
//       dispatch(toggleIsFetching(false))
//       dispatch(setUsers(response.data.items))
//     })
//   }

//   return (
//     <>
//       {isFetching ? <Preloader /> : null}
//       <Users totalUsersCount={totalUsersCount}
//         pageSize={pageSize}
//         currentPage={currentPage}
//         onPageChanged={onPageChanged}
//         users={users}
//         pagesToShow={pagesToShow}
//         follow={follow}
//         unfollow={unfollow} />
//     </>
//   )
// }


// // let mapStateToProps = (state) => {
// //   return {
// //     users: state.usersPage.users,
// //     pageSize: state.usersPage.pageSize,
// //     totalUsersCount: state.usersPage.totalUsersCount,
// //     currentPage: state.usersPage.currentPage,
// //     pagesToShow: state.usersPage.pagesToShow,
// //     isFetcing: state.usersPage.isFetching
// //   }
// // }
// export default UsersContainer;

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID))
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetchingAC: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setUsers,
//   setCurrentPage,
//   setTotalUsersCount,
//   toggleIsFetching
// })(UsersContainer)


