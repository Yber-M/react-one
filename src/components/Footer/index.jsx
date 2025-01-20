import './footer.css'

const Footer = () => {
    return (
        <footer
            className="footer"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/footer.png)` }}
        >
            <div className="redes">
                <a href="https://github.com/Yber-M" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/img/github.svg`} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/marlon-yber/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/img/linkedn.svg`} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/yber.m/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/img/instagram.svg`} alt="instagram" />
                </a>
                <a href="https://linktr.ee/yber.m" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/img/linktree.svg`} alt="linktree" />
                </a>
            </div>
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="org" />
            <strong>Desarollado por Yb-M</strong>
        </footer>
    );
};


export default Footer;