'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import * as ActionCreators from '../actions';
import {AddTaskComponent, EditTaskComponent, TasksComponent} from '../components/';

class App extends Component {
  constructor(props) {
    super(props);
    this._addTask = this._addTask.bind(this);
    this._deleteTask = this._deleteTask.bind(this);
    this._editTask = this._editTask.bind(this);
    this._submitEdit = this._submitEdit.bind(this);
    this._getData = this._getData.bind(this);
  }

  _addTask(val) {
    if (val) {
      store.dispatch(ActionCreators.addTodo(val));
    }
  }

  _deleteTask(id) {
    store.dispatch(ActionCreators.removeTodo(id));
  }

  _editTask(val, id) {
    store.dispatch(ActionCreators.editStatus({val, id}));
  }

  _submitEdit(id, val) {
    if (val) {
      store.dispatch(ActionCreators.editTodo(val, id));
      store.dispatch(ActionCreators.setDefaultStatus());
    }
  }

  _getData() {
    store.dispatch(ActionCreators.doAsyncAction());
  }

  render() {
    let {tasks, status: {status, prevData}, asyncData: {loading}} = this.props;

    return (
      <div>
        <AddTaskComponent addTask={this._addTask} />
        <TasksComponent deleteTask={this._deleteTask}
          editTask={this._editTask}
          status={status}
          tasks={tasks} />
        {
          status === 'edit' ?
            <EditTaskComponent prevData={prevData}
              submitEdit={this._submitEdit} /> : null
        }
        <button onClick={!loading ? this._getData : null}>Получить данные асинхронно</button>
        {
          loading &&
          <div>Загружаем...</div>
        }
      </div>
    );
  }
}

function mapStateToProps({todos: tasks, statusReducer: status, gettingDataReducer: asyncData}) {
  return {
    tasks,
    status,
    asyncData
  };
}

export default connect(mapStateToProps)(App);