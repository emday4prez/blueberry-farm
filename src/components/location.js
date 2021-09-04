import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"


const Location = () => {
  return (
    <>
      <LocationContainer>
        <TextContainer>
          <h1>Our Location</h1>
          <SubTitle  >The farm is located about 5 miles south of Corvallis.</SubTitle>
         
          <Address>2322 SE Kiger Island Dr.</Address>
          <Address> Corvallis, OR 97333</Address>
          <MapLink href="https://goo.gl/maps/sRjjGiU7UUCzuYETA" target="_blank">
            Google Maps Link
          </MapLink>
        </TextContainer>
        <MapContainer
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 75%;
            width: 95%;
            max-width: 700px;
          `}
        >
          <StaticImage
            as="section"
            src="../images/map85.png"
            alt="location of farm on map"
            placeholder="tracedSVG"
            layout="constrained"
          />
        </MapContainer>
      </LocationContainer>
    </>
  )
}

export default Location

const MapContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
`
const LocationContainer = styled.div`
  min-height: 75vh;
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

const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  color: #3e46a5;
  text-align: center;
`
const MapLink = styled.a`
  color: #3e46a5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
`

const Address = styled.h4`
padding:0;
margin: 0;
`
const SubTitle = styled.h4`
text-align: center;
`