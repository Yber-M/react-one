import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Button';

const Formulario = () => {
    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log('Hola', event);
    }
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo='Nombre' placeholder='Ingresar nombre' required={true}/>
            <CampoTexto titulo='Puesto' placeholder='Ingresar su puesto'/>
            <CampoTexto titulo='Foto' placeholder='Ingresar enlace de la foto'/>
            <ListaOpciones/>
            <Boton texto='Crear'/>
        </form>
    </section>
}

export default Formulario;