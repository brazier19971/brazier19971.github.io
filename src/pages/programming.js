import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from "react-helmet"

import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="">
              <Helmet>
          <meta charSet="utf-8" />
          <title>Programming - Alistair Brazier</title>
        </Helmet>
           <div class="intro">
      <h1>Programming</h1>
      <h2>Take a look at some of my programming projects...</h2>
      </div>
      <div class="row">
      <div class="container">  
  <div class="columnprog" >
    <h3>University Projects (C#)</h3>
    

<div class ="columnint">

  <StaticImage
        alt="Image of some basic C# code."
        src="../images/programmingsmall.png"
      />
</div>
  
  <div class ="columnint">
  <p>C# development has featured largely throughout the course of my degree, with two significant projects available on request (due to university plagiarism restrictions). As part of the 'Introduction to Programming' module within the first year, it involved the creation of a fuel station simulation, with simulated vehicles being assigned to pumps, and features different classes of vehicles and amounts chosen randomly, with logs kept on each. This project yielded a score of 86%. In second year, as part of the 'Software Enginnering' module, I was involved in group work to create a database management system for a fictional employment business. This project, involved the use of Windows Forms and SQL in addition to C#. I made a significant contribution to this work, which attracted a mark of 89%. </p>
</div>
  

       
        

      
  </div>
  <div class="columnprog" >
    <h3>AB eMeter (Planned undergraduate major project)</h3>
    
    <div class ="columnint">

<StaticImage
      alt="Image of some television programming information."
      src="../images/project.png"
    />
</div>

<div class ="columnint">
<p>A proposed, virtual replacement for the hardware Broadcasters' Audience Research Board (BARB) Peoplemeter, theoretically compatible with many major set top boxes. AB eMeter takes advantage of modern day STB services, including UPnP endpoints and SSDP discovery. The viewing information is captured from a remote program and uploaded to management system where the collected data can be analysed in any way that is seen fit. This project is in the process of obtaining ethical approval, and development will begin very shortly. A second year research methodologies proposal for this work attracted a mark of 97%.</p>
</div>

  </div>
  <div class="columnprog" >
    <h3>Project Unsilenced (C#)</h3>
    
    
    <div class ="columnint">

<StaticImage
      alt="Demonstration image of a television running Sky software."
      src="../images/epgmusic.png"
    />


</div>

<div class ="columnint">
<p>For 20 years, Sky Plc, operators of the Sky Digital satellite service broadcast a selection of background music which played alongside SkyGuide, the company's legacy electronic programming guide (EPG). This music was removed in January 2018. I decided to try and create a simulation program that can detect when a compatible Sky STB is displaying the EPG so that music can be played. To create this, footage of the EPG was analysed in great detail to ascertain how the music should be played and where. The first version of this program used colour detection from a displayed capture feed of the STB's output. Several pixels were analysed to detect wheter the EPG was active. Legacy Sky STBs have RS-232 ports that are intended to transmit information to the Sky Gnome device. The second revision (Mk2) uses this protocol to quickly and reliably unmute the played music. It features protection measures from unintentional activation, and a programmable activation delay to simulate a tuning delay. This is a personal project, and it is available to view now.</p>

<a href="https://drive.google.com/u/0/uc?id=1jdOja8CFa8l0792QT2sZkHMhuOzYq8gj&export=download" class="columnint">
<StaticImage
      alt="Click here for a video demonstration"
      src="../images/videodemo.png"
    />

  </a>
  <a href="https://github.com/brazier19971/Unsilenced-Mk2" class="columnint">
  <StaticImage
      alt="Click here to view on GitHub"
      src="../images/github.png"
    />

  </a>



</div>

  </div>
  <div class="columnprog" >
    <h3>This Website (React.JS)</h3>
    
    
    <div class ="columnint">

<StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/site.png"
    />
</div>

<div class ="columnint">
<p>
I am always willing to step up to new challenges. Now, I am exploring additional programming languages in my spare time. One area I have focused on is the React.JS web programming language. This website is one of my first projects created in this language, and I aim to improve and develop my skills within this area within the near future. </p>
</div>
<a href="https://github.com/brazier19971/brazier19971.github.io" class="columnint">
  <StaticImage
      alt="Click here to view on GitHub"
      src="../images/github.png"
    />

  </a>
  </div>
</div>

</div>



      
    </Layout>
    
    
  )
}
export default IndexPage