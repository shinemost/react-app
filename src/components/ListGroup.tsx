import { MouseEvent, useState } from 'react'

/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 22:46:31
 * @LastEditTime: 2023-04-27 22:50:51
 * @FilePath: \react-app\src\components\ListGroup.tsx
 */
function ListGroup() {
  let items = ['纽约', '旧金山', '东京', '伦敦', '巴黎', '北京']

  //状态钩子
  const [selectedIndex, setSelectdIndex] = useState(-1)

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => setSelectdIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
