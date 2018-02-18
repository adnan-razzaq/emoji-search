import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import Picker from './Picker';
import {Size, Theme} from './Context';
import Layout from './Layout';
import filterEmoji from './filterEmoji';
import './App.css';

class BugDemo extends React.Component {
  state = {asyncValue: this.props.value};
  componentDidMount() {
    this.setState((state, props) => ({asyncValue: props.value}));
  }
  componentDidUpdate() {
    if (this.props.value !== this.state.asyncValue) {
      this.setState((state, props) => ({asyncValue: props.value}));
    }
  }
  render() {
    return this.props.children(this.state.asyncValue);
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: filterEmoji('', 1000),
      theme: 'light',
    };
  }

  handleSearchChange = (event) => {
    const value = event.target.value;
    this.setState({
      items: filterEmoji(value, 1000),
    });
  };

  handleThemeChange = (nextTheme) => {
    this.setState({
      theme: nextTheme
    });
  };

  render() {
    return (
      <Theme.Provider value={this.state.theme}>
        <Layout>
          <Header />
          <Picker values={["dark", "light"]} onChange={this.handleThemeChange}>
            Dark mode
          </Picker>
          <SearchInput onChange={this.handleSearchChange} />
          <BugDemo value={this.state.items}>
            {items => <EmojiResults emojiData={items} />}
          </BugDemo>
        </Layout>
      </Theme.Provider>
    );
  }
}

export default App;
