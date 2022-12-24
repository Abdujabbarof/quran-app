import React from 'react'
import Footer from '../components/Footer'
import logo from '../images/logo.png'
import bg from '../images/background.png'

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
                    <a href="#" className='btn'>Qur'oni karim</a>
                    <a href="#" className='btn'>Namoz vaqtlari</a>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Home