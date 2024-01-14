import React, { useState, useEffect } from "react"
import axios from "axios"
// import Attack from './HeroAttack'
import Image from './HeroImg'
import Name from './HeroName'
import styled from 'styled-components'


const Card = styled.div`

    color: green;
`
const Button = styled.button`
    color: maroon;
    
`
const Button2 = styled.button`
    color: mauve;
    
`

const List = styled.ul`
    list-style-type: none;
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin: 25px;
    padding: 0;
`
const Attack = styled.li`
    margin: 10px;
`
const List2 = styled.ul`
    list-style-type: none;
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin: 25px;
    padding: 0;
`
const Attribute = styled.li`
    margin: 10px;
`
export default function Hero(){
    
    const [ heroList, setHeroList ] = useState([])
    const [ hero, setHero ] = useState([])
    
    

    useEffect(() => {
        axios.get('https://api.opendota.com/api/herostats')
        .then( res => {
            console.log(res)
            setHeroList(res.data)

        })
        .catch( err => {
            console.log(err)
        })
    }, [])




    const attackFilter = ( array , attack ) => {
        if( attack === 'Ranged'){
            console.log("Ranged")
            return setHeroList(array.filter( res => res.attack_type === "Ranged"))
    
        } else if ( attack === 'Melee'){
            console.log('Melee')
            return setHeroList(array.filter( res => res.attack_type === "Melee"))
        } else {
            return setHeroList;
        } 
    }
  

    const AttributeFilter = ( array , attribute ) => {
        if( attribute === 'all'){
            console.log("all")
            return setHeroList(array.filter( res => res.primary_attr === "all"))
    
        } else if ( attribute === 'str'){
            console.log('str')
            return setHeroList(array.filter( res => res.primary_attr === "str"))
        }  else if ( attribute === 'agi'){
            console.log('agi')
            return setHeroList(array.filter( res => res.primary_attr === "agi"))
        } else if ( attribute === 'int'){
            console.log('int')
            return setHeroList(array.filter( res => res.primary_attr === "int"))
        }else {
            return setHeroList;
        } 
    }





//    const getHero = () => {
      
//        axios.get('https://api.opendota.com/api/heroStats')
//        .then( res => {
//            const randomIndex = Math.floor(Math.random() * res.data.length)
           
//            setHero(res.data[randomIndex])
           
//        })
//        .catch( err => {
//            console.log(err)

//        }) 
//     }
   
    const getHero = () => {
        const randomIndex = Math.floor(Math.random() * heroList.length)
        setHero(heroList[randomIndex])
    }
 


    return (
        <Card>
            
            <Name name={hero["localized_name"]}/>
            <Image img={hero.img} alt={hero.name}/>
            

            <List>
               <Attack>
                   <input type='checkbox' value='Ranged' name='attack' onClick={ () => attackFilter(heroList, 'Ranged')}/>Ranged
                </Attack>
                <Attack>
                    <input type='checkbox' value='Melee' name='attack' onClick={ () => attackFilter(heroList, 'Melee')}/>Melee
                </Attack>
               
            </List>
            <List2>
            <Attribute>
                    <input type='checkbox' value='All' name='primary_attr' onClick={ () => AttributeFilter(heroList, 'all')}/>All
                </Attribute>
                <Attribute>
                    <input type='checkbox' value='Str' name='primary_attr' onClick={ () => AttributeFilter(heroList, 'str')}/>Strength
                </Attribute>
                <Attribute>
                    <input type='checkbox' value='Agi' name='primary_attr' onClick={ () => AttributeFilter(heroList, 'agi')}/>Agility
                </Attribute>
                <Attribute>
                    <input type='checkbox' value='Int' name='primary_attr' onClick={ () => AttributeFilter(heroList, 'int')}/>Intelligence
                </Attribute>
            </List2>
            <Button onClick={ () => getHero()}>Random Hero Here</Button>
        </Card>
    )

}