import React from 'react'
import '../pages/taqvim.scss'
import Header from '../components/Header'

const Taqvim = () => {
  return (
    <>
        <Header home />
        <div className="wrapper">
            <div className="round">
              <div className="circle tong">
                <h2>Тонг</h2>
                <h3>06:19</h3>
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
        </div>
    </>
  )
}

export default Taqvim