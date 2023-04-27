import { Fragment } from 'react'

/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 22:46:31
 * @LastEditTime: 2023-04-27 22:23:49
 * @FilePath: \react-app\src\components\ListGroup.tsx
 */
function ListGroup() {
  const items = ['纽约', '旧金山', '东京', '伦敦', '巴黎', '北京']

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
