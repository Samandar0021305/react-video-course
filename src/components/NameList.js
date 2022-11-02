import Person from "./Person"


function NameList(){
    const name= ['Bruce','Clark','Diana']
    return(
        <div>
           <Person name={name} />
        </div>
    )
}

export default NameList