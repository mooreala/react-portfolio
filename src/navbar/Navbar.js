import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from '../img/hamburger-svg.svg';

const Bar = styled.nav`
  font-size: 18px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`
const MainNav = styled.ul`
  padding: 0;
  list-style-type: none;
  display: ${ props => props.display };
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`
const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
` 
const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  &:link,
  &:visited {
    color: #4E3D42;
  }
  &:hover {
    color: #BD9A7A;
    transition: all .2s ease-in;
  }
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
`
const Logo  = styled(NavLink)`
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
`
const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
`
const Hamburger = styled.img`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    display: none;
  }
`
class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {displayNav: (props.displayNav ? 'flex' : 'none')};
  }
  toggleNavBar() {
    this.setState((prevState, props) => {
      switch(prevState.displayNav) {
        case 'none':
          return { displayNav: 'flex'};          
        case 'flex':
        default:
          return { displayNav: 'none'}          
      }
    })
  }
  render() {
    return (
    <Bar>
      <NavBarToggle onClick={() => this.toggleNavBar()}>
        <Hamburger src={ Burger } />
      </NavBarToggle>
      <Logo href="#">ALANA MOORE</Logo>
      <MainNav display={this.state.displayNav}>
          <NavLi>
              <NavLink href="#experience" >EXPERIENCE</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#projects" >PROJECTS</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#art" >ART</NavLink>
          </NavLi>
          {/* <NavLi>
              <NavLink href="#about" >ABOUT</NavLink>
          </NavLi> */}
          <NavLi>
              <NavLink href="#contact" >CONTACT</NavLink>
          </NavLi>
      </MainNav>
    </Bar>
  )}
}

Navbar.propTypes = {
  // decides if we initially display the navbar open or not
  displayNav: PropTypes.bool,
}

export default Navbar;