import React from 'react';
import {Theme} from './Context';

export default function Layout(props) {
  return (
    <Theme.Consumer>
      {theme => (
        <div className={'App-' + theme}>
          {props.children}
        </div>
      )}
    </Theme.Consumer>
  );
}
