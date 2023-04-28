/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-04-28 23:28:26
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
      <Button classname="btn btn-primary">Primary</Button>
      <Button classname="btn btn-secondary">Secondary</Button>
      <Button classname="btn btn-success">Success</Button>
      <Button classname="btn btn-danger">Danger</Button>
      <Button classname="btn btn-warning">Warning</Button>
      <Button classname="btn btn-info">Info</Button>
      <Button classname="btn btn-light">Light</Button>
      <Button classname="btn btn-dark">Dark</Button>
      <Button classname="btn btn-link">Link</Button>
    </div>
  )
}

export default App
