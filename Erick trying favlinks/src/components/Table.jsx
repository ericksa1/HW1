function Table(props){


    //To do
    //this is the custom TABLE component
 let rows = props.links.map((data) =>{
return(
    <tr>
        <td>{data.name}</td>
        <td>{data.URL}</td>
    </tr>
)
 })
    return(

        <table>
            <thead>
               <tr>
                <th>Link Name</th>
                <th>Link URL</th>
                </tr>
        </thead>

        <tbody>
              {rows}
        </tbody>
        
           
        </table>
    )
}

export default Table