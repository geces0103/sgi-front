import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import Menu from './components/menu/Menu.jsx';
import Router from './components/router/Router';
import { getAuthenticationSign } from '../src/components/body/login/SignService';

class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentWillMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      getAuthenticationSign();
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  logout() {
    window.open('http://54.226.71.50/auth/realms/sgi/protocol/openid-connect/logout', '_blank')
    window.location.assign('')
  }

  render() {
    return this.state.keycloak ? this.state.authenticated ? <><Menu logout={() => this.logout()} /> <Router /></> : <>Unable to authenticate!</> : <span className="text-center">Initializing Keycloak...</span>
  }
}

export default Secured;