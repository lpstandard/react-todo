import React from 'react';
import TodoListHeader from "./todo-list-header";
import _ from "lodash";
import TodoListItem from "./todo-list-item";

export default class TodosList extends React.Component {
  renderItems(){
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index}
      {...todo} {...props} />);
  }

  render(){
    return(
      <table>
        <TodoListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}