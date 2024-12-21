
//TO DO LIST
//form , table and some js to push data from the form to the table
// create an app component to render as our main component


import './App.css'

import Form from './component/Form'
import Table from './component/Table'
import { useState } from 'react'


function App(){
//all components have to return some JSX and that it


let handleNewSubmission = (data) =>{

  setFavLinks([...favLinks, data])
}



return (
  <div>
  <h1 className="testClass">Submit your favorite links !!!! </h1>


<Form onNewSubmit={handleNewSubmission}/>


<Table links={favLinks} />


  </div>
)



}

export default App



//Try by Erick Sanchez