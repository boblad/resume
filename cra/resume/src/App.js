import React, { Component } from 'react';
import Section from './Components/Section';
import Skills from './Components/Skills';
import { PRIMARY, SECONDARY, ACCENT_1, RED, BLACK } from './Constants/Colors';
import Pendulum from './Components/Pendulum';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.setState({ showName: false });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showName: true });
    }, 1000)
  }

  render() {
    const { showName } = this.state;
    return (
      <div className="re-layout">
        <div
          className="re-layout"
          style={{
            height: '100vh',
            backgroundImage: 'url(/images/profile_picture.jpg)',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
          <div className="re-layout" style={{position: 'absolute', bottom: 20, paddingRight: 32}}>
            <h1
              className={`re-layout ${showName ? "" : "re-opaque"}`}
              style={{transition: '1s', textAlign: 'right', color: "white", fontSize: 60}}>
              Bryant Oblad
            </h1>
            <div className="re-spacer-12"/>
            <h2
              className={`re-layout ${showName ? "" : "re-opaque"}`}
              style={{transition: '1s', textAlign: 'right', color: RED}}>
              I'm a Full Stack Developer
            </h2>
            <div className="re-spacer-48"/>
          </div>
        </div>
        <Section headerText="About Me" primaryColor={BLACK} secondaryColor="white">
          <div className="re-layout" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{ maxWidth: 575 }}>
              <p className="re-layout" style={{ textAlign: 'center', color: 'white' }}>
                I love to code and learn new things. Everyday I strive to
                better my programming skills and to get into new topics that force
                me to progress in my field. I love working with fellow developers and finding
                the best possible solution for the task at hand, whether that is an implementation
                or choice of tool. I take pride in my projects so I put in extra effort to make sure things are done right.
                My favorite moments as a developer are when I get stumped, because I find it very rewarding
                when I fix those difficult problems.
              </p>
              <div className="re-spacer-12"/>
              <p className="re-layout" style={{ textAlign: 'center', color: 'white' }}>
                My personal programming goal is to learn something interesting and useful every day.
              </p>
              <div className="re-spacer-12"/>
              <p className="re-layout" style={{ textAlign: 'center', color: 'white' }}>
                I love being a software developer.
              </p>
            </div>
          </div>
          <div className="re-spacer-48"/>
          <div className="re-spacer-12"/>
        </Section>
        <Section headerText="Skills" primaryColor="white" secondaryColor={BLACK}>
          <Skills />
        </Section>
        <Section headerText="Experience">
        </Section>
        <Section headerText="Education" primaryColor="white" secondaryColor={PRIMARY}>
        </Section>
        <Section headerText="Past Projects">
        </Section>
        <Section headerText="Awards & Accomplishments" primaryColor="white" secondaryColor={PRIMARY}>
        </Section>
        <Section headerText="Personal Projects">
        </Section>
        <Section headerText="Contact" primaryColor="white" secondaryColor={PRIMARY}>
        </Section>
      </div>
    );
  }
}

export default App;
