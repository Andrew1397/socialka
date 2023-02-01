import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";


const MyPosts = (props) => {

  let postsElements = props.postsData.map((post) => <Posts message={post.message} likesCount={post.likesCount} key={post.id} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.content}>
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
    </div>
  )
}


export default MyPosts;