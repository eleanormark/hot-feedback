import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return <li>logout</li>;
    }
  }

  render() {
    console.log('props obj', this.props);
    return (
      <nav className="red">
        <div className="nav-wrapper">
          <a className="left brand-logo">Hot Feedback</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStatdToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStatdToProps)(Header);
