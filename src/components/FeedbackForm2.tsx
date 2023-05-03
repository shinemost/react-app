/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-03 22:22:53
 * @LastEditTime: 2023-05-03 22:26:06
 * @FilePath: \react-app\src\components\FeedbackForm2.tsx
 */

export default function FeedbackForm2() {
  // const [name, setName] = useState('')

  function handleClick() {
    // setName(prompt('What is your name?'))
    const name = prompt('What is your name?')
    alert(`Hello, ${name}!`)
  }

  return <button onClick={handleClick}>Greet</button>
}
