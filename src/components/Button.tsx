import React from 'react'

interface Props {
  color?: 'primary' | 'secondary' | 'danger'
  children: string
  onclick: () => void
}

const Button = ({ color, children, onclick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
