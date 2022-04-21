import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Image from './components/images/856.jpeg';
import RegistPage from './pages/RegistPage/RegistPage';
import EntrancePage from './pages/EntrancePage/EntrancePage';
import RelationPage from './pages/RelationPage/RelationPage';
import HoroscopePage from './pages/HoroscopePage/HoroscopePage';
import Searching from './pages/Searching/Searching';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import uuidv4 from './utils/uuid';


export function Users(props) {
    const { users } = props;

    return (
        <>
            {users.map((user, idx) => (
                <Link to={`/profile/${user.id.value}`} className='user-link' key={idx}>
                    <div className='searching__user' >
                        <img className='search__img' src={user.picture.large} alt="photo" />
                        <div className='search__info'>
                            <p style={{ marginBottom: '10px' }}>{user.name.first}, {user.dob.age},</p>
                            <p>{user.location.city}, {user.location.country}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
// localStorage.clear()

export default function App() {

    const [users, setUsers] = useState([]);
    const [view, setView] = useState([...users]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('current')));
    const [isActive, setIsActive] = useState(false);

    // console.log(users)
    // console.log(JSON.parse(localStorage.getItem('registred')), 'registred')
    // console.log(JSON.parse(localStorage.getItem('current')), 'current')

    const addRegistUsers = (valueUser) => {
        const registredUsers = JSON.parse(localStorage.getItem('registred')) ?? [];
        const user = { ...valueUser, id: Date.now() };

        localStorage.setItem('registred', JSON.stringify([...registredUsers, user]));
        localStorage.setItem('current', JSON.stringify(user));
        // console.log(registredUsers)
        setUser(user);
    }

    const registred = JSON.parse(localStorage.getItem('registred')) ?? [];

    const onEntrance = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const user = registred.find(item =>
            (item.email === data.get("email")) && (item.password === data.get("password")));

        if (user) {
            goMyProfile();
        } else {
            goRegistration();
            setIsActive(true);
            return;
        }

        localStorage.setItem('current', JSON.stringify(user));
        // console.log(user, 'ewewewe')
        setUser(user);

        // console.log(registred)
        setView(users);
        event.target.reset();
    }

    const timeOut = () => {
        setIsActive(false);
    }
    setTimeout(timeOut, 2000);

    // console.log(localStorage)
    const navigate = useNavigate();
    const goMyProfile = () => navigate("/searching");
    const goRegistration = () => navigate("/registration")


    const onRegistUsers = async (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const email = registred.find(item => (item.email === data.get("email")));
        const reader = new FileReader();
        reader.readAsDataURL(data.get('photo'))

        console.log(data.get('photo'))

        console.log(JSON.stringify({...data.get('photo')}))

        const birthday = ((new Date().getTime() - new Date(data.get("birthday"))) / (24 * 3600 * 365.25 * 1000)) | 0;


        reader.onload = () =>  {
            if (data.get("password").length < 8) {
                alert("Введите пароль не менее 8 символов!");
                return;
            } else if (email) {
                alert('Пользователь с таким email уже зарегистрирован!');
                return;
            } else if (birthday < 18) {
                alert("Вы не совершеннолетний!!!");
                return;
            } else {
                addRegistUsers({
                    name: data.get('name'),
                    gender: data.get('gender'),
                    email: data.get('email'),
                    password: data.get('password'),
                    birthday: data.get('birthday'),
                    city: data.get('city'),
                    image: reader.result
                })
            }
            event.target.reset();
            goMyProfile();
        }       
    }


    const filter = (dataUser) => {
        const { select1, city, age, } = dataUser;
        let copy = [...users];

        if (age) {
            copy = copy.filter((user) => user.dob.age === +age);
        }

        if (select1) {
            copy = copy.filter((user) => user.gender === select1);
        }

        if (city) {
            copy = copy.filter((user) => user.location.city === city)
        }

        setView(copy);

    }

    const onSearch = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        // console.log(data)
        filter({
            age: formData.get('age'),
            select1: formData.get('select1'),
            city: formData.get('city'),
        });
        event.target.reset();

    }

    const clickWatchAllUsers = () => {
        setView(users);
    }


    useEffect(() => {

        const url = "https://randomuser.me/api/?results=100";

        const fetchData = async () => {

            try {
                const res = await fetch(url);
                const json = await res.json();
                setUsers(json.results.map(user => {
                    const copy = {...user};
                    copy.id.value = uuidv4();
                    return copy;
                }));
                setView(json.results)
                // console.log(json.results)
            } catch (error) {
                alert("error", error);
            }
        };

        fetchData();

    }, []);

    const exitProfile = () => {
        localStorage.removeItem('current');
        setUser(null);
    }

    const onMyProfile = () => {
        setView(users);
    }

    

    return (

        <div className="container">
            <div className='background'>
                <div className='main__image'>
                    <img className='main__img' src={Image} alt="Image" />
                </div>
            </div>

            <Routes>
                <Route path="/">
                    <Route index element={<MainPage />} />
                    <Route path='/horoscope' element={<HoroscopePage />} />
                    <Route path='/relation' element={<RelationPage />} />
                    <Route path="/entrance" element={<EntrancePage onSubmit={onEntrance} />} />
                    <Route path="/registration" element={<RegistPage onSubmit={onRegistUsers} active={isActive} timeout={timeOut} />} />
                    <Route path='/searching' element={<Searching users={view} entrance={onMyProfile} onClick={clickWatchAllUsers} click={exitProfile} onSubmit={onSearch} />} />
                    <Route path='/profile/:id' element={<MyProfilePage onClick={exitProfile} users={users} />} />
                </Route>
            </Routes>
        </div>

    )
}