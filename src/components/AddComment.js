import React, {Component, useState} from 'react'; 

const [url, setUrl] = useState("http://localhost:5000/add/comment")

function AddComment(props) {

const [inputText, setInputText] = useState("");

const postComment = async () => {
const configs = {
method: "POST",
mode: "cors",
headers : {"Content-Type" : "application/json"},
body: JSON.stringify({
comment: inputText,
})
}
try{
  const response = await fetch(url, configs)
}catch (error){
console.log(error);
}
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
      onClick = {() => postComment()}
      >Post</button>
    </div>
  );
}



export default AddComment;