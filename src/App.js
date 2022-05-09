import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


const App = () => {



  return (
    <>
    <div id='home'>
      <b>APP HOME PAGE</b><br/>
      <Link to='/categories'>Play Game!</Link>
    </div></>
  )
}

export default App
