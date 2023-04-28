import React from 'react'

interface Props {
  classname: string
  children: string
}

const Button = ({ classname, children }: Props) => {
  return (
    <button type="button" className={classname}>
      {children}
    </button>
  )
}

export default Button
