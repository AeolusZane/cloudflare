import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState({});
  const [noCache, setNoCache] = useState('');
  useEffect(() => {
    fetch('https://cloudflare.1393649219.workers.dev/')
      .then(r => r.json()).then(r => {
        setText(r.hello || 'Error');
        setData(r || {
          data: "data error",
          time: "time error"
        })
      });
    fetch('https://cloudflare.1393649219.workers.dev/nocache')
      .then(r => r.json()).then(r => {
        setNoCache(r.time);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {"CICD 测试"}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {'缓存3分钟，没网时错误：'+data.time}
        </p>
        <div>
          {'无缓存时间(连网时刷新会一直更新，不连网时用缓存)'}
        </div>
        <div>
          {noCache}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.data}
        </a>
        <p>
          {'Hello ' + text}
        </p>
      </header>
    </div>
  );
}

export default App;
