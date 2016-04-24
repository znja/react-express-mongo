import { connect } from 'react-redux';
import { addItem, removeItem, editItem, deleteAll } from 'actions';
import List from 'components/list';


function mapPropsToState(state) {
  return {
    name: state.name,
    list: state.list
  };
}

export default connect(mapPropsToState, { addItem, removeItem, editItem, deleteAll })(List);
