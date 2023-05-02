import "./listaOpciones.css"


const ListaOpciones = (props)=>{

    //para usar arreglos en React no se usa forEach, si no el método MAP:  arreglo.map((equipo, index/posición)=> {
    // return <option>valor de equipos en index 0, 1, 2,3 etc.</option>
    //})

    //solo se puede hacer .map de un arreglo no de strings ni numeros ni funciones.
/* Esta estructura de funncion genera el mismo resultado que la estoy usando en el codigo principal, se quitan las llaves amarillas y el return
<select>
        {equipos.map((equipo, index)=> <option key={index}>{equipo}</option>)}
</select> */
    /*
    AHORA ESTA LISTA DE EQUIPOS LA TRAEMOS CON PROPS DESDE EQUIPO/INDEX.JS
    const equipos =[
        "Programación",
        "FrontEnd",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]*/

    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value)
    }

    return<div className="lista-opciones">
    <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecciona una opción</option>
        {props.equipos.map((equipo, index)=>{
            return <option key={index} value={equipo}>{equipo}</option> //siempre que se genere un elemento con función map se debe agregar la prop key al elemento generado como identificador unico
        })}

        </select>



</div>
}




/* Esta sería la forma básica de hacerlo, colocando nosotros manualmente los nombres de las opciones, pero en este documento lo haremos con una funcion map para tomar los valores desde un array y que la función cree los nombres.
    return<div className="lista-opciones">
        <label>Equipos</label>
        <select>
            <option>Programación</option>
            <option>FrontEnd</option>
            <option>Data Science</option>
            <option>DevOps</option>
            <option>UX y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option>
        </select>
    </div>


}

 */

export default ListaOpciones