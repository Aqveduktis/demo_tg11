import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid black;
    color: purple;
`

export const Oneproject = ({object}) => {

  return (
    <Container>
      <p>{object.title}</p>
      <p>{object.about}</p>
    </Container>
  )
}