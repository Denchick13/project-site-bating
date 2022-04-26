import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

import '../MainPage/MainPage.css'

export default function MainPage(props) {

    const { change, clickexit } = props;
    // console.log(user)
    return (
        <div className='main__page_box'>
            <Header />
            <main className='main__page_content'>
                <section className='main__page__main_section'>
                    <Navigation
                        change={change}
                        clickexit={clickexit}
                    />
                </section>
            </main>
        </div>
    )
}