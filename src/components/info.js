import React from "react"
import styled from "@emotion/styled"

import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import "@fontsource/reenie-beanie"

const Info = () => {
  return (
    <InfoContainer>
      <TextContainer>
        <InfoText>
          In 2005, I purchased property on Kiger Island and established a small
          blueberry farm. I grow the berries in a sustainable farming practice,
          minimizing any chemicals. Due to the small size of the farm, all fruit
          is hand picked and hand packed. Although this is labor intensive, I’m
          able to pick the blueberries at the perfect time and deliver them
          within 24 hours from the field.
        </InfoText>
      </TextContainer>
      <Container
        css={css`
          height: 75%;
          width: 95%;
          max-width: 700px;
         
        `}
      >
        <StaticImage
          as="section"
          src="../images/wild.jpg"
          alt="picking blueberries"
          placeholder="tracedSVG"
          layout="constrained"
          className="info-img"
        />
      </Container>
    </InfoContainer>
  )
}

export default Info

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