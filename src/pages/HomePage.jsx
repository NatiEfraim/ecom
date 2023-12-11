import React, { Component, Fragment } from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Categories />
      </Fragment>
      // <Fragment>
      //   <HomeTop />
      //   <FeaturedProducts />
      //   <NewArrival />
      //   <Categories />
      //   <Collection />
      // </Fragment>
    );
  }
}

export default HomePage;
