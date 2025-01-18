import './listaOpciones.css';

const ListaOpciones = (props) => {

    const manejoCambio = (e) => {
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejoCambio}>
            <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
            {props.equipos.map((equipos, index) => <option key={index} value={equipos}>{equipos}</option>)}
        </select>
    </div>
}

export default ListaOpciones