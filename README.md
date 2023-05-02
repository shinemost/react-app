## 学习react的课程

### 一.前置准备
- 安装nodejs

  - windows平台推荐通过scoop安装
    - scoop install nodejs

- 安装vite

  - npm create vite@4.1.0

    按照提示输入项目名称，react，ts创建项目

- 初始化项目安装相关类库

  ```react
  npm -i
  ```

- 使用vscode打开项目

  ```shell
  code .
  ```

- 安装ES7插件快捷生成react箭头函数并暴露

  - 插件
  - 快速生成箭头函数组件：rafce

- 浏览器使用React Developer Tools插件，查看浏览器中的react组件及性能，也可以在浏览器中查看源代码

- 字段后+？表示该字段是可选的

  ```jsx
  interface Props {
    color?: string
    children: string
    onclick: () => void
  }
  ```

- 修改字段的类型为特定字符串来限定字段的值范围：

  ```jsx
  interface Props {
    color?: 'primary' | 'secondary' | 'danger'
    children: string
    onclick: () => void
  }
  ```

- 使用 export default funciton xx语法 默认导出 **一个文件里有且仅有一个 默认 导出，但是可以有任意多个 具名导出。**

  ```jsx
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
     );
  }
  ```

- 条件判断语句没有特殊的语法，使用js的if else if else ，也可以使用三木运算符 , 不需要else语句时可以使用逻辑与&&

  ```jsx
  function App() {
    let content;
    let num = 3;
      
    if (num === 1) {
      content = <Message/>
    } else if(num === 2) {
       content = <User/>
    } else {
      content = <div><Message/><Message/></div>
    }
    return <div>{content}</div>
  };
  
  
  function App() {
    let isLoggedIn = true;
  
    return <div>
      {isLoggedIn ?<Message/>:<User/>}
    </div>
  }
  
  function App() {
    let isLoggedIn = true;
  
    return <div>
      {isLoggedIn && <Message />}
    </div>
  }
  ```

- 使用for 或 数组的map进行遍历

  ```jsx
  export default function ShoopingList() {
    const items = produceList.map((product) => (
      <li key={product.id} style={{ color: product.isFruit ? 'red' : 'gray' }}>
        {product.title}
      </li>
    ))
  
    let items2 = []
    
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
  ```

- 组件件共享数据，需要子组件同步更新 ，可通过将useState钩子上提至父组件中，然后将变量传入子组件实现 **状态提升**

  ```jsx
  
  function App() {
    const [count, setCount] = useState(0)
  
    function handleClick() {
      setCount(count + 1)
    }
  
    return (
      <div>
        <Mybutton count={count} onClick={handleClick} />
        <Mybutton count={count} onClick={handleClick} />
      </div>
    )
  }
  
  export default App;
  
  import { useState } from 'react'
  
  const Mybutton = ({ onClick, count }: any) => {
    return <button onClick={onClick}>Clicked {count} times</button>
  }
  export default Mybutton
  
  ```

- 将 JSX 作为子组件传递 

  ```jsx
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
  };
  
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
  };
  
  export function getImageUrl(person: any, size = 's') {
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg'
  }
  ```

- 使用if 和变量对多条件组件重构：

  ```jsx
  export default function ({ name }: any) {
    let part, content, age
  
    if (name === 'tea') {
      part = 'leaf'
      content = '15–70 mg/cup'
      age = '4,000+ years'
    } else if (name === 'coffee') {
      part = 'bean'
      content = '80–185 mg/cup'
      age = '1,000+ years'
    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{content}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    )
  };
  
  function App() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    )
  };
  
  ```

  
