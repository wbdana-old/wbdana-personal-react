import React from 'react';
import { Header, Menu, Icon } from 'semantic-ui-react';

class NavBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activeItem: this.props.activeItem
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.updateActivePage(name)

  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="NavBar">
        <Header size="huge">William Dana</Header>
        <Header size="medium">This site is still under construction! But don't worry, I'm a developer...</Header>
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><Icon name='home' />Home</Menu.Item>
          <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick}><Icon name='book' />Bio</Menu.Item>
          <Menu.Item name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick}><Icon name='address card' />Resume</Menu.Item>
          <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick}><Icon name='browser' />Blog</Menu.Item>
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}><Icon name='mail outline' />Contact</Menu.Item>
          <a href='https://github.com/wbdana/' target='_blank' rel="noopener noreferrer"><Menu.Item name='github'><Icon name='github' />GitHub</Menu.Item></a>
          <a href='https://www.linkedin.com/in/williambdana/' target='_blank' rel="noopener noreferrer"><Menu.Item name='linkedin'><Icon name='linkedin' />LinkedIn</Menu.Item></a>
          <a href='https://plus.google.com/u/0/102461052269867658783' target='_blank' rel="noopener noreferrer"><Menu.Item name='googleplus'><Icon name='google' />Google +</Menu.Item></a>
          <a href='https://twitter.com/WDana17' target='_blank' rel="noopener noreferrer"><Menu.Item name='twitter'><Icon name='twitter' />Twitter</Menu.Item></a>
          <a href='https://www.facebook.com/william.b.dana' target='_blank' rel="noopener noreferrer"><Menu.Item name='facebook'><Icon name='facebook' />Facebook</Menu.Item></a>
        </Menu>
      </div>
    )
  }
}


export default NavBar
