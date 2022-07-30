import { Link } from "react-router-dom";
import '../EntrancePage/EntrancePage.css';
import eyeClose from '../../components/images/not-visible-interface-symbol-of-an-eye-with-a-slash-on-it_icon-icons.com_57783.png';
import eyeOpen from '../../components/images/eye-visible-outlined-interface-symbol_icon-icons.com_57844.png';

export default function EntrancePage(props) {
    const { value, onSubmit, onclick, iseye, onchange, click } = props;
    // console.log(value)
    return (
        <div className="entrance__container">

            <Link
                onClick={click}
                className="entrance__back"
                to='/'
            >
            </Link>

            <div className="entrance__text">

                <p
                    style={{
                        color: 'white',
                        lineHeight: '1.5',
                        textAlign: 'justify'
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut quia nesciunt fugiat reiciendis non iure adipisci placeat iste labore quisquam esse, asperiores laudantium, ipsam consectetur, corporis consequatur id! Harum laudantium totam, blanditiis debitis repudiandae aperiam ducimus officia culpa velit atque minus hic cumque expedita magni enim.
                </p>
            </div>

            <form
                onSubmit={onSubmit}
                action=""
                className="form__entrance"
            >
                <div className="form__entrance_header">
                    <h2>Войти на Galaxy Of Love</h2>
                </div>
                <div className="form__entrance_cont_label">
                    <label className="form__entrance_label" htmlFor="login">
                        <span className="form__entrance_span">Email</span>
                        <input
                            className="form__entrance_input"
                            type="text"
                            name='email'
                            placeholder="Email"
                            required
                        />
                    </label>
                    <br />
                    <label className="form__entrance_label" htmlFor="password">
                        <span className="form__entrance_span">Пароль</span>
                        <input
                            value={value ?? ''}
                            onChange={onchange}
                            className="form__entrance_input"
                            type={!iseye ? 'password' : 'text'}
                            name='password'
                            placeholder="Пароль"
                            required
                        />
                        <img
                            src={iseye ? eyeClose : eyeOpen }
                            onClick={onclick}
                            className="form__entrance_password_button"
                            style={{
                                display: value ? "block" : "none"
                            }}
                        />
                    </label>
                </div>

                <button className="form__entrance_button">Войти</button>

            </form>

        </div>

    )
}