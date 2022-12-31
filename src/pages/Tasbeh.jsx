import React, { useState } from 'react'
import Header from '../components/Header'
import './tasbeh.scss'

function Tasbeh() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const [sum, setSum] = useState(0)
    const [counter, setCounter] = useState(0)

    document.title = "IQRO.uz || Tasbeh"

    const increment = () => {
        if(sum < 9999999){
            setSum(sum + 1)
        }
        setCount(count + 1)
    }

    const reset = () => {
        setSum(0)
        setCounter(0)
        setCount(0)
    }

    if(count === 33){
        setCount(0)
        setCounter(counter + 1)
    }

  return (
    <>
        <Header home />
        <div className="tasbeh">
            <div className="counter">
                <div className="top-side">
                    <div className="screen">{sum}</div>
                </div>
                <div className="center-side">
                    <div className="reset" onClick={reset}><i class="fa-solid fa-rotate-right"></i></div>
                </div>
                <div className="bottom-side">
                    <div className="btn" onClick={increment}>{count}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tasbeh