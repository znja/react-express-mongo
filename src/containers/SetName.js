import { connect } from 'react-redux';
import { setName } from 'actions';
import SetName from 'components/setName';

function mapPropsToState(state) {
  return {
    name: state.name
  };
}

export default connect(mapPropsToState, { setName })(SetName);
