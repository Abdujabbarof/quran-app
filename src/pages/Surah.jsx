import React, { useEffect, useState } from 'react'
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
        .catch(err => alert("Something went wrong ("))
    }, [])
    
    const showNum = (e) => {
        play.src = `${audio[e.target.parentElement.getAttribute("order") - 1].audio}`
        play.play()
    }

  return (
    <>
        <Header back home lang />
        <div className="cards">
            <h4>{loading ? <></> : ayah.englishName}</h4>
            <h1>{loading ? <></> : ayah.name}</h1>

            <div className="card-wrap">
                {
                    loading ? <h1>Loading...</h1> : ayah.ayahs.map(item => (
                        <div key={item.number} order={item.numberInSurah} className="card">
                            <h5>{ayah.number}:{item.numberInSurah}</h5>
                            <h1>{item.text} <span>{item.numberInSurah}</span></h1>
                            <h3>{tran[item.numberInSurah - 1].text}</h3>

                            <button onClick={showNum}><i class="fa-solid fa-volume-high"></i> Play Audio</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Surah