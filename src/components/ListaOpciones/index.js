import './listaOpciones.css';

const ListaOpciones = (props) => {

    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejoCambio = (e) => {
        console.log('cambio', e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejoCambio}>
            <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
            {equipos.map((equipos, index) => <option key={index} value={equipos}>{equipos}</option>)}
        </select>
    </div>
}

export default ListaOpciones