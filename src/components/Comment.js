import React, {Component, useState} from 'react'; 

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
const [inputText, setinputText] = useState("");
const [url, setUrl] = useState("http://localhost:5000/comment")


  const commentPost  = {
    method: "POST",
    mode: "cors",
    headers : {"Content-Type" : "application/json"},
    body: JSON.stringify({
      date: new Date(),
      text: inputText,
      username: username
    })
 
  };

  return (
    <div className="Comment">
      <div className="UserInfo">
        <div className="username">
          {props.username}
        </div>
      </div>
      <div className="text">
        <textarea className = "userText" placeholder = "Post a comment"></textarea>
        {props.text}
      
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}



export default Comment;