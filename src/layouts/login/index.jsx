import React, { Component } from "react";
import "./styles.css";
import { Grid } from "semantic-ui-react";
import PublicHeader from "../../components/Login/common/Headers/PublicHeader";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <div className="login-container">
        <div className="login-header">
          <PublicHeader />
        </div>
        <div className="login-children">
          <Grid verticalAlign="middle" centered>
            <Grid.Row centered>
              <Grid.Column mobile={12} tablet={9} computer={7} largeScreen={6}>
                {children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LoginLayout;
