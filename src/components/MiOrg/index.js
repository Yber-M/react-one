import { useState } from 'react';
import './miOrg.css'

const MiOrg = (props) => {
    return <section className="orgSection">
        <h3 className='title'>Mi organización</h3>
        <img src={`${process.env.PUBLIC_URL}/img/add.png`} alt="add" onClick={props.cambiarMostrar}/>
        
    </section>
}

export default MiOrg;