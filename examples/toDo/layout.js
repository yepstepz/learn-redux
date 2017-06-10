import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
const ToDo = ({onCLick, completed, text}) => (
    <li
        onClick={onCLick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>

)
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {
            todos.map(
                todo =>
                    <ToDo
                        key={todo.id}
                        {...todo}
                        onClick = {() => onTodoClick(todo.id)}
                    />
            )
        }
    </ul>
)
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

const Link = ({active, children, onClick}) => (
    if (active){
        return <span>{children}</span>;
    }
    return (
        <a href="#"
            onClick = { e => {
                e.preventDefault();
                onCLick()
            }}
        >
            {children}
        </a>
    )
)
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

const Filter () => (
    <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </p>
)
const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
)
