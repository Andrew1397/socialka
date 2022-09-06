import React from "react";
import s from "./Posts.module.css"


const Posts = () => {
  return (
    <div className={s.item}>
      <img src="https://steamuserimages-a.akamaihd.net/ugc/854978184323897483/7784E31CA17E561701C4694A8E722650F8C9D6D2/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img>
      post1
      <div>
        <span>like </span>
      </div>
    </div>
  )
}


export default Posts;