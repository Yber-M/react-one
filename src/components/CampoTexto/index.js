import './campoTexto.css'

const CampoTexto = (props) => {
    return <div className='campo-texto'>
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder + '...'} /> <br></br>
        {/* <label>Puesto</label>
        <input type="text" id="puesto" name="puesto" placeholder="Ingresar su puesto"/> */}
        {/* <label>Foto</label>
        <input type="text" id="foto" name="foto" placeholder="Ingresar enlace de foto"/>
        <label>Equipo</label>
        <input type="text" id="equipo" name="equipo" placeholder="Seleccionar equipo"/>
        <button type="button" id="vistaPreviaBtn">Cargar Vista Previa</button> */}
    </div>
}

export default CampoTexto;