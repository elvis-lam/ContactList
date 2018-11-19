import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './contact.png';
import './Header.css';

class Header extends Component {
    renderContent() {
        // Check if user is logged in
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                        <li key='1'><a href="/auth/google" className="grey-text menu">Log In</a></li>,
                        // <li key='2' className="grey-text">|</li>,
                        // <li key='3'style={{ marginRight: '50px' }}><a href="/" className="grey-text menu"> Sign In</a></li>
                ];
            default:
                return [
                        <li key='1'><a href="/contacts" className="grey-text menu">Contact List</a></li>,
                        <li key='2'><a href="/favorites" className="grey-text menu">Favorites</a></li>,
                        <li key='3'style={{ marginRight: '50px' }}><a href="/api/logout" className="grey-text menu">Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <nav className="white">
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/contacts' : '/'} className="left brand-logo black-text">
                        <img className="responsive-img" src={logo} alt="logo"/>
                    </Link>

                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);