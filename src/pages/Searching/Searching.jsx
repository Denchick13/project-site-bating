import { Link } from 'react-router-dom';
import '../Searching/Searching.css';
import { Users } from '../../App';


export default function Searching(props) {

    const { users, onSubmit, onClick, click, entrance, valueAgeFrom, valueAgeBefore, onchangeFrom, onchangeBefore } = props;
    const current = JSON.parse(localStorage.getItem('current'));

    // if(current === null) return null;
    // console.log(users)
    return (
        <div className="searching">

            <div className='searching__container_wrapper'>
                <Link className='link' onClick={entrance} to={`/profile/${current.id}`}>Мой профиль</Link>
                <Link className='link' to=''>Link</Link>
                <Link className='link' to=''>Link</Link>
                <Link onClick={click} className='link' to='/'>Выход</Link>
            </div>

            <div className='searching__people'>

                <h2 style={{ textAlign: "center" }}>Поиск</h2>

                <form
                    onSubmit={onSubmit}
                    action=""
                    className='searching__form'
                >

                    <label htmlFor="select1">
                        Ищу:
                        <select
                            className='searching__form_input'
                            name="select1"
                            id=""
                            style={{ margin: '0 30px 0 10px' }}
                        >
                            <option value="female">девушку</option>
                            <option value="male">парня</option>
                        </select>
                    </label>

                    <label htmlFor="city">
                        Город:
                        <input
                            className='searching__form_input'
                            type='text'
                            name='city'
                            placeholder='Город'
                            style={{
                                margin: '0 30px 30px 10px',
                            }}
                        />

                    </label>
                    <br />
                    <label htmlFor="select2">
                        Цель знакомства:
                        <select
                            className='searching__form_input'
                            name="select2"
                            id=""
                            style={{ margin: '0 30px 0 10px' }}
                        >
                            <option value="не имеет значения">не имеет значения</option>
                            <option value="поиск друзей">поиск друзей</option>
                            <option value="свободные отношения">свободные отношения</option>
                            <option value="общение">общение</option>
                        </select>
                    </label>

                    <label htmlFor="number">
                        Возраст: <span style={{margin: "0 5px"}}>от</span>
                        <input
                            className='searching__form_input_age'
                            type="number"
                            name='age_from'
                            value={valueAgeFrom}
                            onChange={onchangeFrom}
                        />
                        <span style={{margin: "0 5px"}}>до</span>
                        <input 
                        className='searching__form_input_age'
                        type="number"
                        name='age_before'
                        value={valueAgeBefore}
                        onChange={onchangeBefore}
                        />
                    </label>
                    <br />
                    <button className='searching__form_button' style={{ padding: '10px' }}>Найти</button>
                    <button className='search__form_button_all' type='button' onClick={onClick}>Посмотреть все анкеты</button>

                </form>

                <div className='searching__result'>
                    <Users users={users} />
                </div>
            </div>

        </div >
    )
}