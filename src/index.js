import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Register A service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // 注销
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((sw) => {
          sw.unregister();
          console.log("service worker:", sw);
          console.log('注销成功')
        });
      });
    }
    // 注册
    // navigator.serviceWorker.register(`./build.sw.js`).then(
    //   function (registration) {
    //     // Registration was successful
    //     console.log("[success] register ");
    //   },
    //   function (err) {
    //     // registration failed :(
    //     console.log("[fail]: ", err);
    //   }
    // );
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
