import React from 'react'
import '../css/App.css'
export function List (props) {
  let translateCount = parseInt(100 / props.length) * (props.thisIndex - Math.floor(props.length / 2))
  let flag = props.directionFlag
  let zIndex
  if (flag) {
    zIndex = {
      'zIndex': `${(props.thisIndex === props.count - 1 || (props.thisIndex === props.length - 1 && props.count - 1 < 0)) && props.animationFlag ? 99 : props.length - Math.abs(props.thisIndex - props.count)}`
    }
  }
  else {
    zIndex = {
      'zIndex': `${(props.thisIndex === props.count + 1 || (props.thisIndex === 0 && props.count + 1 > props.length - 1)) && props.animationFlag ? 99 : props.length - Math.abs(props.thisIndex - props.count)}`
    }
  }
  let listStyle = props.listStyle || {
    'transform': `translate(${translateCount}%)`,
  }
  let styleBox = { ...listStyle, ...zIndex }

  let photoClassName = props.photoClassName ? `list_photo ${props.photoClassName}` : 'list_photo'
  let transformStyle = ' list_big'
  if (props.transformStyle) {
    transformStyle = ` list_big ${props.transformStyle}`
  }
  else if (props.animationStyle) {
    if (props.directionFlag) {
      photoClassName += props.thisIndex === props.count - 1 || (props.thisIndex === props.length - 1 && props.count - 1 < 0) ? ` ${props.animationStyle}` : ''
    }
    else {
      photoClassName += props.thisIndex === props.count + 1 || (props.thisIndex === 0 && props.count + 1 > props.length - 1) ? ` ${props.animationStyle}` : ''
    }
  }
  else {
    photoClassName += props.thisIndex === props.count ? transformStyle : ''
  }
  return (
    <li style={styleBox} className='list_background'>
      <div className={photoClassName}>
        <img src={props.photo} width='100%' className="image_style" />
      </div>
    </li>
  )
} 