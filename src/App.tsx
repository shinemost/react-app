/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-05-08 21:02:55
 * @FilePath: \react-app\src\App.tsx
 */
/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-05-03 11:55:12
 * @FilePath: \react-app\src\App.tsx
 */
import MovingDot from './components/MovingDot.js'

function increment(n) {
  return n + 1
}
increment.toString = () => 'n => n+1'

function App() {
  return (
    <div>
      <MovingDot />
    </div>
  )
}

export default App
