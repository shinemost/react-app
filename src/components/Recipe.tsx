/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-02 14:26:52
 * @LastEditTime: 2023-05-02 14:28:33
 * @FilePath: \react-app\src\components\Recipe.tsx
 */
const Recipe = ({ id, name, ingredients }) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipe
