import React from "react"
import styled from "styled-components"

const HeroName = styled.div`

    font-size: 4em;
    color:red;
    margin: 25px;
`

export default function Name (props){
    
    const {name} = props;

    return (
        <HeroName>{name}</HeroName>
    )

}