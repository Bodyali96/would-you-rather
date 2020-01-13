import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt="app logo"
                            src={require('./icon.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Would You Rather?
                </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
                        <Nav.Link href="#link">New Poll</Nav.Link>

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" variant="dark">
                        <Navbar.Text>
                            {this.props.authedUser}
                        </Navbar.Text>
                        {' '}
                        <img
                            alt="profile pic"
                            src={require('./icon.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <Nav.Link href="#logout">Logout</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Header)
