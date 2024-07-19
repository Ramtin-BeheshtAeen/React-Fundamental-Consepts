import { useState, React } from 'react'


import JSX_Immediately_invoked_function from './components/JSX_Immediately_invoked_function';
import JSX_Loop from './components/JSX_Loop';
import JSX_Conditional_Rendering_Using_If_Else from './components/JSX_Conditional_Rendering_Using_If_Else';
import JSX_Conditional_Rendering_Using_switch from './components/JSX_Conditional_Rendering_Using_Switch_Statement';
import JSX_Conditional_Rendering_Using_Ternary_Operator from './components/JSX_Conditional_Rendering_Using_Ternary_Operator';
import JSX_Conditional_Rendering_Using_And_And_Operator from './components/JSX_Conditional_Rendering_Using_And_And_Operator';
import JSX_Passing_Properties_String_to_This_Child_Component from './components/JSX_Passing_Properties_String_to_This_Child_Component';
import JSX_Passing_Properties_Object_to_This_Child_Component from './components/JSX_Passing_Properties_Object_to_This_Child_Component';
import JSX_Passing_Properties_Function_to_This_Child_Component from './components/JSX_Passing_Properties_Function_to_This_Child_Component';
import ButtonComponent from './components/Managing_Click_Event';


function buttonOnClick(){
  alert("You have clicked the button")
}

function App() {

  const carObject = {
    brand: "Volvo",
    countryOfOrigin: "Sweden",
    productionDate: 1927
  }

  return (
    <div>
    <JSX_Immediately_invoked_function/>

    <JSX_Loop/>

    <JSX_Conditional_Rendering_Using_If_Else/>

    <JSX_Conditional_Rendering_Using_switch/>

    <JSX_Conditional_Rendering_Using_Ternary_Operator/>

    <JSX_Conditional_Rendering_Using_And_And_Operator/>

    <JSX_Passing_Properties_String_to_This_Child_Component 
    message='This is a String from parent component'/>

    <JSX_Passing_Properties_Object_to_This_Child_Component car={carObject}/>
    
    <JSX_Passing_Properties_Function_to_This_Child_Component func={buttonOnClick}/>

    <ButtonComponent/>
    </div>
  );
};

export default App;
