import React from "react"
import styled from "styled-components"

const Imagestyled = styled.img`
    width: 20%;
    height: 20%;
    
`


export default function Image(props){
    const {img, alt} = props;

    if( img === undefined) return "Waiting for your random."
    return (
        <Imagestyled src={'https://cdn.cloudflare.steamstatic.com/'+ img} alt={alt}/>
    )
}