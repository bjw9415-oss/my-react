import React from 'react';

function ThemedButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const style = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
    border: `1px solid ${theme === 'dark' ? '#FFF' : '#333'}`,
    padding: '10px 20px',
    cursor: 'pointer',
  };

  return (
    <button style={style} onClick={toggleTheme}>
      현재 테마: {theme} (클릭하여 변경)
    </button>
  );
}

function Toolbar() {
  return (
    <div className="rounded-lg border p-4 flex flex-row items-center gap-6">
      <ul className="mb-4 list-disc pl-5">
        <li>장바구니</li>
        <li>내 정보</li>
      </ul>
      <ThemedButton />
    </div>
  );
}

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ContextPage() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#000',
          color: theme === 'light' ? '#000' : '#fff',
          padding: '20px',
        }}
      >
        <h1 className="mb-4 text-3xl font-bold">useContext 예제</h1>
        <Toolbar />
        <div className="mt-6">
          <h2 className="mt-8 mb-2 text-2xl font-semibold">설명</h2>
          <div>
            이 예제는 React의 <code>useContext</code> 훅을 사용하여 테마 정보를 컴포넌트 트리 전체에
            전달하는 방법을 보여줍니다.
            <code>ThemedButton</code> 컴포넌트는 현재 테마를 표시하고, 클릭 시 테마를 변경하는
            버튼을 렌더링합니다.
          </div>
        </div>
      </div>
    </ThemeContext>
  );
}