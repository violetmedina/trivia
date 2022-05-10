
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <>
      <div id='header'><b>HEADER</b><br/>
        <Link to='/categories'>Play Game!</Link><br/>
      </div>
    </>
  )
}

export default Header
