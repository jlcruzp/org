import {useState} from "react"
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/header/header';
import Form from './componentes/form/form'
import MiOrg from './componentes/miOrg';
import Equipo from "./componentes/equipo";
import Footer from "./componentes/footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] =useState(false) //Lo inicializamos en false para que de inicio al cargar la pagina no se muestre.
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Juan",
      puesto: "Gerente de Ops",
      foto: "https://github.com/jlcruzp.png",
      equipo: "Programación",
      fav: true
    }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },

    {
      id: uuid(),
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  
    
]
)  
    
  
  //ternario --> condicion ? seMuestra : noSeMuestra
//FORMA ALTERNATIVA AL TERNARIO SERÍA {mostrarFormulario && <Formulario/>} al poner solo mostrar formulario obtiene su valor y verifica si es tru entonces se muestra el componente de lo contrario se oculta
    const switchFormulario =()=>{
      actualizarMostrar(!mostrarFormulario)
    }

    //FUNCION PARA REGISTRAR COLABORADOR

    const registrarColaborador = (colaborador)=>{
      console.log("nuevo colaborador", colaborador)
      //Spread operator copia los valores actuales de colaboradores y después le agrega colaborador y se usa así con los 3 puntos, la variabla a copiar los datos y luego coma y la variable que contienee los datos a agregar
      actualizarColaboradores([...colaboradores, colaborador])
    }


    //Eliminar colaborador

    const eliminarColaborador = (id) =>{

      console.log("eliminar colaborador", id)
      const nuevosColaboradores = colaboradores.filter((colaborador)=> {
        return colaborador.id !== id
      } )

      actualizarColaboradores(nuevosColaboradores)

    }

    //Actualizar color de equipo

    const actualizarColor=(color, id)=>{

      console.log("actualizar: ", color, id)
      const equiposActualizados = equipos.map((equipo)=>{
        if(equipo.id===id){
          equipo.colorPrimario=color
        }
        return equipo
      })
      actualizarEquipos(equiposActualizados)
    }
//FUNCION PARA CREAR EQUIPO DESDE EL FORMULARIO

const crearEquipo = (nuevoEquipo)=>{
console.log(nuevoEquipo)
actualizarEquipos([...equipos, nuevoEquipo])
}

const like = (id)=>{
console.log("like", id)
 colaboradores.map((colaborador)=>{
  if(colaborador.id === id){
    colaborador.fav =  !colaborador.fav
   
  }
  console.log(colaborador)
  return colaborador
  

})



}

  return (
    <div >
      <Header />
      {mostrarFormulario === true ? <Form equipos= {equipos.map((equipo)=> equipo.titulo)}
      setColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <div></div>
      }

      <MiOrg cambiarMostrar= {switchFormulario}/>
      
      {
        equipos.map((equipo)=>{

          return <Equipo datos= {equipo} 
          key={equipo.id} 
          colaboradores={colaboradores.filter(colaborador =>colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        })
      }

      <Footer />
    </div>
  );
}

export default App;
