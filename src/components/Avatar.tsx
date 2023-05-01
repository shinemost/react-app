/*
 * @Author: fuhaijing fuhaijing@gotion.com.cn
 * @Date: 2023-05-01 16:31:22
 * @LastEditors: fuhaijing fuhaijing@gotion.com.cn
 * @LastEditTime: 2023-05-01 16:36:03
 * @FilePath: \react-app\src\components\Avatar.tsx
 */
import { getImageUrl } from './utils'

export default function Avatar({ person, size }: any) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
