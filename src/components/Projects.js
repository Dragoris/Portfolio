import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Break from './Break'
import Image from './Image'
import CodaVideo from '../images/coda-video.mp4'

const Effect = styled.figure`
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 100%;
    background: #22A39F;
    color: #FFF;
    margin: 10px;
    border: 1px solid #222;

`
const Row = styled(Flex)`
    justify-content: center;

`

const StyledIcon = styled(FontAwesomeIcon)`
	background: #22A39F;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 5px;

`

const CaptionH = styled.h3`
    color: #FFF;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    padding-bottom: 10px;
    margin-bottom: 0;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    z-index: 1;

    &:after{
    	position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 2px;
	    background: #fff;
	    content: '';
	    transition: transform 0.35s;
	    transform: translate3d(-100%,0,0);
    }
`
const CaptionP = styled.p`
    padding-top: 10px;
    margin: 0;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(100%,0,0);
    z-index: 1;

`
const Link = styled.a`
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
`
const Caption = styled.figcaption`
    padding: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;

    &:hover ${CaptionH}{
    	opacity: 1;
    	transform: translate3d(0,0,0);

    	&:after{
    		transform: translate3d(0,0,0);

    	}
    }

    &:hover ${CaptionP}{
    	opacity: 1;
	    transform: translate3d(0,0,0);
    }
    &:hover {
		opacity: 0.2;
		background: #22A39F;

    }
    &:hover{
    	background: #22A39F;
    	opacity: .8;
    	z-index: 0;
    }
`
const StyledVideo = styled.video`
	margin: 0;
`

const ShowcaseP = styled.p`
	padding: 15px;
    text-align: justify;
`
const Wrapper = styled.div`
	padding: 0 50px;
`
const Project = (props) => (
	<Effect>
		<Image filename={props.filename} />
		<Caption>
			<CaptionH>{props.title}</CaptionH>
			<CaptionP>{props.text}</CaptionP>
			<CaptionP><strong>Skills: </strong>{props.skills}</CaptionP>
			<Link href={props.link} />
			<StyledIcon size="2x" icon="external-link-alt" />
		</Caption>
	</Effect>
)
const Showcase = (props) => (
	<Wrapper>
		<Heading h2 center>codacompliance.com</Heading>
		<StyledVideo width="100%" preload='auto' loop autoPlay muted controls>
			 <source src={CodaVideo} type="video/mp4" />
			 Your browser does not support HTML5 video.
		</StyledVideo>
		<ShowcaseP >
			I developed the front-end for a single page application that allows users to navigate the city entitlement process 
			and get their construction project approved faster. After searching for an address 
			users are walked through a workflow to customize their project and receive all relevant zoning, 
			regulatory, and building code information, as well as a gantt chart of their project's time to completion.
			<br/>
			Other features include a Map with toggleable zoning layers and elevation information and 
			a 'Turbo-Tax' style set of dynamic questions that determine which Due Diligence requirements apply
			and provides all of the needed forms.
			<br/><br/>
			<strong>Skills: </strong> Javascript, jQuery, Bootstrap, Google Maps APIs


		</ShowcaseP>
	</Wrapper>
)
const Projects = () => (
	<Container id="projects">
		<Heading h1 center>Projects</Heading>
		<Break />
		<Showcase />
		<Row >
			<Project 
				title="Entitlement Risk Report"
				text="A site where users can download a custom report detailing the political risk involved in undertaking a construction project."
				link="https://entitlementrisk.com"
				filename="entitlement.PNG"
				skills="Javascript, jQuery, Bootstrap, Stripe"
			/>
			<Project 
				title="Risk Assessment Demo"
				text="Uses dynamic charts and tables to illustrate political donations to council members and where they come from."
				link="https://entitlementrisk.com/peoplepermits/people/"
				filename="people.PNG"
				skills="React, Redux, Bootstrap, Chart.js"
			/>
			<Project 
				title="NBA Trade App"
				text="Randomly generates a trade that users can vote on to decide who would get the better deal."
				link="https://github.com/Dragoris/NBA-Trade-App"
				filename="nba.PNG"
				skills="Javascript, jQuery, Bootstrap"
			/>
		</Row>
	</Container>
)

export default Projects
