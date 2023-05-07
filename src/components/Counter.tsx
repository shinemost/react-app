/*
 * @Author: fuhj_smc fuhj_smc@si-tech.com.cn
 * @Date: 2023-05-07 21:32:31
 * @LastEditors: fuhj_smc fuhj_smc@si-tech.com.cn
 * @LastEditTime: 2023-05-07 22:00:35
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
          setNumber(number + 5)
          setTimeout(() => {
            alert(number)
          }, 3000)
        }}
      >
        +5
      </button>
    </>
  )
}

export default Counter
