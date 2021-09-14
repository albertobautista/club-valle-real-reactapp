import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { translate } from "react-i18next";
import { Image, Icon, Grid, Label, Responsive } from "semantic-ui-react";

import LinkedMenuItem from "./LinkedMenuItem";
// import Search from "./SearchProducts";

import routes from "../../common/routes-names";

// import PopMenu from "./PopMenu";

// import toast from "../../common/toast";
// import request from "./services";

// import { menuElements } from "./utils";

const LOGO = "https://clubvallereal.com/logo/logoValle.svg";

const getSize = (width, modifier = "") => {
  let mobileLimit;
  let tabletLimit;
  switch (modifier) {
    case "extended":
      mobileLimit = Responsive.onlyTablet.minWidth - 150;
      tabletLimit = Responsive.onlyComputer.minWidth + 300;
      break;
    default:
      mobileLimit = Responsive.onlyTablet.minWidth;
      tabletLimit = Responsive.onlyComputer.minWidth;
      break;
  }
  if (width < mobileLimit) return "mobile";
  if (width < tabletLimit) return "tablet";
  return "computer";
};

const responsiveStyleMenu = {
  mobile: {
    linkPadding: "1em",
    align: "center",
  },
  tablet: {
    linkPadding: "2em",
    align: "center",
  },
  computer: {
    linkPadding: "4em",
    align: "center",
  },
};

const Menu = (props) => {
  const [device, setDevice] = useState("computer");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const handleAccessPermission = () => {
      // const { t, acceptedTerms } = this.props;
      const { t } = props;

      //   const { customerId } = session.get();
      // const isAdmin = securityService.validate(token.access, [
      //   securityService.getAccess.administrativo,
      // ]);
      //   console.log(
      //     "Permisos handleAccessPermission effect customerId",
      //     customerId
      //   );
      let isAdmin = false;
      let isB2C = true;

      //   if (customerId === "d84a8d4c-8976-4edb-97af-00a82eba30e7") {
      //     isAdmin = true;
      //     isB2C = false;
      //   }

      // const menu = menuElements(t, isAdmin, !acceptedTerms);
      //   const menu = menuElements(t, isAdmin, isB2C);
      //   setMenu(menu);
    };
    handleAccessPermission();
  }, [props]);

  // useEffect(() => {
  //   handleAccessPermission();
  // }, [props.isAuthenticated]);

  const handleOnUpdate = (e, { width }) => {
    const device = getSize(width);
    setDevice(device);
  };

  const redirectToComercio = (props) =>
    props.history.push(routes.homeTuClick.route);

  const goShoppingCart = (props) => {
    props.history.push(routes.shoppingCart.route);
  };

  const computerHeader = () => (
    <Grid>
      <Grid.Row textAlign="center" verticalAlign="middle">
        <Grid.Column
          mobile={15}
          tablet={3}
          computer={3}
          largeScreen={3}
          widescreen={3}
        >
          <Grid padded verticalAlign="middle" centered>
            <Grid.Row centered>
              <Grid.Column
                mobile={16}
                tablet={16}
                computer={16}
                largeScreen={16}
                widescreen={16}
              >
                <Image
                  src={LOGO}
                  size="medium"
                  as="a"
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectToComercio(props)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column
          mobile={12}
          tablet={2}
          computer={2}
          largeScreen={1}
          widescreen={1}
        >
          <Grid>
            <Grid.Row centered>
              <Grid.Column
                mobile={8}
                tablet={8}
                computer={8}
                largeScreen={10}
                widescreen={10}
                floated="right"
                textAlign="right"
              >
                {props.isAuthenticated && (
                  <div>
                    <Icon
                      name="shop"
                      size="big"
                      link
                      onClick={() => goShoppingCart(props)}
                    />
                    {props.cartCount > 0 ? (
                      <Label floating circular color="green">
                        {props.cartCount}
                      </Label>
                    ) : null}
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column
          mobile={3}
          tablet={2}
          computer={1}
          largeScreen={1}
          widescreen={1}
        >
          {/* <PopMenu
            history={props.history}
            elements={menu}
            isAuthenticated={props.isAuthenticated}
          /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  const responsiveHeader = () => (
    <Grid>
      <Grid.Row
        textAlign="center"
        verticalAlign="middle"
        className="no-padding-bottom"
      >
        <Grid.Column mobile={8} tablet={11}>
          <Grid padded verticalAlign="middle" centered>
            <Grid.Row centered>
              <Grid.Column mobile={16} tablet={16}>
                <Image
                  src={LOGO}
                  size="small"
                  as="a"
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectToComercio(props)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={5} floated="right">
          <Grid padded verticalAlign="middle">
            <Grid.Row>
              {/* <Grid.Column
                mobile={4}
                tablet={5}
                computer={8}
                largeScreen={8}
                widescreen={8}
                floated="left"
                textAlign="left"
              >
                <WishListMenu
                  goWishListManager={this.goWishListManager}
                  openBuyNow={this.handleOpenBuyNow}
                />
                {/* <BuyNow
                  open={this.state.openModal}
                  onClose={this.handleOnCloseModal}
                  wishListName={this.state.wishListName}
                  items={this.state.items}
                />
              </Grid.Column> */}
              <Grid.Column
                mobile={6}
                tablet={5}
                floated="right"
                textAlign="right"
              >
                {props.isAuthenticated && (
                  <div>
                    <Icon
                      name="shop"
                      size="big"
                      link
                      onClick={() => goShoppingCart(props)}
                    />
                    <Label floating circular color="primary">
                      {props.cartCount}
                    </Label>
                  </div>
                )}
              </Grid.Column>
              <Grid.Column mobile={6} tablet={6}>
                {/* <PopMenu
                  history={props.history}
                  elements={menu}
                  isAuthenticated={props.isAuthenticated}
                /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        className="no-padding-y"
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column className="no-padding-x" mobile={16} tablet={16}>
          {/* <Search
            device={device}
            handleSearch={(search) => props.handleSearch(search)}
            history={props.history}
          /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  const { linkPadding, align } = responsiveStyleMenu[device];
  const { location, isAuthenticated, t } = props;
  return (
    <Responsive
      as={Grid}
      padded
      style={{ backgroundColor: "#ffffff" }}
      fireOnMount
      onUpdate={handleOnUpdate}
    >
      <Grid.Row textAlign="center" verticalAlign="middle">
        <Grid.Column
          mobile={16}
          tablet={16}
          computer={16}
          largeScreen={16}
          widescreen={16}
        >
          {device === "computer" ? computerHeader() : responsiveHeader()}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="left" className="menu-bar-commerce">
        <Grid.Column
          mobile={16}
          tablet={16}
          computer={16}
          largeScreen={16}
          widescreen={16}
        >
          <Grid padded textAlign="left" verticalAlign="middle" centered>
            <Grid.Row className="no-padding-y" centered>
              <Grid.Column
                className="no-padding-x"
                textAlign="center"
                mobile={5}
                tablet={5}
                computer={3}
                largeScreen={2}
                widescreen={2}
              >
                <LinkedMenuItem
                  linkTo={routes.home.route}
                  padding={linkPadding}
                //   active={location === routes.home.route}
                  // onClick={handleItemClick}
                  label="Inicio"
                />
                
              </Grid.Column>

              <Grid.Column
                className="no-padding-x"
                textAlign={align}
                mobile={6}
                tablet={5}
                computer={4}
                largeScreen={2}
                widescreen={2}
              >
                {/* <LinkedMenuItem
                  linkTo={routes.allProducts.route}
                  padding={linkPadding}
                  active={location === routes.allProducts.route}
                  // onClick={handleItemClick}
                  label={t("menu.products")}
                /> */}
                DOS
              </Grid.Column>

              <Grid.Column
                className="no-padding-x"
                textAlign="center"
                mobile={5}
                tablet={5}
                computer={3}
                largeScreen={2}
                widescreen={2}
              >
                {/* <LinkedMenuItem
                    linkTo={routes.orderHistoryMonitor.route}
                    padding={linkPadding}
                    active={location === routes.orderHistoryMonitor.route}
                    // onClick={handleItemClick}
                    label={t("menu.orders")}
                  /> */}
                TRES
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Responsive>
  );
};

// export default translate('common', { wait: true })(MenuApp);
export default Menu;
