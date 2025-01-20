import './colaborador.css';
import { IoIosCloseCircle } from 'react-icons/io'

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id} = props.datos;
    const { colorPrimario, eliminarColaborador } = props;

    return <div className='coloborador'>
        <IoIosCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)}></IoIosCloseCircle>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>

        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador; 