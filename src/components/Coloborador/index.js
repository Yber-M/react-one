import './colaborador.css';
import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'


const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;

    return <div className='coloborador'>
        <IoIosCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)}></IoIosCloseCircle>
        <div className='encabezado' style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>

        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <IoIosHeart className='icono' color='red' onClick={() => like(id)} /> : <IoIosHeartEmpty className='icono' onClick={() => like(id)} />}

        </div>
    </div>
}

export default Colaborador; 