import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { uniqueId } from 'lodash';


class List extends Component {

  static propTypes = {
    name: PropTypes.string,
    list: PropTypes.array,
    addItem: PropTypes.function
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.name && this.props.list.length === 0) {
      const list = [
        'Create a new list',
        'Play Stardew Vally',
        'Watch Star Wars VII (Again)'
      ];
      for (const action of list) {
        this.props.addItem({
          id: uniqueId(),
          content: action
        });
      }
    }
  }

  renderList() {
    return this.props.list.map((item) => (
      <ul key={item.id}>
        <div>{item.content}</div>
        <div> Delete </div>
        <div> Edit </div>
      </ul>
    ));
  }

  render() {
    if (!this.props.name) {
      return (
        <div>
          Please Navigate to <Link to="/">Set Name</Link>  first and tell me what your name is
        </div>
      );
    }
    return (
      <div>
        <h2>Hello {this.props.name} here is a list of TODO</h2>
        <li>
          {this.renderList()}
        </li>
      </div>
    );
  }
}

export default List;
