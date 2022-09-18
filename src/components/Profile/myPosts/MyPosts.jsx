import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'Deamon', likesCount: 6 },
    { id: 2, message: 'Girl', likesCount: 15 },
    { id: 3, message: 'Love', likesCount: 7 },
    { id: 4, message: 'Me', likesCount: 12 }
  ]

  let postsElements = postsData.map((post) => <Posts message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts;