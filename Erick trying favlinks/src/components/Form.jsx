
import{useState} from "react"

function Form()
{

     //To do
    //this is the custom TABLE component


//    function handleSubmit(event){
 //      event.preventDefault()
  //      alert("SUbmitted!!")
  //  }

  const [name , setName] = useState("")



  let handleSubmit = (event) =>{
    event.preventDefault()
    alert('submitted from arrow fucntion!')
    console.log(name)
}


let handleNameChange = (event) =>{
    console.log(event.target.value)
    setName(event.target.value)
}
    


return(
<form onSubmit={handleSubmit}>
    <label for="linkName">Link Name</label>
    <input type="text" name="linkName" onChange={handleNameChange}/>
    <br/>

    <label for="linkURL">Link URL</label>
    <input type="text" name="linkURL"/>

    <br/>
    <br/>


    <input type="submit" />


</form>
)




}
export default Form


//trying by Erick Sanchez