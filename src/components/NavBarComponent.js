import React from 'react';
import {connect} from "react-redux";
import {FormControl, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

class NavBarComponent extends React.Component {
    render() {
        return (
            <Navbar bg={"dark"} expand={"lg"}>
                <NavbarBrand href={"/"}>Reading Tracker</NavbarBrand>
                <NavbarToggle aria-controls={"basic-navbar-nav"}/>
                <NavbarCollapse id={"basic-navbar-nav"}>
                    <Nav classname={"mr-auto"}>
                        <NavDropdown id={"basic-nav-dropdown"} title={"Books"}>
                            <NavDropdown.Item href={"/booksRead"}>Books Read</NavDropdown.Item>
                            <NavDropdown.Item href={"/booksByAuthor"}>Books by Author</NavDropdown.Item>
                            <NavDropdown.Item href={"/booksByPublishet"}>Books by Publisher</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href={"/trackingInfo"}>Tracking Info</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={"/series"}>Series</Nav.Link>
                        <Nav.Link href={"/stats"}>Stats</Nav.Link>
                        <Nav.Link href={"#"}>Books Hauled</Nav.Link>
                        <Nav.Link href={"#"}>ARC Tracker</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type={"text"} placeholder={"Search for Books"} classname={"mr-sm-2"}/>
                        <Link to={"/search"}>
                            <button className={"btn btn-outline-success my-2 my-sm-0"}
                                    type={"submit"}>
                                Search
                            </button>
                        </Link>
                    </Form>
                </NavbarCollapse>
            </Navbar>
        )
    }
}

const stateToPropertyMapper = (state) => ({});
const dispatchToPropertyMapper = (dispatch) => ({});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(NavBarComponent)