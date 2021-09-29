import * as React from 'react'
import Layout from '../components/layout'
import {
  intro,
  container,

} from './index.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Alistair Brazier</title>
        </Helmet>
           <div class="intro">
      <h1>Hello.</h1>
      <h2>My portfolio covers a range of various projects encompassing a wide range of platforms and applications. Take a look at some of my projects today...                                                                   </h2>
      </div>
      <div class="row">
      <div class="container">  

      <a href="/programming" class="column">
  
    <h3>Programming and Development</h3>
    
      <StaticImage
        alt="AB Programming"
        src="../images/programming.png"
        
      />
      <p>I enjoy creating software projects, both in my spare time and as a part of my university course. Mostly, I specialise in development of C# projects, however, I am beginning to introduce other languages such as SQL, and React.JS. Take a look at some of my projects that I have developed today.</p>
  
  </a>
  
  <a href="/odb" class="column">
    <h3>Old Digibox User Community</h3>
    
    
      <StaticImage
        alt="Old Digibox"
        src="../images/odb.png"
        
      />
      <p>I am keen to share my projects and interests with others. In June 2019, I created the Old Digibox user community, and since its creation, has expanded to around 100 members. We're mainly an archival group of old Sky Digital content, and I maintain a large collection of legacy Sky equipment.</p>
  </a>


  <a href="/profile" class="column">
    <h3>Personal Profile</h3>
    
    
      <StaticImage
        alt="Personal Profile"
        src="../images/prof-interest.png"
        
      />
      <p>A short personal profile detailling some of my interests and some key information about me.</p>
      </a>

  <a href="https://drive.google.com/u/0/uc?id=1r9EdIXGAy42Cgd7eXreKhd5orleh819n&" class="column">
    <h3>Download CV</h3>
    <StaticImage
        alt="CV"
        src="../images/cv.png"
        
      />
    
      <p>Click here to download a PDF copy of my current CV.</p>
  </a>
</div>
</div>



      
    </Layout>
    
    
  )
}
export default IndexPage