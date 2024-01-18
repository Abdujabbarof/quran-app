import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LangContext } from './LangContext'


const Header = ({back, home, langu}) => {
  const {lang, setLang} = useContext(LangContext);

  const change = () => {
    setLang(!lang)
  }

  return (
    <header className='header'>
      {back ? <Link className='btn' to={'/surahs'}><i class="fa-solid fa-left-long"></i> Ortga</Link> : <></>}
      {home ? <Link className='btn' to={'/'}><i class="fa-solid fa-house"></i> Bosh sahifa</Link> : <></>}
      {langu ? <Link className='btn' onClick={change}><i class="fa-solid fa-language"></i> {!lang ? "Russian" : "Uzbek"}</Link> : <></>}
    </header>
  )
}

export default Header