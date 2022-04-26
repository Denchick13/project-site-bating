import { Link, useParams } from 'react-router-dom';
import '../MyProfilePage/MyProfilePage.css';

export default function MyProfilePage(props) {
    const { onClick, users } = props;

    const current = JSON.parse(localStorage.getItem('current'));
    const { id } = useParams();

    const user = current && current.id == id ? current : users.find(item => item.id.value === id);


    if (!user) return null;

    if (user !== current) {
        user.name = user.name.first;
        user.city = user.location.city;
        user.birthday = user.dob.date;
        user.image = user.picture.large;
    }

    return (
        <div className='profile'>
            <div className='profile__nav'>
                <Link to="/" className='link'>На главную</Link>
                <Link className='link' style={{ marginRight: "20px" }} to="/searching">Поиск</Link>
                <Link onClick={onClick} className='link' to='/'>Выход</Link>
            </div>

            <div className='profile__container_data'>

                <div className='profile__data'>

                    <div className='profile__image'>
                        <img className='profile__img' alt="photo" src={user.image} />
                    </div>

                    <div className='profile__about'>

                        <p>{user.name}, {((new Date().getTime() - new Date(user.birthday)) / (24 * 3600 * 365.25 * 1000)) | 0}</p>
                        <p style={{ marginTop: '8px' }}>{user.city}</p>

                        <h3 className='profile__text_about'>О себе:</h3>

                        <p
                            style={{ textAlign: 'justify' }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem perspiciatis. Temporibus dolor excepturi voluptas, fugiat non consequatur eum veritatis mollitia natus, perspiciatis voluptate nam. Exercitationem ex deserunt placeat assumenda.
                        </p>

                    </div>

                </div>

                <div className='profile__information'>

                </div>
                <label
                    htmlFor="file"
                    className='profile__label'
                    style={{
                        display: user !== current ? "none" : "flex"
                    }}
                >
                    Изменить фото
                    <input
                        style={{
                            display: 'none'
                        }}
                        type="file"
                        id="file"
                        name="file"
                    >
                    </input>
                </label>

            </div>
        </div>
    )
}