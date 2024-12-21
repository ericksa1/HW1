
import{useState} from "react"

function Form(props)
{

     //To do
    //this is the custom form component


//    function handleSubmit(event){
 //      event.preventDefault()
  //      alert("SUbmitted!!")
  //  }

  const [name , setName] = useState("")
const [URL, setURL] = useState("")


  let handleSubmit = (event) =>{
    event.preventDefault()
    //alert('submitted from arrow fucntion!')

    if(name === "" || URL ===""){
        alert('Name and URL are required')

    }else{
        console.log(name, URL)
        props.onNewSubmit({name, URL})
        setName("")//fixed
        setURL("")//fixed

    }
    
}


let handleNameChange = (event) =>{
    //console.log(event.target.value)
    setName(event.target.value)
}
    
let handleURLChange = (event) =>{

setURL(event.target.value)

}

return(
<form onSubmit={handleSubmit}>
    <label for="linkName">Link Name</label>
    <input type="text" name="linkName" onChange={handleNameChange} value={name}/>
    <br/>

    <label for="linkURL">Link URL</label>
    <input type="text" name="linkURL" onChange={handleURLChange} value={URL}/>

    <br/> 
    <br/>


    <input type="submit" disabled = {name === "" || URL===""}/>


</form>
)




}
export default Form


//trying by Erick Sanchez