import React, { useState } from 'react'
import Footer from '../components/Footer'
import logo from '../images/logo.png'
import bg from '../images/background.png'
import { Link } from 'react-router-dom'

const Home = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 500)

  return (
    <>
        <section className='main'>
            {
                loading ? <h1 className='loading'>Loading...</h1> : <>
                    <header>
                        <div className="container">
                            <a href="#"><img src={logo} alt="" /> IQRO.uz</a>
                        </div>
                    </header>

                    <div className="showcase">
                        <img src={bg} alt="" />

                        <div className="buttons">
                            <Link className='btn' to={'/surahs'}>Qur'oni karim</Link>
                            <Link className='btn' to={'./taqvim'}>Namoz vaqtlari</Link>
                        </div>
                    </div>
                </>
            }
        </section>
        {/* <Footer /> */}
    </>
  )
}

export default Home