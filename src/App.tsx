/*
 * @LastEditors: fuhaijing fuhaijing@gotion.com.cn
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-05-01 14:28:11
 * @FilePath: \react-app\src\App.tsx
 */
import { useState } from 'react'
import Mybutton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Mybutton count={count} onClick={handleClick} />
      <Mybutton count={count} onClick={handleClick} />
    </div>
  )
}

export default App
