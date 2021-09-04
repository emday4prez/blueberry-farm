import React from "react"
import styled from "@emotion/styled"

import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import "@fontsource/reenie-beanie"

const Frozen = () => {
  return (
    <InfoContainer>
      <Container
        css={css`
          height: 75%;
          width: 95%;
          max-width: 700px;
         
        `}
      >
        <StaticImage
          as="section"
          src="../images/hand.png"
          alt="picking blueberries"
          placeholder="tracedSVG"
          layout="constrained"
          className="info-img"
        />
      </Container>
      <TextContainer>
        <InfoText>
Customers are welcome to come to the farm to purchase pre-picked fruit. Please call ahead to make an appointment.
Frozen blueberries are available in 5 pound bags. These berries were picked and frozen the same day during the peak of the season.

I also have lower grade berries available that are great for juice or jams.



        </InfoText>
      </TextContainer>
    
    </InfoContainer>
  )
}

export default Frozen

const Container = styled.div`
  margin: .5rem;
  max-width: 100%;
  display: flex;
  flex-direction: row;
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