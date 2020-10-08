import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import './Bio.css';
const bioFoto = require('./../img/bio-foto.jfif');
const cv = require('./../files/CV_en.pdf');

function Bio() {
    return (
        <Jumbotron fluid className="bio" id="bio">
                <h1>Short bio</h1>
                <Image src={bioFoto} thumbnail className="bio-foto"/>
                <p>
                    Student at <a href="https://www.muni.cz/">Masaryk University</a>, <a href="https://www.fi.muni.cz/">
                    Faculty of Informatics</a>, Brno, Czech Republic. 
                    Currently studies full-time Computer systems, communication and security, 
                    Master's degree programme with specialization Software systems. 
                    Web application developer at IBM Global Services Delivery Centre Czech Republic, s.r.o.
                </p>
                <p>
                    Received Bachelor's degree in Informatics in area of Computer Systems and Data Processing 
                    at Masaryk University in Brno, Czech Republic, in 2019.
                </p>
                <p>
                    For more information see my <a href={cv} >Curriculum Vitae</a>.
                </p>
        </Jumbotron>
    );
  }
  
  export default Bio;