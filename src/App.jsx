import React, { Component } from "react";
import { Switch, withRouter } from "react-router";

//Layouts
import LoginLayout from "./layouts/login";

//Components
import Layout from "./layouts/main";
import Home from "./components/Home";

//Rutas
import Login from "./components/Login";

//Rutas
import routes from "./common/routes-names";
import { PublicRoute } from "./access-routes";

//CSS
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderLoginLayout = ({ component: ComponentToRender, props }) => (
    <LoginLayout {...props} routes={routes}>
      <ComponentToRender {...props} routes={routes} />
    </LoginLayout>
  );

  renderLayout = ({ component: ComponentToRender, props }, addons) => (
    <Layout {...props} routes={routes} {...addons}>
      <ComponentToRender {...props} routes={routes} />
    </Layout>
  );

  render() {
    return (
      <div>
        <Switch>
          <PublicRoute
            path={routes.login.route}
            component={Login}
            renderLayout={this.renderLoginLayout}
          />

          <PublicRoute
            path={routes.home.route}
            component={Home}
            renderLayout={this.renderLayout}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
