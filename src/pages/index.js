
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import "@fontsource/reenie-beanie"
import PhoneNumber from "../components/phone"
import Location from "../components/location"
import Info from '../components/info';
import Hero from '../components/hero';



const IndexPage = () => {
  return (
    <main>
      <title>Kiger Island Blues</title>
     
       {/* <StaticImage
        alt="Blueberries close up"
        src="../images/blueberries.jpeg"
      />
       */}
       <Hero/>

      <Location/>
       <PhoneNumber/>
<Info/>
     
      
    </main>
  )
}

// Step 3: Export your component
export default IndexPage