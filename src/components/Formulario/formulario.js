import { useState } from 'react';
import './formulario.css'
import Campo from '../Campo';
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
            <Campo
                titulo='Nombre'
                placeholder='Ingresar nombre'
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo='Puesto'
                placeholder='Ingresar su puesto'
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
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
            <Campo
                titulo='Titulo'
                placeholder='Ingresar titulo del equipo'
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo='Color'
                placeholder='Ingresar el color en HEX'
                required
                valor={color}
                actualizarValor={actualizarColor}
                type='color'
            />
            <Boton texto='Registrar Equipo' />
        </form>
    </section>
}

export default Formulario;