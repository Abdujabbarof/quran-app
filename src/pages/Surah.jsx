import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import './surah.scss'
import axios, { all } from 'axios'
import { useParams } from 'react-router'

const Surah = () => {
    const [ayah, setAyah] = useState()
    const [trans, setTrans] = useState()
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     axios.get(`https://api.alquran.cloud/v1/surah/${id}`)
    //     .then((data) => {
    //         setData(data.data.data)
    //         setLoading(false)
    //     })
    // }, [])
    
    useEffect(() => {
        const ayahs = axios.get(`https://api.alquran.cloud/v1/surah/${id}`)
        const trans = axios.get(`https://api.alquran.cloud/v1/surah/${id}/uz.sodik`)
        
        axios.all([ayahs, trans])
        .then(axios.spread((...allData) => {
            setAyah(allData[0].data.data)
            setTrans(allData[1].data.data.ayahs)
            setLoading(false)
        }))
    }, [])

  return (
    <>
        <Header back home lang />
        <div className="cards">
            {/* <h4>{loading ? <></> : ayah.name}</h4> */}
            {/* <h1>{loading ? <></> : data.name}</h1> */}

            <div className="card-wrap">
                {
                    loading ? <h1>Loading...</h1> : ayah.ayahs.map(item => (
                        <div key={item.number} className="card">
                            <h5>{ayah.number}:{item.numberInSurah}</h5>
                            <h1>{item.text} <span>{item.numberInSurah}</span></h1>
                            <h3></h3>

                            <button><i class="fa-solid fa-volume-high"></i> Play Audio</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Surah