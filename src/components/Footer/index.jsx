import './footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className='redes'>
            <a href="https://github.com/Yber-M" target='_blank'>
                <img src="/img/github.svg" alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/marlon-yber/" target='_blank'>
                <img src="/img/linkedn.svg" alt="linkedin"/>
            </a>
            <a href="https://www.instagram.com/yber.m/" target='_blank'>
                <img src="/img/instagram.svg" alt="instagram"/>
            </a>
            <a href="https://linktr.ee/yber.m" target='_blank'>
                <img src="/img/linktree.svg" alt="linktree"/>
            </a>
        </div>
        <img src="/img/logo.png" alt="org" />
        <strong>Desarollado por Yb-M</strong>
    </footer>
}

export default Footer;