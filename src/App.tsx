import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyName } from './MyName';


function App() {
  const [count, setCount] = useState(0);
  // state 값은 state 함수를 통해서만 변경해야 한다. 
  // setState 함수 호출시 해당 컴포넌트가 재렌더링 된다. 
  const [name, setName] = useState('홍길동');
  // const handleName = () => {
  //   if (name === '홍길동') {
  //   setName('임꺽정');
  // } else {
  //   setName('홍길동');
  // }
  // };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
  }
  return (
    <><h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> 
      <p>{name}</p>
      {/* <button onClick={handleName}>이름 변경 </button> */}
      <input className='border p-1.5' type='text' onChange={handleNameChange}/>
      <MyName name ={name} id="aaaa" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
