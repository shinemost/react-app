/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-28 22:25:47
 * @LastEditTime: 2023-05-03 10:33:02
 * @FilePath: \react-app\src\components\Button.tsx
 */
import React from 'react'

interface Props {
  color?: 'primary' | 'secondary' | 'danger'
  children: string
  onclick: () => void
}

const Button = ({ color, children, onclick }: Props) => {
  return (
    <button
      className={'btn btn-' + color}
      onClick={(e) => {
        e.stopPropagation()
        onclick()
      }}
    >
      {children}
    </button>
  )
}

export default Button
