import { Link } from 'react-router-dom';
import '../navigation/Navigation.css';
import door from '../images/icons8-door-open.png';

export default function Navigation(props) {

    const { change, clickexit } = props;
    // console.log(change)
    const current = JSON.parse(localStorage.getItem('current'));

    return (

        <nav className='navigation'>
            <ul className='navigation_list'>
                <li><Link className='link link__img_main' to="/horoscope">Гороскоп</Link></li>
                <li><Link className='link link__img_relation' to="/relation">Об отношениях</Link></li>
                <li style={{ marginLeft: change === true ? "114px" : "0" }}>
                    {change === true ?
                        <Link
                            className='link link__entrance'
                            to={`/profile/${current.id}`}
                        >
                            Мой профиль
                        </Link>
                        : <Link
                            className='link link__entrance'
                            to="/entrance"
                        >
                            Вход
                        </Link>
                    }
                    <div
                        style={{
                            display: change === true ? "block" : "none"
                        }}
                        onClick={clickexit}
                        className='cont__img'
                        data-title="Выход"
                    >
                        <img
                            className='navigation__img'
                            src={door}
                            alt="door"
                        />
                    </div>
                </li>
                <li>
                    <Link
                        className='link link__registration'
                        to="/registration"
                        style={{
                            display: change === true ? "none" : "block"
                        }}
                    >
                        Регистрация
                    </Link>
                </li>
            </ul>
        </nav>

    )
}
