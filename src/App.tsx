/*
 * @LastEditors: fuhaijing fuhaijing@gotion.com.cn
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-05-01 11:04:02
 * @FilePath: \react-app\src\App.tsx
 */
import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import ListGroup from './components/ListGroup';
import Message from './components/Message';
import User from './components/User'

function App() {

  let content;
  let isLoggedIn = false;
  let num = 3;

  if (num === 1) {
    content = <Message/>
  } else if(num === 2) {
     content = <User/>
  } else {
    content = <div><Message/><Message/></div>
  }

  return <div>{content}</div>
}

export default App
