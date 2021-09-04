import React from "react"
import styled from "@emotion/styled"

import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import "@fontsource/reenie-beanie"

const Where = () => {
  return (
   <>
<Title>Where to Buy</Title>
    <InfoContainer>  
   
     {/* <Container
        css={css`
          height: 75%;
          width: 95%;
          max-width: 700px;
         
        `}
      >
       <Title>Where to Buy</Title>
        <StaticImage
          as="section"
          src="../images/hand.png"
          alt="picking blueberries"
          placeholder="tracedSVG"
          layout="constrained"
          className="info-img"
        />
      </Container> */}
     
       <div> <City>Portland</City>
        <Store>Market of Choice</Store>
        <Store>Barbur World Market</Store></div>
       <div><City>Corvalis</City>
         <Store>Market of Choice</Store>
         <Store>Peoria Road Farm</Store> </div>
         <div><City>Albany</City>
           <Store>Midway Farms</Store></div>
          <div>

                <City>Eugene</City>
           <Store>Market of Choice</Store>
          </div>

     
      
     
   
    </InfoContainer>
   </>
    
  )
}

export default Where

const Container = styled.div`
  margin: .5rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  
  
`
const TextContainer = styled.div`
  margin: 1rem;
  background: #3e46a5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  border-radius: 2rem;
  padding: 2rem;
`
const InfoContainer = styled.div`
  min-height: 50vh;
  padding: 1rem;
  background: white;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  background-color:  #3e46a5;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 0;
    grid-gap: 1px;
  }
`
const InfoText = styled.p`
  font-size: 1rem;
  color: white;
  background: #3e46a5;
  font-family: Helvetica, sans-serif;
  line-height: 1.25rem;

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
  }
`
const Title = styled.h1`
color: white;
 font-family: "Reenie Beanie", helvetica;
  font-size: 5rem;
  background-color: #3e46a5;
  text-align:center;
  padding:2rem
`

const City = styled.h2`
color: white;
 font-family: "Reenie Beanie", helvetica;
  font-size: 4rem;
  text-align:center;
`
const Store = styled.p`
color: white;
 font-family:  helvetica;
  font-size: 1.3rem;
  text-align:center;
`