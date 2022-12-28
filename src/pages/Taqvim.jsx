import React, { useEffect, useState } from 'react'
import '../pages/taqvim.scss'
import Header from '../components/Header'
import axios from 'axios'

const Taqvim = () => {
  let date = new Date()
  let [time, setTime] = useState(date.toLocaleTimeString([], {hour12: false}));
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  
  setInterval(() => {
    setTime(new Date().toLocaleTimeString([], {hour12: false}))
  }, 1000)

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
              loading ? <h1 className='loading'>Loading...</h1> : <>
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
                  <div className="line"></div>
                </div>
                <div className="time">
                  <div className="h1">{data.city}</div>
                  <div className="h1">{data.date}</div>
                  <div className="h1">{time}</div>
                </div>
              </>
            }
        </div>
    </>
  )
}

export default Taqvim