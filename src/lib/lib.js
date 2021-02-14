import styled from 'styled-components'

export const Frame = styled.section`
    width: 100%;
    max-width: 1080px;
    margin-right: auto;
    margin-left: auto;

`
export const Wrapper = styled.section`
    width: 100%;
    background-color: ${props => props.inputColor || "gray"};
`

export const Paragraf = styled.p`
    font-size: 1.2em;
`

