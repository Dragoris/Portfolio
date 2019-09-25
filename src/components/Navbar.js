import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import { Link } from "react-scroll";

import Image from './Image'


const Navbar = () => {

    const [scrollY, setScrollY] = useState(false);
    const [hovered, setHovered] = useState(false); 

    function check() {
        if (window.pageYOffset + 65 >= window.innerHeight ) setScrollY(true)
        else setScrollY(false)
        
    }
    
    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", check);
        }

        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
          window.removeEventListener("scroll", check);
        };
    });

    function handleHover(bool){
        setTimeout(function(){
            setHovered(bool)
        }, 250)
    }

    return (
		<Nav fixed={scrollY}>
			<List>
                <Logo
                    
                >
                    <StyledLogo
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onMouseOver={()=> handleHover(true)}
                        onMouseLeave={()=> handleHover(false)}
                        
                    >
                        <StyledImg 
                            styleprop={ {
                                height: '48px',
                                width: '48px',
                                position: 'absolute',
                                display: (hovered ? 'none' : 'block')
                            }} 
                            filename="warriors-alt.png"
                            
                        />
                        <StyledImg 
                            styleprop={ {
                                height: '48px',
                                width: '48px',
                                position: 'absolute',
                                display: (hovered ? 'block' : 'none')
                            }} 
                            filename="warriors.png"

                        />
                    </StyledLogo>                    
                </Logo>

				<Item>
                    <StyledLink
                      activeClass="active"
                      to="profile"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                        Profile
                    </StyledLink>
                </Item>
                <Item>
                    <StyledLink
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                        Skills
                    </StyledLink>
                </Item>
                <Item>
                    <StyledLink
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                        Projects
                    </StyledLink>
                </Item>

			</List>
		</Nav>
    )
}



const StyledImg = styled(Image)`
    

    @media(max-width: 800px){
        flex-basis: 100%;
        justify-content: end;
    }
`

const Nav = styled.nav`
    border: 0px;
    background-color: #222222;
    position: absolute;
    top: 100%;
    right: 5%;
    width: 100px;
    z-index: 999;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;

    @media(max-width:800px){
        display: flex;
        top: 0;
        width: 100%;
        position: fixed;
        border-radius: 0px;
        right: 0;
        transition: all .5s


    }

    ${({ fixed }) => fixed && `
        position: fixed;
        top: 60px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    `}

`

const List = styled.ul`
	padding-left: 0px;
    margin: 0;
    list-style: none;

    @media(max-width:800px){
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }
`

const Item = styled.li`
	display: flex;
    align-items: center;
    height: 70px;

    @media(max-width:800px){
        height: unset;
        padding: 15px;
        margin: 10PX;
    }


`
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    width: 100%;
    text-decoration: none;

    &:hover{
		color: #22A39F;

    }

    &.active{
        background-color: #22A39F;
        color: #fff;
        height: 100%;
        border-radius: 5px;

        @media(max-width:800px){
            color: #22A39F;
            background-color: #222;
        }

    }

`
const StyledLogo = styled(StyledLink)`
    width: 50%;
    transition: transform 1s;
    transform: rotateZ(0deg);
    
    &:hover{
        transition: transform 1s;
        transform: rotateZ(180deg);
    }
    &.active{
        background-color: #222;
    }

`
const Logo = styled(Item)`
    justify-content: center;
    
    
    @media(max-width: 800px){
        margin-right: auto;
        padding-left: 30px;
    }

    
    
    
`
export default Navbar