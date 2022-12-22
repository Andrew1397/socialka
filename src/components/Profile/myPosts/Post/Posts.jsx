import React from "react";
import s from "./Posts.module.css"


const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src="https://steamuserimages-a.akamaihd.net/ugc/854978184323897483/7784E31CA17E561701C4694A8E722650F8C9D6D2/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="avatar"></img>
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  )
}


export default Posts;