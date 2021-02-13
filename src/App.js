import React from 'react'
import {Header} from 'components/Header'
import {Footer} from 'components/Footer'
import { Projects } from 'components/Projects'

export const App = () => {
  return (
    <>
    <Header/>
    <div>
      Find me in src/app.js!
      <Projects/>
    </div>
    <Footer/>
  </>
  )
}
