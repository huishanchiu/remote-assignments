import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Content from "./Home/Components/Content";
import Nav from "./Home/Components/Nav";
import Seemore from "./Home/Components/Seemore";
import Footer from "./Home/Components/footer";
import Button from "./Home/Components/Button";
import SideMenu from "./Home/Components/SideMenu";

class App extends React.Component {
  state = {
    banner: "Welcome Message",
    isMoreHidder: true,
    isSideMenuHidden: true,
  };
  changeHeader = () => {
    this.setState({ banner: "Have a Good Time!" });
  };

  moreHidder = () => {
    // this.setState( {isBoxHidden: false} )
    this.setState({ isMoreHidden: !this.state.isMoreHidden });
  };

  showSideMenu = () => {
    this.setState({
      isSideMenuHidden: !this.state.isSideMenuHidden,
    });
  };

  hideSideMenu = () => {
    this.setState({
      isSideMenuHidden: true,
    });
  };

  render() {
    return (
      <div>
        {!this.state.isSideMenuHidden && (
          <SideMenu onClick={this.hideSideMenu} />
        )}
        <Nav
          onClick={this.showSideMenu}
          hideSideMenu={this.state.hideSideMenu}
        />

        <Content title={this.state.banner} onClick={this.changeHeader} />
        <Button onClick={this.moreHidder} />

        {this.state.isMoreHidden && <Seemore />}
        {/* <Seemore onClick={this.moreHidder} /> */}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
