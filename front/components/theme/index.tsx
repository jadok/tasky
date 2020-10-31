import React from 'react';

import { setDocumentDarkMode } from './utils';
import { DEFAULT_DISPLAY_MODE, LIGHT_DISPLAY_MODE, LOCALSTORAGE_KEY } from './constante';

import './header.module.scss';

interface ThemeState {
  isDark: boolean;
}

class Theme extends React.Component<any, ThemeState> {
  constructor(props) {
    super(props);
    this.state = {
      isDark: typeof props.mode === 'undefined'
      || props.mode === DEFAULT_DISPLAY_MODE,
    };
  }

  componentDidMount() {
    const localMode = localStorage.getItem(LOCALSTORAGE_KEY);
    if (localMode) {
      const isChecked = localMode === DEFAULT_DISPLAY_MODE;
      this.setState({ isDark: isChecked });
      setDocumentDarkMode(isChecked);
    }
  }

  handleChange = (event) => {
    const isChecked = event.target.checked;
    this.setState({ isDark: isChecked });
    setDocumentDarkMode(isChecked);
  }

  render() {
    const displayMode = this.state.isDark ? DEFAULT_DISPLAY_MODE : LIGHT_DISPLAY_MODE;
    return (
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={this.handleChange} checked={this.state.isDark} />
          <div className="slider round" />
        </label>
        <em>
Enable
          {displayMode}
          {' '}
Mode!
        </em>
      </div>
    );
  }
}

export default Theme;
