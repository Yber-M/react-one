import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState(() => {
    const datosGuardados = localStorage.getItem('colaboradores');
    return datosGuardados ? JSON.parse(datosGuardados) : [{
      equipo: "Programación",
      foto: "https://avatars.githubusercontent.com/u/93751686?v=4",
      nombre: "Marlon Yber",
      puesto: "Ingeniero de Sistemas",
    }];
  });

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registra Colaborador
  const registrarColaborador = (colaborador) => {
    const nuevoColaboradores = [...colaboradores, colaborador]
    actualizarColaboradores(nuevoColaboradores)
  }

  useEffect(() => {
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores))
  }, [colaboradores])
  
  // Lista de Equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#02FF52FF",
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
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#ffecbb"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffe0c4"
    }
  ]

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
      />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />)
      }

      <Footer></Footer>

    </div>
  );
}

export default App;
