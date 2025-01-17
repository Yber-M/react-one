import { useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Lista de Equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundar: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundar: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundar: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundar: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundar: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>)
      }

    </div>
  );
}

export default App;
