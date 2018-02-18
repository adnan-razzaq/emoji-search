import React, { PureComponent } from 'react';
import {Theme, Size} from './Context';
import './EmojiResultRow.css';

class EmojiResultsRow extends PureComponent {
  renderWithTheme = (theme) => {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `https://raw.githubusercontent.com/EmojiTwo/emojitwo/` +
      `master/png/${codePointHex}.png`;
    return (
      <div 
        className={[
          'component-emoji-result-row',
          'component-emoji-result-row-' + theme,
          'copy-to-clipboard',
        ].join(' ')}
      >
        <img src={src} alt={this.props.title} />
        <span className="title">
          {this.props.title}
        </span>
      </div>
    );
  };
  render() {
    return (
      <Theme.Consumer>
        {this.renderWithTheme}
      </Theme.Consumer>
    );
  }
}

export default EmojiResultsRow;
