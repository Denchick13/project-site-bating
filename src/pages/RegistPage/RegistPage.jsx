import '../RegistPage/RegistPage.css';
import { Link } from 'react-router-dom';
import eyeClose from '../../components/images/not-visible-interface-symbol-of-an-eye-with-a-slash-on-it_icon-icons.com_57783.png'
import eyeOpen from '../../components/images/eye-visible-outlined-interface-symbol_icon-icons.com_57844.png'

export default function RegistPage(props) {

    const { onSubmit, active, hidden, onclick, iseye, value, onchange, click } = props;

    return (
        <>
            {active && <div className='regist__message'>
                <div className='regist__message_div'>Зарегистрируйтесь!</div>
            </div>
            }

            <div className="wrapper">

                <Link
                    to='/'
                    className='wrapper__back'
                    onClick={click}
                >
                </Link>

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

                    <label
                        htmlFor="password"
                        className='form__regist_label'
                    >
                        <span className="form_span">Пароль</span>
                        <input
                            value={value ?? ''}
                            onChange={onchange}
                            style={{ width: "215px" }}
                            className='form__regist_input'
                            type={!iseye ? "password" : "text"}
                            name='password'
                            placeholder='Не менее 8 символов'
                            required
                        />
                        <img
                            onClick={onclick}
                            src={!iseye ? eyeClose : eyeOpen}
                            className='form__regist_button_eye'
                            style={{
                                display: value ? "block" : "none",

                            }}
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

                    <label htmlFor='input_photo' className='form__regist_label' required>
                        <p style={{ width: "110px" }}>Фото</p>
                        <input className='form__regist_input_file' id='input_photo' type="file" name='photo' />
                        <p className='form__regist_label_photo' required>Выберите файл</p>
                    </label>
                    <p className='hidden' style={{ display: !hidden ? "none" : "flex" }}>Выберите файл</p>

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