/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-04-27 23:16:25
 * @FilePath: \react-app\src\App.tsx
 */
import ListGroup from './components/ListGroup'

function App() {
  let items = ['纽约', '旧金山', '东京', '伦敦', '巴黎', '北京']
  return (
    <div>
      <ListGroup items={items} heading="城市" />
    </div>
  )
}

export default App
