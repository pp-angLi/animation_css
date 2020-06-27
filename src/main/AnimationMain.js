import React, { useContext, useState, useEffect } from 'react'
import { ContextNumber } from '../context/context'
import { List } from './List'
import { ClickList } from './ClickList'

let timer

export function AnimationMain (props) {
  const { countState, countDispatch } = useContext(ContextNumber)
  const { directionState, directionDispatch } = useContext(ContextNumber)
  let photoArr = props.photoList
  let length = photoArr.length
  let timerHandle = () => {
    upIndex()
  }
  let addTimer = () => {
    timer = setInterval(timerHandle.bind(this), 3000)
  }
  let clearTimer = () => {
    clearInterval(timer)
  }
  let enterIndex = (count) => {
    countDispatch({
      type: "click",
      count
    })
  }
  let upIndex = () => {
    if (countState >= length - 1) {
      countDispatch({
        type: "toZero"
      })
    }

    else {
      countDispatch({
        type: "up"
      })
    }
    directionDispatch({
      type: "up"
    })
  }
  let downIndex = () => {
    if (countState <= 0) {
      countDispatch({
        type: "click",
        count: length - 1
      })
    }
    else {
      countDispatch({
        type: "down"
      })
    }
    directionDispatch({
      type: "down"
    })
  }
  clearTimer()
  addTimer()
  return (
    <nav className="list" onMouseOver={clearTimer} onMouseLeave={addTimer}>
      <div className="list_button_box">
        {
          <button className="list_button list_left_button" onClick={downIndex}></button>
        }
      </div>
      <div className="photo_list_box">
        <ul className='list_box'>
          {
            photoArr.map((val, index) => {
              return <List photo={val} key={index} count={countState} length={length} thisIndex={index} listStyle={props.listStyle} transformStyle={props.transformStyle} photoClassName={props.photoClassName} directionFlag={directionState} animationFlag={true} animationStyle={props.animationStyle}></List>
            })
          }
        </ul>
        <ul className="photo_list_nav">
          {
            photoArr.map((val, index) => {
              return <ClickList key={index} thisIndex={index} enterIndex={enterIndex}></ClickList>
            })
          }
        </ul>
      </div>
      <div className="list_button_box">
        {
          <button className="list_button list_right_button" onClick={upIndex}></button>
        }
      </div>
    </nav>
  )
}