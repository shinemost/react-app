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

  - 也可以通过props进行父子组件的数据传递

    ```jsx
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
    };
    export default function ({ name, part, content, age }: any) {
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
    }
    
    ```

  - 也可以封装成对象

    ```jsx
    const drinks = {
      tea: {
        part: 'leaf',
        caffeine: '15–70 mg/cup',
        age: '4,000+ years',
      },
      coffee: {
        part: 'bean',
        caffeine: '80–185 mg/cup',
        age: '1,000+ years',
      },
    };
    export default function ({ name }) {
      const info = drinks[name]
      return (
        <section>
          <h1>{name}</h1>
          <dl>
            <dt>Part of plant</dt>
            <dd>{info.part}</dd>
            <dt>Caffeine content</dt>
            <dd>{info.content}</dd>
            <dt>Age</dt>
            <dd>{info.age}</dd>
          </dl>
        </section>
      )
    }
    ```

- 因为箭头函数会隐式地返回位于 `=>` 之后的表达式，所以你可以省略 `return` 语句。

  ```jsx
  const listItems = chemists.map(person =>
    <li>...</li> // 隐式地返回！
  );
  ```

  不过，**如果你的 `=>` 后面跟了一对花括号 `{` ，那你必须使用 `return` 来指定返回值！**

  ```jsx
  const listItems = chemists.map(person => { // 花括号
    return <li>...</li>;
  });
  ```

  箭头函数 `=> {` 后面的部分被称为 [“块函数体”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body)，块函数体支持多行代码的写法，但要用 `return` 语句才能指定返回值。假如你忘了写 `return`，那这个函数什么都不会返回！

- 全部属性传递 {...xxx}

- 两层嵌套map重构，将外层map提出，里层map封装成组件

  ```jsx
  export default function RecipeList() {
    return (
      <div>
        <h1>菜谱</h1>
        {recipes.map((recipe) => (
          <Recipe {...recipe} key={recipe.id} />
        ))}
      </div>
    );
      
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
  
  export default Recipe;
  ```

- 条件语句

  ```jsx
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
  ```

- react严格模式，在渲染时会对组件函数调用两次，检测返回结果，如果是不同的化则会报错提示,开启是用React.strictMode标签包围根组件，保证组件函数都是纯函数

  ```jsx
   <React.StrictMode>
      <App />
    </React.StrictMode>
  ```

- 数组的方法区别：

  `push`、`pop`、`reverse` 和 `sort` 会改变原始数组，但 `slice`、`filter` 和 `map` 则会创建一个新数组。

- 在React中所有事件都会传播，除了onScroll,它仅适用于你附件到的JSX标签

  ```jsx
  const Toolbar = () => {
    return (
      <div className="Toolbar" onClick={() => alert('你点击了toolbar')}>
        <Button onclick={() => alert('正在播放！')}>播放电影</Button>
        <Button onclick={() => alert('正在上传！')}>上传图片</Button>
      </div>
    )
  }
  
  export default Toolbar
  ```

  - 可通过调用事件event的stopPropagation方法阻止事件传播

    ```jsx
    const Button = ({ color, children, onclick }: Props) => {
      return (
        <button
          className={'btn btn-' + color}
          onClick={(e) => {
            e.stopPropagation()
            onclick()
          }}
        >
          {children}
        </button>
      )
    }
    ```

  - 极少数情况下，你可能需要捕获子元素上的所有事件，**即便它们阻止了传播**。例如，你可能想对每次点击进行埋点记录，传播逻辑暂且不论。那么你可以通过在事件名称末尾添加 `Capture` 来实现这一点：

    ```jsx
    
    const Toolbar = () => {
      return (
        <div className="Toolbar" onClickCapture={() => alert('你点击了下面的按钮')}>
          <Button onclick={() => alert('正在播放！')}>播放电影</Button>
          <Button onclick={() => alert('正在上传！')}>上传图片</Button>
        </div>
      )
    }
    
    ```

    每个事件分三个阶段传播：

    1. 它向下传播，调用所有的 `onClickCapture` 处理函数。
    2. 它执行被点击元素的 `onClick` 处理函数。
    3. 它向上传播，调用所有的 `onClick` 处理函数。

    捕获事件对于路由或数据分析之类的代码很有用，但你可能不会在应用程序代码中使用它们。

