import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import LoginView from './src/views/LoginView.js';
import HomeView from './src/views/HomeView.js';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" initial component={LoginView} hideNavBar />
    <Scene
      key="home"
      component={HomeView}
      title="Home"
      back={true}
    />
  </Scene>
);

export default class App extends Component {
  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}