import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Footer = () => {
  return(
    <div id="Footer">
      <Menu inverted>
        <Menu.Item name='email'>
          <Icon name='mail outline' />
          <a href="mailto:william.b.dana@gmail.com">william.b.dana@gmail.com</a>
        </Menu.Item>

        <Menu.Item>
          <Icon name='world' />Brooklyn, New York
        </Menu.Item>

      </Menu>
    </div>
  )
}

export default Footer
