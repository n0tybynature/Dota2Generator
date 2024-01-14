import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
    
`

export default function AttackType (props){
    const {attack} = props;

    return (
        <Wrapper>{attack}</Wrapper>
    )
}