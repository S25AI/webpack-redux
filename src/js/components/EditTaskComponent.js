'use strict';

import React, {Component} from 'react';

export default class EditTaskComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {submitEdit, prevData} = this.props;

    return (
      <div>
        <input ref={input => this._input = input}
          defaultValue={prevData.val} />
        <button onClick={() => submitEdit(prevData.id, this._input.value.trim())}>Подтвердить</button>
      </div>
    );
  }
}