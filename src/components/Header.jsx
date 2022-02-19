import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setSection} from "../actions";

const Header = () => {
    const sectionActivate = useSelector((state) => state.sectionActivate);
    const dispatch = useDispatch();

    const handleSetSection = (section) => {
        dispatch(setSection(section));
    }

    return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                            width="100"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <div onClick={() => handleSetSection("Characters")}>
                            <Link to="/" className={`nav-link ${
                                sectionActivate === "Characters" ? "activate" : ""}`}>Personajes</Link>
                        </div>
                        <div onClick={() => handleSetSection("Favorites")}>
                            <Link to="/favorites" className={`nav-link ${
                            sectionActivate === "Favorites" ? "activate" : ""}`}>Favoritos</Link>
                        </div>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Buscar</Button>
                    </Form>
                </Container>
            </Navbar>
    );
}

export default Header;