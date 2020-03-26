import React, {Component, useState} from 'react'; 



const [url, setUrl] = useState("http://localhost:5000/comments")

function Comments(props) {
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