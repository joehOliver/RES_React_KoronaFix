import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '@rmwc/button';
import { Typography } from '@rmwc/typography';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
import '@material/button/dist/mdc.button.css';
import '@rmwc/icon/icon.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/typography/dist/mdc.typography.css';
import './Hero.css';
import mockup from '../../images/mockup-test-3.png';

const Hero = props => (
  <section className="hero-wrapper">
    <Container>
      <Row>
        <Col lg={6} md={12} xs={12} className="pt-4 mt-2">
          <Typography use="headline2" tag="h1" className="text-white main-text">
            Report problems and give feedback</Typography>
          <Typography use="body1" tag="p" className="text-white hero-body mt-3">
            Give feedback and suggestions, and report infrastructure and maintenance issues in the city. Sign up to report issues and track your requests!
          </Typography>
          <div className="cta-group mt-4 pt-2">
            <Button label="Register" raised className="btn-cta cta-primary"/>
            <Button label="Login" className="btn-cta cta-secondary mt-3 mt-sm-0"/>
          </div>
        </Col>
        <Col lg={6} md={12} xs={12} className="image-area">
          <img className="mockup d-none d-lg-inline-block" src={mockup} alt="Phone mockup" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;
