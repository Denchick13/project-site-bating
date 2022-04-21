import heart from '../images/icons8-heartbeat-64.png';
import '../header/Header.css';


export default function Header() {

    return (
        <header className='header'>

            <div
                className='logo'
            >
                <img src={heart} alt="heart" />
                <h1 className='logo__text'>Galaxy Of Love</h1>
                <img src={heart} alt="heart" />
            </div>
        
        </header>
    )
}