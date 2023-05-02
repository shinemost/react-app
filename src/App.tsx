/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-04-26 20:47:45
 * @LastEditTime: 2023-05-02 10:36:15
 * @FilePath: \react-app\src\App.tsx
 */
import Drink from './components/Drink'

function App() {
  return (
    <div>
      <Drink name="tea" content="15–70 mg/cup" part="leaf" age="4,000+ years" />
      <Drink
        name="coffee"
        content="80–185 mg/cup"
        part="bean"
        age="1,000+ years"
      />
    </div>
  )
}

export default App
