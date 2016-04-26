import { connect } from 'react-redux';
import { getList, addItem, removeItem, editItem, deleteAll } from 'actions';
import List from 'components/list';

function mapPropsToState(state) {
  return {
    list: state.list,
    name: state.name
  };
}

export default connect(mapPropsToState, { getList, addItem, removeItem, deleteAll})(List);
