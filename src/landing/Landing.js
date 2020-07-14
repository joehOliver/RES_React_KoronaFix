import React from 'react';
import { ThemeProvider } from '@rmwc/theme';
import Hero from './Hero.js';
import LandingNav from './LandingNav.js';
import '@material/theme/dist/mdc.theme.css';
import '@rmwc/theme/theme.css';
import './Landing.css';

class Landing extends React.Component {
  static defaultProps = {
    value: 0
  }
  state = { text: 'Example' }
  render() {
    return (
      <ThemeProvider
        options={{
          primary: '#f2e202',
          secondaryBg: '#202020',
          background: '#fff',
          surface: '#fff',
          onSecondary: 'white'
      }}>
        <LandingNav />
        <Hero />
        <div className="jumbotron"></div>
        <div className="jumbotron"></div>
        <div className="jumbotron"></div>
        <div className="jumbotron"></div>
      </ThemeProvider>
    );
  }
}

export default Landing;
