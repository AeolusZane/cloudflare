import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://cloudflare.1393649219.workers.dev/')
      .then(r => r.json()).then(r => {
        setText(r.hello || 'Error');
        setData(r || {
          data: "data error",
          time: "time error"
        })
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {"CICD 测试"}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.time}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.data}
        </a>
        <p>
          {'Hello '+ text}
        </p>
      </header>
    </div>
  );
}

export default App;
