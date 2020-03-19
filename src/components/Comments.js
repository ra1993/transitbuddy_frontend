import React, {Component, useState} from 'react'; 


function Comments(props) {
const [url, setUrl] = useState("http://localhost:5000/comments")
const [items, setItems] = [];

  const commentPost  = {
    method: "GET",
    mode: "cors",
    headers : {"Content-Type" : "application/json"},
    text: inputText,
    comments: items
  };

  return (
    <div className="Comments">
     
    </div>
  );
}



export default Comments;