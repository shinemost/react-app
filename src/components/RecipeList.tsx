/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-02 14:22:02
 * @LastEditTime: 2023-05-02 14:29:47
 * @FilePath: \react-app\src\components\RecipeList.tsx
 */
import { recipes } from '../data/data.js'
import Recipe from './Recipe.js'

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  )
}
