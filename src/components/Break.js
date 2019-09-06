import React from 'react'
import styled from 'styled-components';

const LineBreak = styled.hr`
	margin: 40px 0px;
	background: #727878;
	opacity: 0.2;
`

const Break = (props) => (
	<LineBreak style={props.styleprop}/>
)

export default Break