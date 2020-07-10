import React, { Component } from "react";
import "../../../App.css";
import Jointnav from './signedinlinks/jointnav'
import Jointnavout from './signoutlinks/jointnavout'
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { background, auth } = this.props;
    const links = auth.uid ? (
      <Jointnav background={background} />
    ) : (
      <Jointnavout background={background}  />
    );
    return (
      <div>
        {links}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
