import { useState } from 'react';
import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Button';

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');

    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault();

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEnvio = (evento) => {
        evento.preventDefault()
        crearEquipo({ titulo, colorPrimario: color });
    }


    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                titulo='Nombre'
                placeholder='Ingresar nombre'
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo='Puesto'
                placeholder='Ingresar su puesto'
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto
                titulo='Foto'
                placeholder='Ingresar enlace de la foto'
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto='Crear' />
        </form>
        <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto
                titulo='Titulo'
                placeholder='Ingresar titulo del equipo'
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto
                titulo='Color'
                placeholder='Ingresar el color en HEX'
                required
                valor={color}
                actualizarValor={actualizarColor}
            />
            <Boton texto='Registrar Equipo' />
        </form>
    </section>
}

export default Formulario;