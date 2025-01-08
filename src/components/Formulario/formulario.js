import { useState } from 'react';
import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Button';

const Formulario = () => {

    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');


    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log('Hola', event);

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar);
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
            />
            <Boton texto='Crear' />
        </form>
    </section>
}

export default Formulario;