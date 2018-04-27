import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activeItem: this.props.activeItem
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div id="NavBar">

        <Menu inverted stackable>

          <NavLink to="/home" exact>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><Icon name='home' />Home</Menu.Item>
          </NavLink>

          <NavLink to="/projects" exact>
            <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}><Icon name='wrench' />Projects</Menu.Item>
          </NavLink>

          <NavLink to="/resume" exact>
            <Menu.Item name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick}><Icon name='address card' />Resume</Menu.Item>
          </NavLink>

          <NavLink to="/blog" exact>
            <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick}><Icon name='browser' />Blog</Menu.Item>
          </NavLink>

          <NavLink to="/skills" exact>
            <Menu.Item name='skills' active={activeItem === 'skills'} onClick={this.handleItemClick}><Icon name='lab' />Skills</Menu.Item>
          </NavLink>

          <a href='https://github.com/wbdana/' target='_blank' rel="noopener noreferrer">
            <Menu.Item name='github'><Icon name='github' />GitHub</Menu.Item>
          </a>

          <a href='https://www.linkedin.com/in/wbdana/' target='_blank' rel="noopener noreferrer">
            <Menu.Item name='linkedin'><Icon name='linkedin' />LinkedIn</Menu.Item>
          </a>

          <a href='https://twitter.com/_wbdana' target='_blank' rel="noopener noreferrer">
            <Menu.Item name='twitter'><Icon name='twitter' />Twitter</Menu.Item>
          </a>

        </Menu>
      </div>
    )
  }
}


export default NavBar;
