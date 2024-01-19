import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const handleHamb = () => {
    setIsOpen((current) => !current);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to="/">Manchester United</Link>
      </div>

      <ul className={`${styles.navbar_menu} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link className={styles.navbar_link} to="/stadium">
            경기장
          </Link>
        </li>
        {/* <li>
          <Link className={styles.navbar_link} to="/legends">
            전설의 선수
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_link} to="/player">
            선수단
          </Link>
        </li> */}
        <li>
          <Link className={styles.navbar_link} to="/allplayers">
            선수단
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_link} to="/login">
            로그인
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_link} to="/register">
            회원가입
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_link} to="/board">
            게시판
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_link} to="/hilight">
            하이라이트
          </Link>
        </li>
      </ul>

      <ul className={`${styles.navbar_icons} ${isOpen ? styles.open : ""}`}>
        <li>
          <FontAwesomeIcon icon={faXTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faYoutube} />
        </li>
      </ul>

      {isSmallScreen ? (
        <button className={styles.navbar_toggleBtn} onClick={handleHamb}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      ) : null}
    </nav>
  );
};

export default Navbar;
