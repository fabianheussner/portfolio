/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Sidebar from "./sidebar/sidebar"
import Backdrop from "./backdrop/backdrop"

import Request from "./modules/request"
import Footer from "./footer/footer"
import Tabbar from "./tabbar/tabbar"

import "../pages/mystyles.scss"





class Layout extends React.Component  {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }


    const { children } = this.props;
    return (
      <div style={{height: '100%'}}>

      <Header drawerClickHandler={this.drawerToggleClickHandler} />

      <Sidebar show={this.state.sideDrawerOpen} />
      {backdrop}
      
      <main>{children}</main>
      
      <Request />
      <Footer />
      <Tabbar />

    </div>
    );
  }
}

export default Layout;
