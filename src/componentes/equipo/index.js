import Colaborador from "../colaborador"
import "./equipo.css"
import hexToRgba from "hex-to-rgba";



const Equipo=(props)=>{
    const {colorPrimario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj={
        backgroundColor: hexToRgba(colorPrimario, 0.6 )
    }



    return <>
    { colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
        <input  
        type="color"
        className="input-color"
        value={colorPrimario}
        onChange={(evento)=>{
            actualizarColor(evento.target.value,id)
        }}
        
        />     
        
        
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, id) => <Colaborador 
                datos ={colaborador} 
                key={id} 
                colorPrimario = {colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />
                )          
            
            
            }
                      
        </div>
    </section>
        }
        </>
}


export default Equipo