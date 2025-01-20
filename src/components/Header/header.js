import './header.css';

function Header() {
    return (
        <header className='header'>
            <img src={`${process.env.PUBLIC_URL}/img/header.png`} alt='org' />
        </header>
    );
}

export default Header;