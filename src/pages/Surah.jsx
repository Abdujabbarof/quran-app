import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import './surah.scss'
import axios, { all } from 'axios'
import { useParams } from 'react-router'

const Surah = () => {
    const { id } = useParams()
    const [ayah, setAyah] = useState()
    const [tran, setTrans] = useState()
    const [audio, setAudio] = useState()
    const [loading, setLoading] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const [count, setCount] = useState(0)
    const play = new Audio()

    useEffect(() => {
        const ayahs = axios.get(`https://api.alquran.cloud/v1/surah/${id}`)
        const trans = axios.get(`https://api.alquran.cloud/v1/surah/${id}/uz.sodik`)
        const audios = axios.get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
        
        axios.all([ayahs, trans, audios])
        .then(axios.spread((...allData) => {
            setAyah(allData[0].data.data)
            setTrans(allData[1].data.data.ayahs)
            setAudio(allData[2].data.data.ayahs)
            setLoading(false)
        }))
    }, [])
    const player = (e) => {
        play.src = ""
        play.src = `${audio[e.target.getAttribute("order") - 1].audio}`
        play.play()
    }

    const elemAudio = useRef()

    
    const playPause = () => {
        setIsPlaying(!isPlaying)
        elemAudio.current.src = `${audio[count].audio}`
        elemAudio.current.addEventListener('loadedmetadata', (a) => {
            console.log(a.target.duration);
        })
    }

    const next = () => {
        if(count < audio.length){
            setCount(count + 1)
        }
        isPlaying ? setIsPlaying(true) : setIsPlaying(true)
        elemAudio.current.src = `${audio[count].audio}`
        elemAudio.current.play()
    }

    const back = () => {
        if(count > 0){
            setCount(count - 1)
        }
        isPlaying ? setIsPlaying(true) : setIsPlaying(true)
        elemAudio.current.src = `${audio[count].audio}`
        elemAudio.current.play()
    }



    useEffect(() => {
        if(isPlaying){
            elemAudio.current.play()
        }else{
            elemAudio.current.pause()
        }
    }, [isPlaying])

  return (
    <>
        <Header back home lang />
        <audio src="" ref={elemAudio} />
        <div className="cards">
            <h4>{loading ? <></> : ayah.englishName}</h4>
            <h1>{loading ? <></> : ayah.name}</h1>

            <div className="card-wrap">
                {
                    loading ? <h1>Loading...</h1> : ayah.ayahs.map(item => (
                        <div key={item.number} order={item.numberInSurah} className="card" onClick={player}>
                            <h5 order={item.numberInSurah}>{ayah.number}:{item.numberInSurah}</h5>
                            <h1 order={item.numberInSurah}>{item.text} <span>{item.numberInSurah}</span></h1>
                            <h3 order={item.numberInSurah}>{tran[item.numberInSurah - 1].text}</h3>

                            <button order={item.numberInSurah}><i class="fa-solid fa-volume-high"></i> Play Audio</button>
                        </div>
                    ))
                }
            </div>

            <div className="player">
                <div className="buttons">
                    <button className='back' onClick={back}><i class="fa-solid fa-backward"></i></button>
                    <button className='play' onClick={playPause}>{isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}</button>
                    <button className='next' onClick={next}><i class="fa-solid fa-forward"></i></button>
                </div>
                <div className="text">
                    <h3>{loading ? <></> : ayah.englishName}</h3>
                    <p><span>0</span> - oyat</p>
                </div>
                <button className='retry'><i class="fa-solid fa-rotate-right"></i></button>
            </div>
        </div>
    </>
  )
}

export default Surah