import React from 'react'
import {projectsList} from 'lib/projectsList'
import { Oneproject } from './Oneproject'

export const Projects = () => {

  return (
    <div>
      {projectsList.map((object) => {
      return(<Oneproject object={object} />)
      })}
    </div>
  )
}