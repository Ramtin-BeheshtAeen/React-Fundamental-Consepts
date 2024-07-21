import { useState, React, useRef } from 'react'
import UseRef_InnerText from './components2_react_hook/1_1_useRef_InnerText';
import UseRef_InnerHTML from './components2_react_hook/1_2_useRef_InnerHTML';
import UseRef_InnerHTML_with_arrow_function from './components2_react_hook/1_3_useRef_InnerHTML_arrow_function';
import UseRef_Attribute from './components2_react_hook/2_useRef_Attribute';
import UseRef_InputElements from './components2_react_hook/3_useRef_InputElements';

function App2() {
  
  return (
    <div>
    <UseRef_InnerText/>
    <UseRef_InnerHTML/>
    <UseRef_InnerHTML_with_arrow_function/>
    <UseRef_Attribute/>
    <UseRef_InputElements/>
    </div>
  );

};

export default App2;
