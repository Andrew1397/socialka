import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";


const MyPosts = (props) => {

  let postsElements = props.postsData.map((post) => <Posts message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    // props.addPost()
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text)
    //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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