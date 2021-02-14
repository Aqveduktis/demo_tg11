import React from 'react'
import styled from 'styled-components'
import {Header} from 'components/Header'
import {Footer} from 'components/Footer'
import { Projects } from 'components/Projects'
import { Frame } from 'lib/lib'


export const App = () => {
  return (
    <Frame>
        <Header/>
    <div>
      Find me in src/app.js!
      <Projects/>
    </div>
    <Footer/>
    </Frame>

  )
}
