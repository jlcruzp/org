
import "./miOrg.css"
//estructura para usar useState: const [nombreVariable, funcionqueActualizaelEstado] = useState("valorInicial")



/*
    const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick=()=>{
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)

    }
*/






const MiOrg=(props)=>{


    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/Boton-add.png" alt="boton-agregar" onClick={props.cambiarMostrar}/>


    </section>
}


export default MiOrg


