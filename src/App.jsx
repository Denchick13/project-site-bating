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
    if (users === null) return <h2 style={{ display: "block", margin: "20px auto", fontSize: "36px" }}>Загрузка...</h2>;
    return (
        <>
            {users.map((user, idx) => (
                <Link
                    to={`/profile/${user.id.value}`}
                    className='user-link'
                    key={idx}
                >
                    <div className='searching__user'>
                        <img
                            className='search__img'
                            src={user.picture.large}
                            alt="photo"
                        />
                        <div
                            className='search__info'
                        >
                            <p style={{ marginBottom: '10px' }}>
                                {user.name.first}, {user.dob.age}
                            </p>
                            <p>
                                {user.location.city}, {user.location.country}
                            </p>
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
    const [view, setView] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('current')));
    const [isActive, setIsActive] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isEye, setIsEye] = useState(false);
    const [valuePassword, setValuePassword] = useState('');
    const [ageFrom, setAgeFrom] = useState(18);
    const [ageBefore, setAgeBefore] = useState(18);
    // console.log(JSON.parse(localStorage.getItem('registred')), 'registred')
    // console.log(JSON.parse(localStorage.getItem('current')), 'current')
    const clickEye = () => {
        setIsEye(true);
        if (isEye) {
            setIsEye(false)
        }
    }

    const registred = JSON.parse(localStorage.getItem('registred')) ?? [];
    const navigate = useNavigate();
    const goMyProfile = () => navigate("/searching");
    const goRegistration = () => navigate("/registration")

    const onRegistUsers = async (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const email = registred.find(item => (item.email === data.get("email")));
        const reader = new FileReader();
        reader.readAsDataURL(data.get('photo'))

        const birthday = ((new Date().getTime() - new Date(data.get("birthday"))) / (24 * 3600 * 365.25 * 1000)) | 0;

        reader.onload = () => {
            if (data.get("password").length < 8) {
                alert("Введите пароль не менее 8 символов!");
                return;
            } else if (email) {
                alert('Пользователь с таким email уже зарегистрирован!');
                return;
            } else if (birthday < 18) {
                alert("Вы не совершеннолетний!!!");
                return;
            } else if (data.get('photo').name === "") {
                setIsHidden(true);
                setTimeout(() => setIsHidden(false), 2000);
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

    const addRegistUsers = (valueUser) => {
        const registredUsers = JSON.parse(localStorage.getItem('registred')) ?? [];
        const user = { ...valueUser, id: Date.now() };

        localStorage.setItem('registred', JSON.stringify([...registredUsers, user]));
        localStorage.setItem('current', JSON.stringify(user));
        // console.log(registredUsers)
        setUser(user);
    }

    const onChange = (e) => {
        setValuePassword(e.target.value);
    }

    const clickArrowBackRegistPage = () => {
        setValuePassword("");
    }

    const onEntrance = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const user = registred.find(item =>
            (item.email === data.get("email")) && (item.password === data.get("password")));

        const password = registred.find(item =>
            (item.email === data.get("email")) && (item.password !== data.get("password")));

        const email = registred.find(item =>
            (item.email !== data.get("email")) && (item.password === data.get("password")));

        if (user) {
            goMyProfile();
        } else if (password) {
            alert('Неверный email или пароль!');
            return;
        } else if (email) {
            alert('Неверный email или пароль!');
            return;
        } else {
            goRegistration();
            setValuePassword('');
            setIsActive(true);
            setTimeout(() => setIsActive(false), 2000);
            return;
        }

        localStorage.setItem('current', JSON.stringify(user));
        setUser(user);
        setView(users);
        setValuePassword('');
        event.target.reset();
    }

    const ageFromValue = (event) => {
        setAgeFrom(event.target.value);
        setAgeBefore(event.target.value);
    }

    const ageBeforeValue = (event) => {
        setAgeBefore(event.target.value);
    }

    const onSearch = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        // console.log(data)
        filter({
            age_from: formData.get('age_from'),
            age_before: formData.get('age_before'),
            select1: formData.get('select1'),
            city: formData.get('city'),
        });
        event.target.reset();
        setAgeFrom(18);
        setAgeBefore(18);
    }

    const filter = (dataUser) => {
        const { select1, city, age_from, age_before } = dataUser;
        let copy = [...users];
        // console.log(copy)
        if (age_from && age_before) {
            copy = copy.filter((user) => user.dob.age >= age_from && user.dob.age <= +age_before);
        }
        if (select1) {
            copy = copy.filter((user) => user.gender === select1);
        }
        if (city) {
            copy = copy.filter((user) => user.location.city.toLowerCase() === city.toLowerCase())
        }

        setView(copy);
    }

    const clickWatchAllUsers = () => {
        setView(users);
    }

    useEffect(() => {

        const url = "https://randomuser.me/api/?results=200";

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setUsers(json.results.map(user => {
                    const copy = { ...user };
                    copy.id.value = uuidv4();
                    return copy;
                }));
                setView(json.results)
            } catch (error) {
                alert("error", error);
            }
        };
        fetchData();
    }, []);

    const onMyProfile = () => {
        setView(users);
    }

    const exitProfile = () => {
        localStorage.removeItem('current');
        setUser(null);
    }
    // console.log(user)

    const changeButtonLink = () => {
        if(user === null) {
            return false;
        } else {
            return true;
        }
    }

    return (

        <div className="container">
            <div className='background'>
                <img className='main__img' src={Image} alt="Image" />
            </div>

            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <MainPage
                                change={changeButtonLink()}
                                clickexit={exitProfile}
                            />
                        }
                    />
                    <Route path='/horoscope' element={<HoroscopePage />} />
                    <Route path='/relation' element={<RelationPage />} />
                    <Route
                        path="/entrance"
                        element={
                            <EntrancePage
                                click={clickArrowBackRegistPage}
                                value={valuePassword}
                                onchange={onChange}
                                onSubmit={onEntrance}
                                onclick={clickEye}
                                iseye={isEye}
                            />
                        }
                    />
                    <Route
                        path="/registration"
                        element={
                            <RegistPage
                                onSubmit={onRegistUsers}
                                hidden={isHidden}
                                iseye={isEye}
                                active={isActive}
                                onclick={clickEye}
                                value={valuePassword}
                                onchange={onChange}
                                click={clickArrowBackRegistPage}
                            />
                        }
                    />
                    <Route
                        path='/searching'
                        element={
                            <Searching
                                valueAgeFrom={ageFrom}
                                valueAgeBefore={ageBefore}
                                onchangeFrom={ageFromValue}
                                onchangeBefore={ageBeforeValue}
                                users={view}
                                entrance={onMyProfile}
                                onClick={clickWatchAllUsers}
                                click={exitProfile}
                                onSubmit={onSearch}
                            />
                        }
                    />
                    <Route
                        path='/profile/:id'
                        element={
                            <MyProfilePage
                                onClick={exitProfile}
                                users={users}
                            />
                        }
                    />
                </Route>
            </Routes>
        </div>
    )
}