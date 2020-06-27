import React, { useContext } from 'react'
import '../css/App.css'
import { ContextNumber } from '../context/context'
export function ClickList (props) {
  const { countState, countDispatch } = useContext(ContextNumber)
  return (
    <li className={`click_list_box ${countState === props.thisIndex ? 'click_list_box_active' : ''}`} onMouseOver={props.enterIndex.bind(this, props.thisIndex)}>
      <div></div>
    </li>
  )
} 