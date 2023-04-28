import React from 'react'

interface Props {
  color?: string
  children: string
  onclick: () => void
}

const Button = ({ color = 'danger', children, onclick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
