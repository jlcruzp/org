
import "./campo.css"

const Campo= (props)=>{
    //destructuramos la propr type de los inputs para que si no se indica el type entonces será "text" por default, pero si se indica otro type entonces el input podrá serlo conforme se indique en el prop de cada llamado del componente campo texto
    const {type ="text" } =props

    const manejarCambio = (e)=>{
       props.actualizarValor(e.target.value)
    }

return(
    <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type= {type}
        />
    </div>
)
}

export default Campo