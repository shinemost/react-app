const produceList = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]

export default function ShoopingList() {
  const items = produceList.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? 'red' : 'gray' }}>
      {product.title}
    </li>
  ))

  let items2

  for (let index = 0; index < produceList.length; index++) {
    items2.push(
      <li
        key={produceList[index].id}
        style={{ color: produceList[index].isFruit ? 'yellow' : 'blue' }}
      >
        {produceList[index].title}
      </li>
    )
  }

  return <ul>{items2}</ul>
}
