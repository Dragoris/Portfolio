import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Break from './Break'


const BGContainer = styled(Container)`
	background-color: #434242;
`
const Link = styled.a`
	display: Flex;
	align-items: center;
	color: #fff;
	text-decoration: none;
	padding-left: 10px;

	&:hover{
		color: #22A39F;
	}

`
const HoverFlex = styled(Flex)`
	cursor: pointer;
	color: #fff;
	&:hover{
		color: #22A39F;
	}
`

const Contact = () => (
	<BGContainer id="contact">
		<Heading h1 center style={{color: '#fff'}}>Contact</Heading>
		<Break styleprop={{background: '#fff'}}/>
		<Flex justifyBetween>
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
	</BGContainer>
)

export default Contact