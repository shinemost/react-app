import { useState } from 'react'

/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-08 21:01:11
 * @LastEditTime: 2023-05-08 21:06:01
 * @FilePath: \react-app\src\components\MovingDot.tsx
 */
const MovingDot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  return (
    <div
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  )
}

export default MovingDot
