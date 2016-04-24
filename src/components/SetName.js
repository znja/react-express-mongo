import React, { Component, PropTypes } from 'react';
require('styles/setName.scss');

class Hello extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    setName: PropTypes.func.isRequired,
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      name: props.name ? props.name : ''
    };
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.setName(this.state.name);
    this.context.router.push('/hello');
  }

  onInputChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form">
        <div className="form-row">
          <h1>Thanks for using my React-Redux-Router boilerplate</h1>
          <p>
            This boilerplate is set up to use React, React-Redux, React-Router and hotloading.
            I have also wired up a small TODO Application to show how everything is wired up
          </p>
          <p>Fell free to delete it all and start fresh</p>
        </div>
        <div className="form-row">
          <label className="form-lable">Please tell me your name to start the TODO App:</label>
          <input
            className="form-input"
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-row pull-right">
          <button className="form-btn" type="submit"> <span>SUBMIT</span> </button>
        </div>
      </form>
    );
  }
}

export default Hello;
