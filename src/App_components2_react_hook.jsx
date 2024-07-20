import { useState, React, useRef } from 'react'
import UseRef_InnerText from './components2_react_hook/1_useRef_InnerText';
import UseRef_InnerHTML from './components2_react_hook/1_2_useRef_InnerHTML';
import UseRef_InnerHTML_with_arrow_function from './components2_react_hook/1_3_useRef_InnerHTML_arrow_function';

function App2() {
  
  return (
    <div>
    <UseRef_InnerText/>
    <UseRef_InnerHTML/>
    <UseRef_InnerHTML_with_arrow_function/>
    </div>
  );

};

export default App2;
