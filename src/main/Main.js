import React, { useContext, useState } from 'react'
import { ContextNumber } from '../context/context'
import { List } from './List'
import { ClickList } from './ClickList'

let timer
let flag

export function Main (props) {
  const { countState, countDispatch } = useContext(ContextNumber)
  const { directionState, directionDispatch } = useContext(ContextNumber)

  let photoArr = props.photoList
  let length = photoArr.length
  let timerHandle = () => {
    if (countState >= length - 1) {
      flag = false
    }
    else if (countState <= 0) {
      flag = true
    }
    if (flag) {
      upIndex()
    }
    else {
      downIndex()
    }
  }
  let addTimer = () => {
    clearTimer()
    timer = setInterval(timerHandle.bind(this), 3000)
  }

  let clearTimer = () => {
    clearInterval(timer)
  }

  addTimer()

  let enterIndex = (count) => {
    countDispatch({
      type: "click",
      count
    })
  }
  let upIndex = () => {
    countDispatch({
      type: "up"
    })
    directionDispatch({
      type: "up"
    })
    flag = true
  }
  let downIndex = () => {
    countDispatch({
      type: "down"
    })
    directionDispatch({
      type: "down"
    })
    flag = false
  }

  return (
    <nav className="list" onMouseOver={clearTimer} onMouseLeave={addTimer}>
      <div className="list_button_box">
        {
          countState <= 0 ? <button className="list_button list_left_button_disable"></button> : <button className="list_button list_left_button" onClick={downIndex}></button>
        }
      </div>
      <div className="photo_list_box">
        <ul className='list_box'>
          {
            photoArr.map((val, index) => {
              return <List photo={val} key={index} count={countState} length={length} thisIndex={index} listStyle={props.listStyle} transformStyle={props.transformStyle} photoClassName={props.photoClassName} directionFlag={flag} animationStyle={props.animationStyle}></List>
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
          countState >= length - 1 ? <button className="list_button list_right_button_disable"></button> : <button className="list_button list_right_button" onClick={upIndex}></button>
        }
      </div>
    </nav>
  )
}