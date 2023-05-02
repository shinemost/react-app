/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-02 21:58:15
 * @LastEditTime: 2023-05-02 22:00:40
 * @FilePath: \react-app\src\components\Article.tsx
 */

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
  ],
}

const Article = () => {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <>
          {index > 0 && <hr />}
          <p key={index}>{line}</p>
        </>
      ))}
    </article>
  )
}

export default Article
