import PropTypes from "prop-types";

const Todo = ({onClick, completed, text}) =>
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>

Todo.prototype = {
    onClick: PropTypes.func.prototype,
    completed: PropTypes.bool.prototype,
    text: PropTypes.string.prototype
}

export default Todo
