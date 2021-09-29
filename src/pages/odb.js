import * as React from 'react'
import Layout from '../components/layout'
import introa from './odb.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Old Digibox - Alistair Brazier</title>
        </Helmet>
           <div class="introa">
      <h1>Old Digibox User Community</h1>
      <h2>A small online community of Sky Digibox enthusiasts</h2>
      </div>
      <div class="row">
      <div class="container">  
      <a href="http://www.olddigibox.com" class="columnprog">
    <h3>Old Digibox</h3>
    

<div class ="columnint">

  <StaticImage
        alt="An image of various Sky EPG versions."
        src="../images/odb.png"
      />
</div>
  
  <div class ="columnint">
  <p>In June 2019, I created the Old Digibox user community. A few years ago, I was given a Sky Digibox from a neighbour, which I started to explore and investigate with. This lead me on to developing an extensive interest in the platform, both with the company's historical and current products. Nowadays, the user community has expanded to over a hundred members. The community maintains an online presence, with a website that contains information on all of the legacy equipment that we own. Some highlights include several special edition STBs, and an original model Amstrad Digibox that hasn't been updated since the year 2000. I made the decision to create this community, as I thoroughly enjoy sharing my interests, projects and discoveries with other people, which is a core principal of how I approach many work situations. 
</p>
<StaticImage
        alt="Click here to view the wesbite."
        src="../images/viewsite.png"
      />
</div>
  
  
</a>
</div>
</div>


      
    </Layout>
    
    
  )
}
export default IndexPage