/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-04-28 23:46:00
 * @FilePath: \react-app\src\App.tsx
 */
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Alert>
        泰裤 <h1>辣</h1>
      </Alert>
      <Button onclick={() => console.log('clicked')}>Primary</Button>
    </div>
  )
}

export default App
