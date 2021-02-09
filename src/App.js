import React, {Component,useState} from 'react';

function App()
{

  const[my_name,ChangeMyName]=useState("Aditya");
  const[my_age,ChangeMyAge]=useState(22);


const ButtonClicked =() =>
{
  ChangeMyName("Martin Morris"); 
  ChangeMyAge(26); 
}

return(
  <div>
     <h1>Welcome my name : {my_name} </h1>
     <h1>And my age : {my_age} </h1>
     <button onClick={ButtonClicked}> Change Name and Age </button>

     </div>

);

}



export default App;