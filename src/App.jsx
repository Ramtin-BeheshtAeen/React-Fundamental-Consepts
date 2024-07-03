import { useState, React } from 'react'
import JSX_Immediately_invoked_function from './components/JSX_Immediately_invoked_function';
import JSX_Loop from './components/JSX_Loop';
import JSX_Conditional_Rendering_Using_If_Else from './components/JSX_Conditional_Rendering_Using_If_Else';

function App() {
  return (
    <div>
    <JSX_Immediately_invoked_function/>
    <JSX_Loop/>
    <JSX_Conditional_Rendering_Using_If_Else/>
    </div>
  );
};

export default App;
