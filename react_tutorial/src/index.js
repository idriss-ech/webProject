import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './headerComponent/header';
import Footer from './footerComponent/footer';
import Body from './bodyComponent/body';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body logo='StoriStore'></Body>
    <Footer logo='StoriStore'></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
