import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from './Image'
import Break from './Break'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'


const Column = styled.div`
  flex-direction: column;
  flex: 1 1 0;
  margin 0 25px;
  width: 0;

  @media(max-width: 1000px){
    width: auto;
    max-width: 50%;
    text-align: center;
  }
`
const DetailsFlex = styled(Flex)`
  align-items: center;
  
  @media(max-width: 1000px){
    flex-direction: column;
    align-items: center;
  }
`
const Link = styled.a`
  display: Flex;
  align-items: center;
  color: #222;
  text-decoration: none;
  padding-left: 10px;

  &:hover{
    color: #22A39F;
  }

`
const HoverFlex = styled(Flex)`
  cursor: pointer;
  color: #222;
  padding-top: 20px;
  &:hover{
    color: #22A39F;
  }
`
const Profile = () => (
    <Container id="profile">
      <Heading h1 center>Profile</Heading>
      <Break />
      
      <DetailsFlex>
        <Column>
          <Image styleprop={{minWidth: "200px"}} filename="Matt.png"/>
        </Column>
        <Column>
          <Heading h2>About me</Heading>
          <p>
            Hi! I'm Matt, a front-end developer that loves to find creative solutions to complex problems. I am currently working at Coda Compliance, where we are automating the building entitlement process. <br /> When I'm not coding you'll find me on the basketball court or backpacking through the wilderness for days on end.
          </p>
        </Column>
      </DetailsFlex>
      <Flex justifyAround>
        <HoverFlex alignCenter>
          <Link target="_blank" href="https://www.linkedin.com/in/matthew-trower/">
            <FontAwesomeIcon style={{marginRight: '10px'}} size="2x" icon={['fab', 'linkedin']} />
            LinkedIn
          </Link>
        </HoverFlex>
        <HoverFlex alignCenter>
          <Link target="_blank" href="https://github.com/Dragoris">
            <FontAwesomeIcon style={{marginRight: '10px'}} size="2x" icon={['fab', 'github-square']} />
            Github
          </Link>
        </HoverFlex>
        <HoverFlex alignCenter>
          <Link target="_blank" href="mailto:mtrower42@gmail.com">
            <FontAwesomeIcon style={{marginRight: '10px'}} size="2x" icon="envelope-square" />
            Email
          </Link>
        </HoverFlex>
        <HoverFlex alignCenter>
          <Link target="_blank">
            <FontAwesomeIcon style={{marginRight: '10px'}} size="2x" icon={['far', 'file-pdf']} />
            Resume
          </Link>
        </HoverFlex>
      </Flex>
    </Container>
)

export default Profile