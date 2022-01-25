import {toggleTodo, VisibilityFilters} from "../actions";
import {connect} from "react-redux";
import TodoList from "../components/TodoList";

const getVisibleTodo = (todos, filter) => {
  switch (filter) {
      case VisibilityFilters.SHOW_ALL:
          return todos;
      case VisibilityFilters.SHOW_ACTIVE:
          return todos.filter(t => !t.completed);
      case VisibilityFilters.SHOW_COMPLETED:
          return todos.filter(t => t.completed);
      default:
          throw new Error("unknown filter:" + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodo(state.todos, state.visibilityFilters)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
