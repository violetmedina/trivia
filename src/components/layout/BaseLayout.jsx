import React from 'react'
import Header from './Header'

const BaseLayout = ({children}) => {
  return (
    <>
    <Header />
        <br /> <br />

      {children}
    </>
  )
}

export default BaseLayout
