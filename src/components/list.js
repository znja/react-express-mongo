import React, { Component, PropTypes } from 'react';
require('styles/list.scss');

class List extends Component {

  static propTypes = {
    list: PropTypes.array,
    getList: PropTypes.func,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    deleteAll: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      description: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentWillMount() {
    this.props.getList();
  }
  onSubmitForm(e) {
    e.preventDefault();
    this.props.addItem({ description: this.state.description });
    this.setState({
      description: ''
    });
  }

  onInputChange(e) {
    this.setState({description: e.target.value});
  }

  showList() {
    return this.props.list.map((item) => (
      <li key={item._id} className="list-group-item">
        <div>{item.description}</div>
        <div onClick={() => this.props.removeItem(item._id)}> &#10060; </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="todo-list">
        <form onSubmit={this.onSubmitForm}>
          <input type="text" placeholder="Add to list" value={this.state.description} onChange={this.onInputChange} />
        </form>
        <ul className="list-group">
          {this.showList()}
        </ul>
      </div>
    );
  }
}

export default List;
