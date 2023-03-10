import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import './surah.scss'
import axios from 'axios'
import { useParams } from 'react-router'
import mishary from '../images/mishary.png'
import husary from '../images/husary.png'
import minshawi from '../images/minshawi.png'

const Surah = ({control}) => {
    const { id } = useParams()
    const [ayah, setAyah] = useState()
    const [tran, setTrans] = useState()
    const [audio, setAudio] = useState()
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)
    const elemAudio = useRef()

    const [reader, setReader] = useState("mishary");

    useEffect(() => {
        const ayahs = axios.get(`https://api.alquran.cloud/v1/surah/${id}`)
        const trans = axios.get(control ? `https://api.alquran.cloud/v1/surah/${id}/uz.sodik` : `https://api.alquran.cloud/v1/surah/${id}/ru.kuliev`)
        const audios = axios.get(reader === "mishary" ? `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy` : reader === "husary" ? `https://api.alquran.cloud/v1/surah/${id}/ar.husary` : `https://api.alquran.cloud/v1/surah/${id}/ar.minshawi`)
        
        axios.all([ayahs, trans, audios])
        .then(axios.spread((...allData) => {
            setAyah(allData[0].data.data)
            setTrans(allData[1].data.data.ayahs)
            setAudio(allData[2].data.data.ayahs)
            setLoading(false)
        }))
    }, [control, reader])    

    const next = () => {
        if(count < audio.length - 1){
            setCount(prev => prev + 1)
        }else{
            setCount(0)
            elemAudio.current.src = `${audio[0].audio}`
            elemAudio.current.play()
        }

        elemAudio.current.loop = false
        elemAudio.current.src = `${audio[count + 1].audio}`
        elemAudio.current.play()
    }

    const player = (e) => {
        elemAudio.current.src = ""
        elemAudio.current.src = `${audio[e.target.getAttribute("order") - 1].audio}`
        elemAudio.current.play()
        elemAudio.current.loop = false
        setCount(Number(e.target.getAttribute("order") - 1))
    }

    const back = () => {
        if(count > 0){
            setCount(count - 1)
            elemAudio.current.src = `${audio[count - 1].audio}`
        }
        elemAudio.current.play()
        elemAudio.current.loop = false
    }
    
    const play = () => {
        elemAudio.current.src = `${audio[count].audio}`
        elemAudio.current.play()
        elemAudio.current.loop = false
    }

    const pause = () => {
        elemAudio.current.src = `${audio[count].audio}`
        elemAudio.current.loop = false
    }

    const reset = () => {
        elemAudio.current.src = `${audio[count].audio}`
        elemAudio.current.play()
        elemAudio.current.loop = true
    }

    const changeReader = () => {
        if(reader === "mishary"){
            setReader("husary")
            elemAudio.current.pause()
        } else if(reader === "husary"){
            setReader("minshawi")
            elemAudio.current.pause()
        } else{
            setReader("mishary")
            elemAudio.current.pause()
        }
    }

    loading ? document.title = `IQRO.uz` : document.title = `IQRO.uz || ${ayah.englishName}`

  return (
    <>
        <Header back home langu />
        <audio src="" ref={elemAudio} onEnded={next} type="audio/ogg" />
        <div className="cards">
            <h4>{loading ? <></> : ayah.englishName}</h4>
            <h1>{loading ? <></> : ayah.name}</h1>

            <div className="card-wrap">
                {
                    loading ? <h1 className='loading'>Biroz kuting... <span>??????</span></h1> : ayah.ayahs.map(item => (
                        <div key={item.number} order={item.numberInSurah} className="card" onClick={player}>
                            <h5 order={item.numberInSurah}>{ayah.number}:{item.numberInSurah}</h5>
                            <h1 order={item.numberInSurah}>{item.text} <span>{item.numberInSurah}</span></h1>
                            <h3 order={item.numberInSurah}>{tran[item.numberInSurah - 1].text}</h3>

                            <button order={item.numberInSurah}><i class="fa-solid fa-volume-high"></i> Play Audio</button>
                        </div>
                    ))
                }
            </div>

            {
                loading ? <></> : <>
                    <div className="player">
                        <div className="buttons">
                            <button className='back' onClick={back}><i class="fa-solid fa-backward"></i></button>
                            <button className='play' onClick={play}><i class="fa-solid fa-play"></i></button>
                            <button className='pause' onClick={pause}><i class="fa-solid fa-pause"></i></button>
                            <button className='next' onClick={next}><i class="fa-solid fa-forward"></i></button>
                        </div>
                        <div className="text">
                            <h3>{loading ? <></> : ayah.englishName}</h3>
                            <p><span>{count + 1}</span> - oyat</p>
                        </div>
                        <button className='retry' onClick={reset}><i class="fa-solid fa-infinity"></i></button>
                    </div>
                    <button className='changer' onClick={changeReader}>
                        <img src={reader === "mishary" ? husary : reader === "husary" ? minshawi : mishary} alt="" /> <span>{reader === "mishary" ? "Al-Husary" : reader === "husary" ? "Al-Minshawi" : "Al-Mishary"}</span>
                    </button>
                </>
            }
        </div>
    </>
  )
}

export default Surah