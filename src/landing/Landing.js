import React from 'react';
import Axios from 'axios';
import { ThemeProvider } from '@rmwc/theme';
import Hero from './Hero.js';
import LandingNav from './LandingNav.js';
import '@material/theme/dist/mdc.theme.css';
import '@rmwc/theme/theme.css';
import './Landing.css';

const URL_TEST = "http://localhost:4000/user";
const API_TEST = Axios.create({
  baseURL: URL_TEST
});

class Landing extends React.Component {
  static defaultProps = {
    value: 0
  }

  state = { userData: []}

  constructor() {
    super();
    API_TEST.get("/20").then(res => {
      console.log(res.data);
      this.setState({userData: res.data})
    })
  }

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
        {this.state.userData.map((name) => <h2>Hello {name.firstName + " " + name.lastName} </h2>)}
        <div className="jumbotron"></div>
        <div className="jumbotron"></div>
        <div className="jumbotron"></div>
        <div className="jumbotron"></div>
      </ThemeProvider>
    );
  }
}

export default Landing;
