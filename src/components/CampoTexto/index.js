import { useState } from 'react';
import './campoTexto.css'

const CampoTexto = (props) => {
    const [valor, actualizarValor] = useState("");

    const placeholderModificado = `${props.placeholder}...`;

    const manejoCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className='campo-texto'>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejoCambio}
        />
    </div>
}

export default CampoTexto;