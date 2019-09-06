import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faExternalLinkAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import favicon from '../images/warriors-alt.png'


import Layout from "../components/layout"
import Landing from "../components/Landing"
import Profile from "../components/Profile"
import Navbar from "../components/Navbar"
import Experence from "../components/Experence"
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from "../components/Contact"


library.add(faChevronDown, faExternalLinkAlt, faEnvelopeSquare, 
	faLinkedin, faGithubSquare, faFilePdf)

const IndexPage = () => (
  <React.Fragment>
	<Helmet>
		<link rel="icon" href={favicon} />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>

	</Helmet>

    <SEO title="Matt Trower" />
    <Landing />
    <Navbar />
    <Profile />
    <Skills />
    <Projects />


</React.Fragment>
)

export default IndexPage
