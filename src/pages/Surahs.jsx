import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './surahs.scss'
import axios from 'axios'

function Surahs() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("http://api.alquran.cloud/v1/surah")
    .then((data) => {
      setData(data.data.data);
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Header home />
      <section className='surahs'>
        <div className="container">
          {
            loading ? <h1>Loading...</h1> : data.map(elem => (
              <Link key={elem.number} className='card' to={'/surah'}>
                <div className="left">
                  <div className="num"><span>{elem.number}</span></div>
                  <div className="text">
                    <h3>{elem.englishName}</h3>
                    <p>{elem.englishNameTranslation}</p>
                  </div>
                </div>
                <div className="right">
                  <h4>{elem.name}</h4>
                  <p>{elem.revelationType}, {elem.numberOfAyahs} Ayahs</p>
                </div>
              </Link>
            ))
          }
          {/* <Link className='card' to={'/surah'}>
              <div className="left">
                <div className="num"><span>1</span></div>
                <div className="text">
                  <h3>Al-Fatihah</h3>
                  <p>The Opener</p>
                </div>
              </div>
              <div className="right">
                <h4>سُورَةُ ٱلْفَاتِحَةِ</h4>
                <p>Meccan, 7 Ayahs</p>
              </div>
          </Link> */}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Surahs