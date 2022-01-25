import {addTodo} from "../actions";
import {connect} from "react-redux";
import AddView from "../components/AddView";

const mapDispatchToProps = (dispatch) => ({
  submit: (input) => dispatch(addTodo(input))
})

export default connect(null, mapDispatchToProps)(AddView)
