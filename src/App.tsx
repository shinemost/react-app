/*
 * @LastEditors: fuhaijing fuhaijing@gotion.com.cn
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-05-01 14:28:11
 * @FilePath: \react-app\src\App.tsx
 */
import Avatar from './components/Avatar'

function Card({ children }: any) {
  return <div className="card">{children}</div>
}

function App() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
    </Card>
  )
}

export default App
