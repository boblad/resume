import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = (props) => {
  return (
    <div className="re-section" style={{background: props.primaryColor}}>
      <div className="re-layout" style={{maxWidth: 800}}>
        <div className="re-spacer-48"/>
        <div className="re-spacer-12"/>
        {
          props.headerText &&
          <h1 className="re-section__header" style={{color: props.secondaryColor, fontSize: 36}}>
            { props.headerText }
          </h1>
        }
        <div className="re-spacer-12"/>
        <div className="re-layout">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Section.defaultProps = {
  primaryColor: "#45a6d0",
  secondaryColor: "white"
}

Section.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  headerText: PropTypes.string
}

export default Section;