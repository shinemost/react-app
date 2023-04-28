import React from 'react'

interface Props {
  classname: string
  text: string
}

const Button = ({ classname, text }: Props) => {
  return (
    <button type="button" className={classname}>
      {text}
    </button>
  )
}

export default Button
