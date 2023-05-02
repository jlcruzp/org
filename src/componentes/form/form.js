import {useState} from "react"
import "./form.css"
import Campo from "../campo/campo.js"
import ListaOpciones from "../listaOpciones"
import Boton from "../botón"
import {v4 as uuid} from "uuid"





//Haremos la funcion usando arrow functions para ir viendo las diferencias y estilos.
/*poner required o poner required=true es el mismo si aparece aqui el prop lo toma como true a menos que diga false o no aparezca.*/
const Form =(props)=> {  //importante recordar que siempre los nombres de nuestras funciones en React deben llevar la primera letra mayuscula para diferenciarlos de las etiquetas html
 
 
 const [nombre, setNombre] = useState("")
 const [puesto, setPuesto] = useState("")
 const [foto, setFoto] = useState("")
 const [equipo, setEquipo] = useState("")
 const [titulo, actualizarTitulo] =useState("")
 const [color, actualizarColor] = useState("")
  
 const {crearEquipo} = props
 //FUNCION PARA EVITAR LA RECARGA DE LA PAGINA AL DAR CLICK AL BOTON
const manejarEnvio=(evento)=>{
   evento.preventDefault()
   let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
     }
     props.setColaborador(datosAEnviar)
   }
  
const manejarNuevoEquipo = (e) =>{
   e.preventDefault()
   let datosAEnviar = {
      id: uuid(),
      titulo: titulo,
      colorPrimario: color
      
   }

   crearEquipo(datosAEnviar)
}



 return <section className="formulario">
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
       <Campo 
       titulo="Nombre" 
       placeholder="Ingresar Nombre" 
       required={true} 
       valor={nombre}
       actualizarValor={setNombre}
       />
       <Campo 
       titulo="Puesto" 
       placeholder="Ingresar Puesto" 
       required={true} 
       valor={puesto}
       actualizarValor={setPuesto}
       />
       <Campo 
       titulo="Foto" 
       placeholder="Ingresar Url de foto" 
       required 
       valor={foto}
       actualizarValor={setFoto}
       /> 
      <ListaOpciones
      valor={equipo}
      actualizarValor={setEquipo}
      equipos = {props.equipos}
      />
      <Boton texto="Crear"/>
    </form>

    <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
       <Campo 
       titulo="titulo" 
       placeholder="Ingresar titulo" 
       required={true} 
       valor={titulo}
       actualizarValor={actualizarTitulo}
       />
       <Campo 
       type="color"
       titulo="Color" 
       placeholder="Ingresar color en Hexadecimal" 
       required={true} 
       valor={color}
       actualizarValor={actualizarColor}
       />
       <Boton texto= "Registrar equipo"/>
       </form>
 </section>

}

export default Form