import React, { useEffect, useState } from 'react'
import '../pages/taqvim.scss'
import Header from '../components/Header'
import axios from 'axios'
import regions from './regions.json';


const Taqvim = () => {
  const time = new Date().getHours()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [region, setRegion] = useState('Toshkent');

  document.title = "IQRO.uz || Taqvim"

  useEffect(() => {
    setLoading(true)
    axios.get(`https://islomapi.uz/api/present/day?region=${region}`)
    .then(res => {
      console.log(res.data);
      setData(res.data)
    }).catch(res => {
      console.log(res);
    }).finally(() => setLoading(false))
  }, [region])

  console.log(region)

  return (
    <>
        <Header home region />
        <div className="wrapper">
            <div className="change">
              <h1>Shahar tanlash</h1>
              <select defaultValue='Toshkent' onChange={(e) => setRegion(e.target.value)}>
                {
                  regions.regions.map((item) => (
                    <option value={`${item}`}>{item}</option>
                  ))
                }
              </select>
            </div>
            {
              loading ? <h1 className='loading'>Biroz kuting... <span>صبر</span></h1> : <>
                <h1 className='time'>Namoz vaqtlari - {data.region} <span>{data.date}</span> {data.weekday}</h1>
                <div className="round">
                  <div className="circle tong">
                    <h2>Bomdod</h2>
                    <h3>{data.times.tong_saharlik}</h3>
                  </div>
                  <div className="circle peshin">
                    <h2>Peshin</h2>
                    <h3>{data.times.peshin}</h3>
                  </div>
                  <div className="circle asr">
                    <h2>Asr</h2>
                    <h3>{data.times.asr}</h3>
                  </div>
                  <div className="circle shom">
                    <h2>Shom</h2>
                    <h3>{data.times.shom_iftor}</h3>
                  </div>
                  <div className="circle xufton">
                    <h2>Xufton</h2>
                    <h3>{data.times.hufton}</h3>
                  </div>
                  <div className="centre"></div>
                  <div className="line" style={{transform: `translateX(-50%) rotate(${time > data.times.hufton.slice(0,2) ? 0 : time > data.times.shom_iftor.slice(0,2) ? 288 : time > data.times.asr.slice(0,2) ? 216 : time > data.times.peshin.slice(0,2) ? 144 : time > data.time.tong_saharlik.slice(0,2) && data.time.quyosh.slice(0,2) ? 72 : 0}deg)`}}></div>
                </div>
              </>
            }
        </div>
    </>
  )
}

export default Taqvim