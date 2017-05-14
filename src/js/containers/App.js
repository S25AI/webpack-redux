'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);