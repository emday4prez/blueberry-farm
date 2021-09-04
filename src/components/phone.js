import React from "react"
import "@fontsource/reenie-beanie"
import styled from "@emotion/styled"
const PhoneNumber = () => {
  return (
    <>
      <PhoneContainer>
        <TextH2> Any questions? Call us! </TextH2>
       <a href="tel:541-752-0787"> <TextH1> 541-752-0787 </TextH1></a> 
      </PhoneContainer>
    </>
  )
}

export default PhoneNumber

const PhoneContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  background-color: #3e46a5;
`
const TextH1 = styled.h1`
  margin: 1rem;
  background-color: #3e46a5;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Reenie Beanie", helvetica;
  font-size: 6rem;
text-decoration:none;
  text-align: center;
`
const TextH2 = styled.h2`
  background-color: #3e46a5;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Reenie Beanie", helvetica;
  font-size: 4rem;
  padding: 2rem;
  text-align: center;
`
