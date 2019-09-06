import styled, { keyframes } from 'styled-components';
 
export const bounce = keyframes`
	0% {
		transform: translateY(20px);
	}

	50% {
		transform: translateY(28px);
	}

	100% {
		transform: translateY(20px);
	}

`