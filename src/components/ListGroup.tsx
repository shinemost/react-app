import { useState } from 'react'

/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 22:46:31
 * @LastEditTime: 2023-04-27 23:34:30
 * @FilePath: \react-app\src\components\ListGroup.tsx
 */

interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //状态钩子
  const [selectedIndex, setSelectdIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectdIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
