
const Card = ({nombre, tipo}) => {

  return (
    
    <div style={{ border: "1px solid black", padding: "16px" }}>
    <h4>La mascota {nombre} de tipo {tipo} ha sido registrada!</h4> 
   </div>
  )
}

export default Card