import { Link } from 'react-router-dom';
import '../navigation/Navigation.css';

export default function Navigation() {

    return (

        <nav className='navigation'>
            <ul className='navigation_list'>
                <li><Link className='link link__img_main' to="/horoscope">Гороскоп</Link></li>
                <li><Link className='link link__img_relation' to="/relation">Об отношениях</Link></li>
                <li><Link className='link link__entrance' to="/entrance">Вход</Link></li>
                <li><Link className='link link__registration' to="/registration">Регистрация</Link></li>
            </ul>

            {/* <Link
                style={{
                    fontSize: '24px',
                    color: 'white'
                }}
                to='/searching'
            >
                Click Me
            </Link> */}

        </nav>

    )
}
