import React, { useReducer } from 'react';
import '../css/App.css';
import '../css/test.css'
import { store } from '../store/store'
import { ContextNumber } from '../context/context'
import { Main } from '../main/Main'
import { AnimationMain } from '../main/AnimationMain'
import photo1 from '../img/1.jpeg'
import photo2 from '../img/2.jpeg'
import photo3 from '../img/3.jpeg'

function App () {
  const { count, direction } = store
  const [countState, countDispatch] = useReducer(count, 0)
  const [directionState, directionDispatch] = useReducer(direction, true)
  // listStyle -> 列表的样式
  // transformStyle -> 切换的样式
  // photoClassName -> 图片样式

  // const transformStyle = 'list_big_text'

  const animationStyle = directionState ? 'list_big_animation' : 'list_big_animation_right'
  const listStyle = {
  }
  return (
    <ContextNumber.Provider value={{ countState, countDispatch, directionState, directionDispatch }}>
      {/* <Main photoList={[photo1, photo2, photo3]} transformStyle={transformStyle}></Main> */}
      {/* <Main photoList={[photo1, photo2, photo3, photo1, photo2, photo3]} ></Main> */}
      <AnimationMain photoList={[photo1, photo2, photo3]} animationStyle={animationStyle} listStyle={listStyle}></AnimationMain>
    </ContextNumber.Provider>
  );
}

export default App;
