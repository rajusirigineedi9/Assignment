import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Components/Button';
import './index.css';

import reportWebVitals from './reportWebVitals';

function App(){
  const [name, setName] = useState("Raj")
  return (
    <div className= "App">
      <Button buttonStyle="btn--second" buttonSize="btn--large" name={name}>Click Me</Button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
