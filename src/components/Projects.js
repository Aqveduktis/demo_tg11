import React from 'react'
import {projectsList} from 'lib/projectsList'

export const Projects = () => {

  return (
    <div>
      {projectsList.map((object) => {
      return(<p>{object.title}</p>)
      })}
    </div>
  )
}