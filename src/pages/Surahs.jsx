import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './surahs.scss'
import axios from 'axios'
import ScrollButton from '../components/ScrollButton'

function Surahs() {
  document.title = "IQRO.uz || Surahs"
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios.get("https://api.alquran.cloud/v1/surah")
    .then((data) => {
      setData(data.data.data);
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Header home />
      <section className='surahs'>
          <input type="text" placeholder='Qidiruv...' className='input' value={search} onChange={e => setSearch(e.target.value)} />
        <div className="container">
          {
            loading ? <h1 className='loading'>Loading...</h1> : data.filter(item => item.englishName.toLowerCase().includes(search) || item.englishName.includes(search)).map(elem => (
              <Link key={elem.number} className='card' to={`/surahs/${elem.number}`}>
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
          <ScrollButton />
        </div>
      </section>
    </>
  )
}

export default Surahs