
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef} from "react"
import DrawToggleButton from './DrawToggleButton';
import SideBar from './SideBar';
import BackDrop from './BackDrop';

const Header = ({ siteTitle }) => {

    const data = useStaticQuery(graphql`
  query {
    apLogo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }


  }
`)

const [state, setState] = useState({
  sideBarOpen : false
})

const toggleSideBarClick = () => {
  setState({sideBarOpen : !state.sideBarOpen })
}

const backDropClick = () => {
  setState({sideBarOpen : false })
}

const {sideBarOpen} =  state;

const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

// //then
// <Navbar
//     backgroundColor={navBackground ? 'white' : 'transparent'}
//     style={{ transition: '1s ease' }}
//   />
let navClasses = 'nav transparent';

navBackground ? navClasses = 'nav white' : navClasses = 'nav transparent'
  
  return(

    <div style={{ height: '100%' }}>
    
    <header className={ navClasses } style={{ transition: '.8s ease' }} role="banner">

     <div className="container">
     <nav className="nav__navigation">
        <div className="nav__logo">
          <Link to="/">
            Image Here
             {/* <Img style={{ width: '70px' }} fluid={data.apLogo.childImageSharp.fluid} /> */}
             </Link>
        </div>
          <div className="spacer"/>
            <div className="nav__items">
              <ul>
                <li><Link to="/exhibitions">Exhibit</Link></li>
                <li><Link to="/">Sponsors</Link></li>
                <li><Link to="/partnership">partnership</Link></li>
                <li><Link to="/">Volunteer </Link></li>
            
                <li><Link to="/">Contact Us </Link></li>
              </ul>

            </div>
            <div className="nav__toggle">
              <DrawToggleButton click={toggleSideBarClick}/>
            </div>


        </nav> 
       </div>   
    </header>
    <SideBar show={sideBarOpen} click={ backDropClick }/>
    { sideBarOpen && <>  <BackDrop click={backDropClick}/> </> }

  </div>

  )
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
