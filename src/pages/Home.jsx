import React from 'react'
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
                    <Link className='btn' to={'./taqvim'}>Namoz vaqtlari</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home