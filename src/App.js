import React, {useEffect} from 'react';
import './calculator2.css';
import ReactDOM from 'react-dom'
import Calculator2 from "./Calculator2"
//import './calculator.js';
//import ScriptTag from 'react-script-tag';

//const Demo = props => (
  //<ScriptTag type="text/javascript" src="./calculator.js" />
//)

function App() {

  //useEffect(() => {
  //  const script = document.createElement('script');
  //
  //  script.src = "./calculator.js";
  //  script.async = true;
  //
  //  document.body.appendChild(script);
  //
  //  return () => {
  //    document.body.removeChild(script);
  //  }
  //}, []);

  return (
    <>
      <div className="calculatorApp">
            <section className="screen" id="screen">
            0
            </section>
            <section className="calc-buttons">
            <div className="backspace-buttons button-row">
                <button className="clear-all calc-button">C</button>
                <button className="calc-button">Del</button>
                <button className="calc-button">/</button>
            </div>
            <div className="button-row">
                <button className="calc-button">7</button>
                <button className="calc-button">8</button>
                <button className="calc-button">9</button>
                <button className="calc-button">X</button>
            </div>
            <div className="button-row">
                <button className="calc-button">4</button>
                <button className="calc-button">5</button>
                <button className="calc-button">6</button>
                <button className="calc-button">-</button>
            </div>
            <div className="button-row">
                <button className="calc-button">1</button>
                <button className="calc-button">2</button>
                <button className="calc-button">3</button>
                <button className="calc-button">+</button>
            </div>
            <div className="button-row">
                <button className="zero calc-button">0</button>
                <button className="calc-button">.</button>
                <button className="calc-button">=</button>
            </div>
            </section>
      </div>
    </>
  );
}


export default App;
