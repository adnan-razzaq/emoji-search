import React, { PureComponent } from 'react';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

class EmojiResults extends PureComponent {
  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map((emojiData) =>
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        )}
      </div>
    );
  }
}

export default EmojiResults;
