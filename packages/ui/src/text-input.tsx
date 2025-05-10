
interface InputInter{
  placeholder : string;
}



export function TextInput({placeholder}:InputInter){
  return(
    <div>
      <input placeholder={placeholder} style={{
        padding:10,
        margin:10,
        borderColor:"black",
        borderWidth:1
      }}>

          

      </input>
    </div>
  )
}