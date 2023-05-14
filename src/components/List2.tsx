/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-14 22:37:41
 * @LastEditTime: 2023-05-14 22:37:50
 * @FilePath: \react-app\src\components\List2.tsx
 */
import { useState } from 'react'

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
]

export default function List2() {
  const [artists, setArtists] = useState(initialArtists)

  return (
    <>
      <h1>振奋人心的雕塑家们：</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id))
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
