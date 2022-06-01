import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App2 } from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));


var myname={
  //1. P:V
  name:"Anil",
  'surname':'Dollor',
  "addr":`Neemuch`
  //2. Method
}; // JS OBject

root.render(
  <React.StrictMode>
    <App2 name={myname} />
  </React.StrictMode>
);
