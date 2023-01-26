import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [hamburgerIcon, setHamburgerIcon] = useState("hamburger");

  //function to handle hamburger button click
  const handleHamburgerClick = () => {
    setHamburgerIcon("cross");
  };

  return (
    <div className={styles.header}>
      <Link className={styles.navlogo} href="/">
        OPEN MARKET HUB
      </Link>
      <div className={styles.navlinks}>
        <Link className={styles.navlink} href="/">
          <FaHome className={styles.icon} />
          Home
        </Link>
        <Link href="/" className={styles.navlink}>
          <FaLaptopCode className={styles.icon} />
          Services
        </Link>
        <Link href="/" className={styles.navlink}>
          <FaInfoCircle className={styles.icon} />
          About
        </Link>
        <Link href="/" className={styles.navlink}>
          <FaEnvelope className={styles.icon} />
          Contact
        </Link>
      </div>
      <div onClick={handleHamburgerClick} className={styles.hamburger}>
        {hamburgerIcon === "hamburger" ? <GiHamburgerMenu /> : <h1>Hello</h1>}
      </div>
    </div>
  );
};

export default Header;
