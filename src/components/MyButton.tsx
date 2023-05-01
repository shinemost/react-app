import { useState } from 'react'

const Mybutton = ({ onClick, count }: any) => {
  return <button onClick={onClick}>Clicked {count} times</button>
}
export default Mybutton
