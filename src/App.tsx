/*
 * @LastEditors: fuhaijing fuhaijing@gotion.com.cn
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-05-01 11:08:33
 * @FilePath: \react-app\src\App.tsx
 */
import Message from './components/Message';
import User from './components/User'

function App() {

  let isLoggedIn = true;

  return <div>
  {isLoggedIn && <User />}
</div>
}

export default App
