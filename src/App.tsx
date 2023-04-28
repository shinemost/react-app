/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-04-29 01:07:55
 * @FilePath: \react-app\src\App.tsx
 */
import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      {visible && <Alert onClose={() => setVisible(false)}> 泰裤辣</Alert>}
      <Button color="danger" onclick={() => setVisible(true)}>
        My Button
      </Button>
    </div>
  )
}

export default App
