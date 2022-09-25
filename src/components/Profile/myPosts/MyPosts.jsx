import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

const MyPosts = (props) => {

  let postsElements = props.postsData.map((post) => <Posts message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts;