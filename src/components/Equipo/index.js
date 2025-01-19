import './equipo.css'
import Colaborador from '../Coloborador'

const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor} = props;

    const obj = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            < section className="equipo" style={obj} >
                <input
                    type='color'
                    className='input-color'
                    value={colorSecundario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, titulo);
                    }}
                >
                </input>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section >
        }
    </>
}

export default Equipo;