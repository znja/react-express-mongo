import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Hello = function (props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string
};

function mapPropsToState(props) {
  return {
    name: props.name
  };
}

export default connect(mapPropsToState)(Hello);
