import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

import '../MainPage/MainPage.css'

export default function MainPage() {

    return (
            <div className='main__page_box'>
                <Header />
                <main className='main__page_content'>
                    <section className='main__page__main_section'>
                        <div>
                            <Navigation />
                        </div>
                    </section>
                </main>
            </div>
    )
}