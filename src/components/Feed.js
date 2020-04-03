import React, {Component, useState, useEffect} from 'react'; 
import {TrainList} from '../utils/Resources.js'

import { NavLink } from 'react-router-dom';
import AddComment from './AddComment';

const allCommentsUrl = "http://localhost:5000/view/comments"

function Feed(){  
  const [inputTrain, setInputTrain] = useState("A");
  const [comments, setComments] = useState([]);

  const [trainList, setTrainList] = React.useState([])

  const configs = {
      method: 'GET',
      mode: 'cors',
      headers : {"Content-Type" : "application/json"}
    }

    const renderTrains = () =>{
    return trainList.map((train, i) =>{
        return (<option value={train} key ={'train' + i}>{train}</option>)
     })
    }
    
    const renderComments = () => {
      console.log(comments)
      return comments.filter(c => c.line_pk === trainList.indexOf(inputTrain)).map((c, i) => {
        return (<div className={'comment'} key={'comment-' + i}>
          <div className={'comment-username'}>{c.username}</div>
          <div className={'comment-time'}>{c.time.toLocalDateString()}</div>
          <div className={'comment-comment'}>{c.comment}</div>
        </div>)
      })
    }

  
  useEffect(() => {
    const trains = TrainList()
    setTrainList(trains)
    if (trains.length > 0)
        setInputTrain(trains[0])
    fetch(allCommentsUrl, configs)
      .then(res => res.json())
      .then(res => {
        setComments(res.comments)
        console.log(res)
      })
  }, [])



  return(
    <div className = "commentFeed"> 

      {/* train selection */}
      <select className = "trainSelection" 
              onClick = {e => setInputTrain(e.target.value)}>
        {renderTrains()}
      </select>

      <form className = "commentForm">

        <h1>THis is the feed</h1>
        <div className = "feed"
        
        onClick = {e => renderComments(e.target.value)}>
          {renderComments()}
        </div>
        <div className = "commentBox">

          <AddComment train = {inputTrain}/>
        </div>
      </form>
    </div>
  )
}

export default Feed;