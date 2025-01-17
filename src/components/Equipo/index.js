import './equipo.css'

const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundar } = props.datos

    const obj = {
        backgroundColor: colorSecundar
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo;