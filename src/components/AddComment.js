import React, {Component, useState} from 'react'; 
import {useSelector} from 'react-redux'

const url = "http://localhost:5000/add/comment"

function AddComment(train) {
  const token = useSelector(state => state.token)
  const [inputText, setInputText] = useState("");


  const postComment = (e) => {
    e.preventDefault()
    console.log(train.train, token)
    const configs = {
      method: "POST",
      mode: "cors",
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify({
        comment: inputText,
        token: token,
        line: train
      })
    }

    fetch(url, configs)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
 
  return (
    <div className="addComment">
    
      <div className="text">
        <textarea 
        className = "userText" 
        placeholder = "Post a comment"
        onChange={e => setInputText(e.target.value)}
        ></textarea>
      </div>
      <button 
      className = "postComment" 
      onClick = {postComment}
      >Post</button>
    
    </div>
  );
}



export default AddComment;