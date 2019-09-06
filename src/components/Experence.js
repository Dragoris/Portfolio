import React from 'react'
import styled from 'styled-components';
import Break from './Break'
import Container from './Container'
import Heading from './Heading'
import Flex, { Column } from './Flex'


const BGContainer = styled(Container)`
	background-color: #F3EFE0;
`
const Row = styled.div`
	display: flex;
	flex-direction: row;
`

const Place = styled(Flex)`
	flex: 1;

`
const Info = styled(Flex)`
	flex: 2;
`
const Experence = () => (
	<BGContainer>
		<Heading h1 center>Experence</Heading>
		<Break />

		<Heading h2 left>Career</Heading>
		<Flex>
			<Place column>
				<h4>Coda Compliance</h4>
				<p>June 2017 - Current</p>
			</Place>
			<Info column>
				<strong>Front End Developer</strong>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
			</Info>
		</Flex>

		<Break />

		<Heading h2 left>Education</Heading>

		<Flex>
			<Place column>
				<h4>UCSC Extension</h4>
				<p>2016-2017</p>
			</Place>
			<Info column>
				<strong>Web Programming and Development</strong>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
			</Info>
		</Flex>
		<Flex>
			<Place column>
				<h4>General Assembly</h4>
				<p>2015 - 2016</p>
			</Place>
			<Info column>
				<strong>Javascript Web Devlopment</strong>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
			</Info>
		</Flex>
		<Flex>
			<Place column>
				<h4>San Jose State</h4>
				<p>2012 - 2017</p>
			</Place>
			<Info column>
				<strong>B.A - Business Marketing</strong>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
			</Info>
		</Flex>

	</BGContainer>
)

export default Experence