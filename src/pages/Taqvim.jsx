import React, { useState } from 'react'
import '../pages/taqvim.scss'
import Header from '../components/Header'

const Taqvim = () => {
  let date = new Date()
  let [time, setTime] = useState(date.toLocaleTimeString([], {hour12: false}));
  
  setInterval(() => {
    setTime(new Date().toLocaleTimeString([], {hour12: false}))
  }, 1000)

  return (
    <>
        <Header home />
        <div className="wrapper">
            <div className="round">
              <div className="circle tong">
                <h2>Тонг</h2>
                <h3>06:20</h3>
              </div>
              <div className="circle peshin">
                <h2>Решин</h2>
                <h3>12:23</h3>
              </div>
              <div className="circle asr">
                <h2>Аср</h2>
                <h3>15:18</h3>
              </div>
              <div className="circle shom">
                <h2>Шом</h2>
                <h3>17:04</h3>
              </div>
              <div className="circle xufton">
                <h2>Хуфтон</h2>
                <h3>18:22</h3>
              </div>
              <div className="centre"></div>
              <div className="line"></div>
            </div>
            <div className="time">
              <div className="h1">TASHKENT</div>
              <div className="h1">26-12-2022</div>
              <div className="h1">{time}</div>
            </div>
        </div>
    </>
  )
}

export default Taqvim