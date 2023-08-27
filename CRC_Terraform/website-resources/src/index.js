import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import DockerisedPythonApp from './views/dockerised-python-app'
import CRCTerraform from './views/crc-terraform'
import DockerisedPHPLavarelApp from './views/dockerised-php-lavarel-app'
import NGINXEC2 from './views/nginx-ec2'
import Home from './views/home'
import DockerisedJavascriptApp from './views/dockerised-javascript-app'
import CRCCloudForm1 from './views/crc-cloud-form1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route
          component={DockerisedPythonApp}
          exact
          path="/dockerised-python-app"
        />
        <Route component={CRCTerraform} exact path="/crc-terraform" />
        <Route
          component={DockerisedPHPLavarelApp}
          exact
          path="/dockerised-php-lavarel-app"
        />
        <Route component={NGINXEC2} exact path="/nginx-ec2" />
        <Route component={Home} exact path="/" />
        <Route
          component={DockerisedJavascriptApp}
          exact
          path="/dockerised-javascript-app"
        />
        <Route component={CRCCloudForm1} exact path="/crc-cloud-form1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
