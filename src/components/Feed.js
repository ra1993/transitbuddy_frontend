import React, {Component, useState, useEffect} from 'react'; 
import {TrainList} from '../utils/Resources.js'

import { NavLink } from 'react-router-dom';
import AddComment from './AddComment';

const allCommentsUrl = train => `http://localhost:5000/view/comments/${train}`

function Feed(){  
  const [inputTrain, setInputTrain] = useState("A");
  const [comments, setComments] = useState([]);
  const [trainList, setTrainList] = React.useState([])

  

    const renderTrains = () =>{
    return trainList.map((train, i) =>{
        return (<option value={train} key ={'train' + i}>{train}</option>)
     })
    }
    
  useEffect(() => {
    const trains = TrainList()
    setTrainList(trains)
    if (trains.length > 0)
        setInputTrain(trains[0])
  }, [])

  useEffect(() => {
    const configs = {
      method: 'GET',
      mode: 'cors',
      headers : {"Content-Type" : "application/json"}
    }
    fetch(allCommentsUrl(inputTrain), configs)
      .then(res => res.json())
      .then(res => {
        setComments(res)
        console.log('Feed', res)
      })
  }, [inputTrain])

  const renderComments = () => {
        
    return comments.map((c, i) => {
   
      return (<div className={'comment'} key={'comment-' + i}>
        <div className={'comment-username'}>{c.username}</div>
        <div className={'comment-time'}>{c.time.toLocaleString()}</div>
        <div className={'comment-comment'}>{c.comment}</div>
      </div>)
    })
  }


  return(
    <div className = "commentFeed"> 
    <center>
    <h1>Train Feed</h1>
      {/* train selection */}
      <select className = "trainSelection" 
              onClick = {e => setInputTrain(e.target.value)}>
        {renderTrains()}
      </select>

      <form className = "commentForm">

        
        <div className = "Feed">
          {renderComments()}
        </div>
        <div className = "commentBox">

          <AddComment train = {inputTrain}/>
        </div>
      </form>
      </center>
    </div>
  )
}

export default Feed;

