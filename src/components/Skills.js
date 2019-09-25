import React from 'react'
import styled from 'styled-components'
import Plx from 'react-plx'

import Container from './Container'
import Heading from './Heading'
import Break from './Break'
import Image from './Image'

const Explosion = styled.div`
	height: 24rem;
    margin: 0 auto 10rem;
    position: relative;
    width: 24rem;
`

const ExplosionBox = styled(Plx)`
    float: left;
    height: 6.7rem;
    margin: 0.3rem;
    width: 5.4rem;
    text-align: center;

`
const BGContainer = styled(Container)`
	background-color: #F3EFE0;
`

const BOXES_PER_ROW = 4;
const ROWS = 3;
const BOXES = [];

const icons = [
  'Javascript',
  'Python',
  'HTML5',
  'CSS3',
  'React',
  'Redux',
  'Firebase',
  'Github',
  'Bootstrap',
  'Styled',
  'jQuery',
  'Gatsby',
];

let count = 0;
for (let i = 0; i < ROWS; i++) {
  BOXES.push([]);
  for (let j = 0; j < BOXES_PER_ROW; j++) {
    const top = i < ROWS / 2;
    const yFactor = top ? -1 : 1;
    const left = j < BOXES_PER_ROW / 2;
    const xFactor = left ? -1 : 1;
    const inside = (i === 1 || i === 2) && (j === 1 || j === 2); 
    const scaleFactor = inside ? 0.5 : 1;
    const start = inside ? 40 : 100;
    const offset = inside ? 40 : 100;
    const rotationFactor = Math.random() > 0.5 ? 180 : -180;


    BOXES[i].push({
      data: [
        {
          start: 'self',
          startOffset: '80vh',
          duration: 500,
          name: 'first',
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: 'opacity',
            },
            {
              startValue: 0,
              endValue: Math.random() * rotationFactor,
              property: 'rotate',
            },
            {
              startValue: 1,
              endValue: 1 + Math.random() * scaleFactor,
              property: 'scale',
            },
            {
              startValue: 0,
              endValue: (start + Math.random() * offset) * xFactor,
              property: 'translateX',
              unit: '%',
            },
            {
              startValue: 0,
              endValue: (start + Math.random() * offset) * yFactor,
              property: 'translateY',
              unit: '%',
            },
          ],
        },
      ],
      icon: icons[count],
      
    });
    count++
  }
}

const renderBoxes = () => {
    const boxes = [];

    BOXES.forEach((row, index) => {
      row.forEach((box, boxIndex) => {
      	const icon = box.icon
      	const margin = (icon === 'Github' || icon === 'Gatsby' || icon === 'Redux' ? '5px' : '0px')

        boxes.push(
          <ExplosionBox
            key={ `${ index } ${ boxIndex }` }
            parallaxData={ box.data }
            >
            	<Image 
            		filename={icon + '.png'}
            		styleprop={{margin: margin}}/>
            	<div>{icon}</div>
          </ExplosionBox>
        );
      });
    });

    return boxes;
  }

const Skills = () => (
	<BGContainer id="skills">
		<Heading center>Skills</Heading>
		<Break />

		<Explosion>
        	{ renderBoxes() }
      </Explosion>
	</BGContainer>
	
)

export default Skills

