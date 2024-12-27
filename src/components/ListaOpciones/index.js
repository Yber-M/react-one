import './listaOpciones.css';

const ListaOpciones = () => {
    
    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista__opciones">
        <label>Equipos</label>
        <select>
            { equipos.map((equipos, index) => <option key={index}>{equipos}</option> )}
        </select>
    </div>
}

export default ListaOpciones