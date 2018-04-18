import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const Footer = (props) => {
  return(
    <div id="Footer">
      <Menu inverted attached="bottom">

        {props.showFooterState && <div>
          <Menu.Item name='email'>
            <Icon name='mail outline' />
            <a href="mailto:william.b.dana@gmail.com">william.b.dana@gmail.com</a>
          </Menu.Item>

          <Menu.Item>
            <Icon name='world' />Brooklyn, New York
          </Menu.Item>

          <Menu.Item onClick={props.showFooter}>
            <Icon name='arrow down' />Hide
          </Menu.Item>
        </div>}

        {!props.showFooterState && <Menu.Item name='show' onClick={props.showFooter}>
          <Icon name='arrow up' />
        </Menu.Item>}

      </Menu>
    </div>
  )
}

export default Footer
