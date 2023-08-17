import { useState } from "react"
import Card from "../Card/Card"
import "./Form.css"

const Form = () => {

    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] =useState(false)


    const handleSubmit = (event) =>{
        event.preventDefault()
        if(nombre.length > 3 && tipo.length >= 3){
            setShow (true)
            setError(false)
        }else{
            setShow(false)
            setError(true)
        }
    }

    
    const handleChange= (event) => setNombre(event.target.value)



    return (

    <form className="form-container" onSubmit={handleSubmit} >

        <label>Nombre de la Mascota </label>
        <input type="text" placeholder="Lenny" onChange={handleChange}/>
        <label>Tipo </label>
        <input type="text" placeholder="Perro" onChange={(event) => setTipo(event.target.value)}/>
        <button>Registrar</button>


        {error && <h6>Por favor chequea que la información sea correcta</h6>}

        {show && (
          <Card nombre={nombre} tipo={tipo} />)}


    </form>
    
    )

}

export default Form