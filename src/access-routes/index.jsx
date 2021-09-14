import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = (props) => {
  const { component, renderLayout, ...rest } = props;
  const [userSession, setUserSession] = useState(false);

  //   async function validateUserSession() {
  //     const { refreshToken, isAuthenticated } = session.get();
  //     if (!isAuthenticated && refreshToken) {
  //       await session.renewAccessToken();
  //     }
  //     if (session.get().isAuthenticated) {
  //       setUserSession(session.get());
  //     } else setUserSession({ isAuthenticated: false });
  //   }

  function hasValidSession() {
    return true;
    // return userSession && userSession.isAuthenticated;
  }

  useEffect(() => {
    // validateUserSession();
  }, [props.isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(props) => {
        switch (true) {
          case hasValidSession():
            return renderLayout({ component, props, isAuthenticated: true });
          default:
            return renderLayout({ component, props, isAuthenticated: false });
        }
      }}
    />
  );
};
