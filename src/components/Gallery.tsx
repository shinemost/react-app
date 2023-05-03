/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-03 11:52:51
 * @LastEditTime: 2023-05-03 20:53:33
 * @FilePath: \react-app\src\components\Gallery.tsx
 */
import { useState } from 'react'
import { sculptureList } from '../data/data2.js'

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handleNextClick() {
    if (index < sculptureList.length) {
      setIndex(index + 1)
    }
  }

  function handlePerviousClick() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  const sculpture = sculptureList[index]
  return (
    <>
      <button onClick={handlePerviousClick} disabled={index === 0}>
        Pervious
      </button>
      <button
        onClick={handleNextClick}
        disabled={index === sculptureList.length - 1}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
}

export default Gallery
