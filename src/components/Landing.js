import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll";

import { bounce } from '../styles/KeyFrames';





const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "town.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (

	          <BackgroundImage 
              Tag="section"
              className={className}
              fluid={imageData}
              backgroundColor={`#040e18`}
              id="landing"
	          >

	            <TextArea>

	            	<Name>Matt Trower </Name>
	            	<Title>Web Developer</Title>

	            </TextArea>
	            <Overlay />
	            <ScrollDown>
                <Link
                  activeClass="active"
                  to="profile"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                >
  	            	<Arrow>
  	            		<FontAwesomeIcon icon="chevron-down" />
  	            	</Arrow>
                </Link>
	            </ScrollDown>

	          </BackgroundImage>

       )
     }
     }
    />
)


const Landing = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background: no-repeat center fixed;

`
const Overlay = styled.div`
	background-color: hsla(0, 0%, 0%, 0.5);
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0.65;
  filter: alpha(opacity=75);
  z-index: 2;
`
const TextArea = styled.div`
	position: relative;
    top: 33%;
    z-index: 4;
    text-align: center;
    color: #fff
`

const Name = styled.h1`
    padding-bottom: 20px;
    border-bottom: 1px solid #FFFFFF;
    border-bottom-color: rgba(255,255,255,0.35);
    display: inline-block;
    font-size: 63px;

`

const Title = styled.p`
	font-size: 28px;
`
const ScrollDown = styled.div`
    height: 70px;
    width: 100px;
    display: block;
    position: absolute;
    bottom: 0px;
    right: 5%;
    background-color: #222222;
    text-align: center;
    z-index: 6;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
`
const Arrow = styled.div`
    color: #22A39F;
    font-size: 40px;
    margin-top: -15px;

    animation: ${bounce} 1.2s linear infinite normal;
}
`


export default Landing