// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
     
       <StaticImage
        alt="Blueberries close up"
        src="../images/blueberries.jpeg"
      />
    </main>
  )
}

// Step 3: Export your component
export default IndexPage