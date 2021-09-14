/* eslint-disable radix */
/* eslint-disable no-const-assign */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import Menu from "../../components/Menu";

// import TuClickFooter from "../../components/common/Footers/TuClickFooter";Layout
// import services from "./services";

import "./styles.css";

function Layout(props) {
  const {
    children,
    history,
    isAuthenticated,
    routes,
    extraHeader,
    enableRegister,
    location,
  } = props;
  const { pathname } = location;

  const childrenComponent = React.Children.map(children, (child) =>
    React.cloneElement(child)
  );

  return (
    <Grid>
      {/* <Grid.Row stretched className="no-padding-y" onLoad={onTidioChatApiReady}>
       */}
      <Grid.Row stretched className="no-padding-y">
        <Grid.Column>
          <Menu
            history={history}
            location={pathname}
            isAuthenticated={isAuthenticated}
            routes={routes}
            extraHeader={extraHeader}
            enableRegister={enableRegister}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="no-padding-y">
        <Grid.Column style={{ minHeight: "70vh" }}>
          {childrenComponent}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row stretched>
        <Grid.Column>{/* <TuClickFooter /> */}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Layout;
