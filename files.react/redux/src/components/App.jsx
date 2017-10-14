import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { displayDataRequestFetch } from './displayData/displayData.actions';

import DisplayData from './displayData/DisplayData';
// import logo from './app_logo.jpg';
import './App.scss';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    fetchStarted: () => {
        dispatch(displayDataRequestFetch());
    },
});

class App extends React.Component {
    componentDidMount() {
        this.props.fetchStarted();
    }
    render() {
        return (
          <div className="App">
            <div className="App-header">
              sdf
            </div>
            <DisplayData />
          </div>
        );
    }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

// <img src={logo} className="app-logo" alt="logo" />