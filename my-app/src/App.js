import React from 'react';
import { useTheme, ThemeProvider } from './ThemeContext';
import './index.css';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>React 다크모드 예제</h1>
      <p>현재 테마: {theme}</p>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
      </button>
    </div>
  );
};

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
