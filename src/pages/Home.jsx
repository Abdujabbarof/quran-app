import React from 'react'
import Footer from '../components/Footer'
import logo from '../images/logo.png'
import bg from '../images/background.png'
import { Link } from 'react-router-dom'

const Home = () => {
    document.title = "IQRO.uz"
  return (
    <>
        <section className='main'>
            <header>
                <div className="container">
                    <a href="/"><img src={logo} alt="" /> IQRO.uz</a>
                </div>
            </header>

            <div className="showcase">
                <img src={bg} alt="" />

                <div className="buttons">
                    <Link className='btn' to={'/surahs'}>Qur'oni karim</Link>
                </div>
                <div className="buttons">
                    <Link className='btn' to={'./taqvim'}>Namoz vaqtlari</Link>
                    <Link className='btn' to={'/tasbeh'}>Tasbeh</Link>
                </div>
            </div>
        </section>
        {/* <Footer /> */}
    </>
  )
}

export default Home