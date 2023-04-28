/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-04-28 23:03:46
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
      <Button classname="btn btn-primary" text="Primary" />
      <Button classname="btn btn-secondary" text="Secondary" />
      <Button classname="btn btn-success" text="Success" />
      <Button classname="btn btn-danger" text="Danger" />
      <Button classname="btn btn-warning" text="Warning" />
      <Button classname="btn btn-info" text="Info" />
      <Button classname="btn btn-light" text="Light" />
      <Button classname="btn btn-dark" text="Dark" />
      <Button classname="btn btn-link" text="Link" />
    </div>
  )
}

export default App
