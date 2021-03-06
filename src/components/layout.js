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


  // No Scroll on Sidebar Open Start

  // componentDidUpdate() {
  //   const htmlElement = document.querySelector('HTML');
  //   if (!htmlElement)  return;

  //   const { sideDrawerOpen } = this.state;
  //   if (sideDrawerOpen) {
  //     htmlElement.classList.add('noScroll');
  //   } else {
  //     htmlElement.classList.remove('noScroll');
  //   }
  // }

  // No Scroll on Sidebar Open End


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }


    const { children } = this.props;
    return (
      <div style={{height: '100%'}}>

        <Header drawerClickHandler={this.drawerToggleClickHandler} />

        <Sidebar show={this.state.sideDrawerOpen} onClose={() => this.setState({ sideDrawerOpen: false })}/>
        {backdrop}
        
        <main>{children}</main>
        

        <Footer />
        <Tabbar />

      </div>
    );
  }
}

export default Layout;
