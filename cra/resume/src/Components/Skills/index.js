import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { ACCENT_2 } from '../../Constants/Colors';
import './Skills.css';

const items = [
  {
    title: "React/Redux",
    level: "8%"
  },
  {
    title: "React-Native (IOS & Android)",
    level: "8%"
  },
  {
    title: "Javascript/Nodejs",
    level: "8%"
  },
  {
    title: "HTML/CSS/SCSS",
    level: "49%"
  },
  {
    title: "C++",
    level: "20%"
  },
  {
    title: "Java",
    level: "8%"
  },
  {
    title: "Python",
    level: "8%"
  },
  {
    title: "Django REST",
    level: "8%"
  },
  {
    title: "Unix",
    level: "8%"
  }
]

class Skills extends Component {
  constructor() {
    super();
    this.renderSkill = this.renderSkill.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.setState({ slide: false });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let element = document.getElementById("skills-section");
    let distanceFromTop = 0;
    if (!this.state.slide) {
      while(element) {
        distanceFromTop += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
      }

      if (distanceFromTop < window.pageYOffset + 550) {
        this.setState({ slide: true });
      }
    }
  }

  renderSkill(skill, index) {
    return (
      <Fragment key={`re-skills-${index}`}>
        <h4 className="re-skills__label">{skill.title}</h4>
        <div className="re-skills__progress-wrap">
          <div
            className="re-skills__progress"
            style={{
              width: this.state.slide ? skill.level : "100%",
              background: ACCENT_2
            }}>
            <div className="re-skills__ball"/>
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      <div className="re-layout" id="skills-section">
        <div className="re-skills__section">
          {
            items.map((skill, index) => {
              if (!(index % 2)) {
                return this.renderSkill(skill, index);
              }
            })
          }
        </div>
        <div className="re-skills__section">
          {
            items.map((skill, index) => {
              if (index % 2) {
                return this.renderSkill(skill, index);
              }
            })
          }
        </div>
        <div className="re-spacer-48"/>
        <div className="re-spacer-48"/>
      </div>
    );
  }
}

Skills.defaultProps = {
}

Skills.propTypes = {
}

export default Skills;