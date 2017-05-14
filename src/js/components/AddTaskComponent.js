'use strict';

import React, {Component} from 'react';
import styles from './AddTaskComponent.css';

console.log(styles);

export default class EditTaskComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {addTask} = this.props;

    let inputCls = `${styles.input} ${styles.formControl}`;
    let buttonCls = styles.button;

    return (
      <div>
        <input type='text'
          ref={input => this._input = input}
          className={inputCls}
          placeholder='Введите название новой задачи' />
          <br />
        <button
          className={buttonCls}
          onClick={() => addTask(this._input.value.trim())}>Добавить задачу</button>
      </div>
    );
  }
}