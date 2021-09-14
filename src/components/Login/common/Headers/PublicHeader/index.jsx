import React from "react";

import { Image, Grid } from "semantic-ui-react";

const LOGO = "https://clubvallereal.com/logo/logoValle.svg";

const PublicHeader = () => (
  <Grid verticalAlign="middle" padded textAlign="center">
    <Grid.Row className="menu-bar">
      <Grid.Column
        mobile={16}
        tablet={16}
        computer={16}
        largeScreen={16}
        widescreen={16}
      >
        <Image src={LOGO} size="medium" wrapped />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default PublicHeader;
