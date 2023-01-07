import React, { useEffect, useState } from 'react'
import '../pages/taqvim.scss'
import Header from '../components/Header'
import axios from 'axios'

const Taqvim = () => {
  const time = new Date().getHours()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  document.title = "IQRO.uz || Taqvim"

  useEffect(() => {
    axios.get("https://dailyprayer.abdulrcs.repl.co/api/tashkent")
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <>
        <Header home />
        <div className="wrapper">
            {
              loading ? <h1 className='loading'>Biroz kuting . . . <span>صبر</span></h1> : <>
                <div className="round">
                  <div className="circle tong">
                    <h2>Bomdod</h2>
                    <h3>{data.today.Fajr}</h3>
                  </div>
                  <div className="circle peshin">
                    <h2>Peshin</h2>
                    <h3>{data.today.Dhuhr}</h3>
                  </div>
                  <div className="circle asr">
                    <h2>Asr</h2>
                    <h3>{data.today.Asr}</h3>
                  </div>
                  <div className="circle shom">
                    <h2>Shom</h2>
                    <h3>{data.today.Maghrib}</h3>
                  </div>
                  <div className="circle xufton">
                    <h2>Xufton</h2>
                    <h3>{data.today["Isha'a"]}</h3>
                  </div>
                  <div className="centre"></div>
                  <div className="line" style={{transform: `translateX(-50%) rotate(${time > data.today["Isha'a"].slice(0,2) ? 0 : time > data.today.Maghrib.slice(0,2) ? 288 : time > data.today.Asr.slice(0,2) ? 216 : time > data.today.Dhuhr.slice(0,2) ? 144 : time > data.today.Fajr.slice(0,2) ? 72 : 0}deg)`}}></div>
                </div>
                <h1 className='time'>{data.city} {data.date}</h1>
              </>
            }
        </div>
    </>
  )
}

export default Taqvim