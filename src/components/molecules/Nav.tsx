import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavItem from "./NavItem/NavItem";

const Nav = () => {

    return (
        <>
            <ul className="header-main-menu" id="header-main-menu">
                <NavItem href="/" iconSource={faCoffee} text="Home"/>
                <NavItem href="/about" iconSource={faCoffee} text="About Me"/>
                <NavItem href="/resume" iconSource={faCoffee} text="Resume"/>
                <NavItem href="/portfolio" iconSource={faCoffee} text="Portfolio"/>
                <NavItem href="/contact" iconSource={faCoffee} text="Contact"/>
                <NavItem href="/appointments" iconSource={faCoffee} text="Appointments"/>
            </ul>
        </>
    )

}

export default Nav;
