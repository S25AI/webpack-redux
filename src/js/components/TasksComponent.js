'use strict';

import React, {Component} from 'react';

const commonIconStyle = {
  width: '16px',
  height: '16px',
  background: 'url("src/assets/icons/close.svg")',
  marginLeft: '10px',
  display: 'inline-block',
  verticalAlign: 'middle'
};
const deleteIconStyle = Object.assign({}, commonIconStyle);
const editIconStyle = Object.assign({}, commonIconStyle, {background: 'darkgrey'});

export default class TasksComponent extends Component {
  render() {
    let {tasks, deleteTask, editTask, status} = this.props;
    return (
      <div>
        <h2>Список задач какой-то там:</h2>
        <ul>
          {
            tasks.map(({val, id}, i) => {
              return <li key={`task-${i}`}>
                <span>{val}</span>
                <span onClick={status !=='edit' ? () => deleteTask(id) : null}
                  style={deleteIconStyle} />
                <span onClick={status !== 'edit' ? () => editTask(val, id) : null}
                  style={editIconStyle} />
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}