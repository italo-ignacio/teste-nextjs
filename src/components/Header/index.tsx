import React, { useState } from "react";
import Image from "next/image";
import { Nav, Container, MenuContent, MenuLabel } from "./styled";
import Link from "next/link";
import Hamburger from "hamburger-react";

export default function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Container>
        <Link href="/">
          <a className="logo">
            <Image src="/logo.png" width="139px" height="45px" alt="Logo" />
          </a>
        </Link>
        <Nav show={show}>
          <Link href="/">
            <a onClick={toggleMenu}>Home</a>
          </Link>
          <Link href="#category">
            <a onClick={toggleMenu}>Category</a>
          </Link>
          <Link href="/">
            <a onClick={toggleMenu}>
              <Image
                src="/icon.png"
                width="15px"
                height="15px"
                alt="Search icon"
              />{" "}
              Search
            </a>
          </Link>
          <button onClick={toggleMenu}>Contact</button>
        </Nav>

        <MenuContent>
          <MenuLabel onClick={toggleMenu}>
            <Hamburger toggled={show} />
          </MenuLabel>
        </MenuContent>
      </Container>
    </>
  );
}
