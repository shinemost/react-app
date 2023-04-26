import { Fragment } from 'react'

/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 22:46:31
 * @LastEditTime: 2023-04-26 23:28:01
 * @FilePath: \react-app\src\components\ListGroup.tsx
 */
function ListGroup() {
  const items = ['纽约', '旧金山', '东京', '伦敦', '巴黎', '北京']

  return (
    <Fragment>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default ListGroup
