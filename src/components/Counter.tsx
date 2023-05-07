/*
 * @Author: fuhj_smc fuhj_smc@si-tech.com.cn
 * @Date: 2023-05-07 21:32:31
 * @LastEditors: shinemost supertain147@163.com
 * @LastEditTime: 2023-05-07 22:51:39
 * @FilePath: \react-app\src\components\Counter.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((number) => number + 1)
          setNumber((number) => number + 1)
          setNumber((number) => number + 1)
        }}
      >
        +3
      </button>
    </>
  )
}

export default Counter
