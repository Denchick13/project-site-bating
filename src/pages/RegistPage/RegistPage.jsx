import '../RegistPage/RegistPage.css';
import { Link } from 'react-router-dom';


export default function RegistPage(props) {

    const { onSubmit, active, timeout } = props;

    setTimeout(timeout, 2000);

    return (
        <>
        { active && <div className='regist__message'>
                <div className='regist__message_div'>Зарегистрируйтесь!</div>
            </div>
            }
           
            <div className="wrapper">


                <Link className='wrapper__back' to='/'></Link>

                <div className='wrapper__div'>

                    <p className='wrapper__text'>Galaxy Of Love</p>
                    <p className='wrapper__text_next'>сайт для серьезных знакомств!</p>

                </div>

                <form
                    className='form__regist'
                    action=""
                    onSubmit={onSubmit}
                >
                    <div className='form__galaxy'>
                        <div className='form__galaxy_of_love'>Galaxy Of Love</div>
                    </div>

                    <label
                        htmlFor="name"
                        className='form__regist_label'
                    >
                        <span className="form_span">Имя</span>

                        <input
                            style={{ width: "215px" }}
                            className='form__regist_name form__regist_input'
                            type="text"
                            name="name"
                            placeholder='Имя'
                            required
                        />
                    </label>
                    <br />
                    <div

                        className='form__regist_label'
                    >
                        <span className="form_span">Пол</span>
                        <input
                            className='form__regist_input form__regist_gender'
                            type="radio"
                            name="gender"
                            value="Male"
                            id='choice'
                            style={{ verticalAlign: "middle", margin: "-2px 5px 0 10px" }}
                            required
                        />
                        <label htmlFor="choice">мужской</label>

                        <input
                            className='form__regist_input form__regist_gender'
                            type="radio"
                            name="gender"
                            value="Female"
                            id='choice1'
                            style={{ verticalAlign: "middle", margin: "-2px 5px 0 15px" }}
                            required
                        />
                        <label htmlFor="choice1">женский</label>
                    </div>
                    <br />
                    <label
                        htmlFor="email"
                        className='form__regist_label'
                    >
                        <span className="form_span">Email</span>
                        <input
                            name='email'
                            style={{ width: "215px" }}
                            className='form__regist_input'
                            type="email"
                            placeholder='email@mail.ru'
                            required
                        />
                    </label>
                    <br />
                    <label
                        htmlFor="password"
                        className='form__regist_label'
                    >
                        <span className="form_span">Пароль</span>
                        <input
                            style={{ width: "215px" }}
                            className='form__regist_input'
                            type="password"
                            name='password'
                            placeholder='Не менее 8 символов'
                            required
                        />
                    </label>
                    <label
                        htmlFor="city"
                        className='form__regist_label'
                    >
                        <span className="form_span">Город</span>
                        <input
                            style={{ width: "215px" }}
                            className='form__regist_input'
                            type="text"
                            name="city"
                            placeholder='Москва'
                            required
                        />
                    </label>
                    <br />
                    <label
                        htmlFor="date"
                        className='form__regist_label form__regist_label_date'
                    >
                        <div style={{ width: "110px" }}>
                            <p>Дата</p>
                            <p>рождения</p>
                        </div>
                        <input
                            name='birthday'
                            className='form__regist_input form__regist_date'
                            type="date"
                            required
                        />
                    </label>

                    <label>
                        <p>Фото</p>
                        <input type="file" name='photo' required/>
                    </label>

                    <button
                        className='regist__button'
                    >
                        Зарегистрироваться
                    </button>

                </form>
            </div>
        </>
    )
}