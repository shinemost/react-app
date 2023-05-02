/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-02 14:22:02
 * @LastEditTime: 2023-05-02 14:22:38
 * @FilePath: \react-app\src\components\RecipeList.tsx
 */
import { recipes } from '../data/data.js'

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
