import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

function renderContent(auth) {
  switch (auth) {
    case null:
      return;
    case false:
      return (
        <li><a href="/auth/google">Login With Google</a></li>
      );
    default:
      return ([<li key="payments"><Payments /></li>,
      <li key="credits">Credits: {auth.credits}</li>,
      < li key="logout" > <a href="/auth/logout">Logout</a></li >]);
  }
}

function Header(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={props.auth ? '/surveys' : '/'}
          className="left brand-logo">Emaily</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent(props.auth)}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);