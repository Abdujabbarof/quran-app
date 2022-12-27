import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({back, home, lang}) => {
  const [mark, setMark] = useState(true)

  const change = () => {
    setMark(!mark)
  }

  return (
    <header className='header'>
      {back ? <Link className='btn' to={'/surahs'}><i class="fa-solid fa-left-long"></i> Ortga</Link> : <></>}
      {home ? <Link className='btn' to={'/'}><i class="fa-solid fa-house"></i> Bosh sahifa</Link> : <></>}
      {lang ? <Link className='btn' onClick={change}><i class="fa-solid fa-language"></i> {mark ? "Uzbek" : "Russian"}</Link> : <></>}
    </header>
  )
}

export default Header