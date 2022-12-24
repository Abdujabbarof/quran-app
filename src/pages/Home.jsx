import React from 'react'
import Footer from '../components/Footer'
import logo from '../images/logo.png'
import bg from '../images/background.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <section className='main'>
            <header>
                <div className="container">
                    <a href="#"><img src={logo} alt="" /> IQRO.uz</a>
                </div>
            </header>

            <div className="showcase">
                <img src={bg} alt="" />

                <div className="buttons">
                    <Link className='btn' to={'/surahs'}>Qur'oni karim</Link>
                    <Link className='btn'>Namoz vaqtlari</Link>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Home