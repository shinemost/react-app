/*
 * @Author: fuhj_smc fuhj_smc@si-tech.com.cn
 * @Date: 2023-05-07 21:32:31
 * @LastEditors: shinemost supertain147@163.com
 * @LastEditTime: 2023-05-07 23:03:20
 * @FilePath: \react-app\src\components\Counter.tsx
 */
import { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5)
          setNumber((number) => number + 1)
        }}
      >
        增加数字
      </button>
    </>
  )
}

export default Counter
