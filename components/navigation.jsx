"use client";
import { useState } from "react";
import styles from "../styles/navigation.module.scss";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.navigationMainDiv}>
        <div className="container">
          <div className={styles.containerPadding}>
            <div className={styles.navigationSubDiv}>
              <div className={styles.logoDiv}>
                <Link href="/">
                  <img
                    src="/prolatelogo.png"
                    alt=""
                    width="100%"
                    className={styles.logo}
                  />
                </Link>
              </div>
              <div className={`${styles.desktopMenu} ${styles.navItemDiv}`}>
                <div className={styles.navItemAllDiv}>
                  <p className={styles.navItem}>
                    <Link href="/" className={styles.navItemsLink}>
                      Home
                    </Link>
                  </p>
                  <p className={styles.navItem}>
                    <Link href="/#about-us" className={styles.navItemsLink}>
                      About Us
                    </Link>
                  </p>
                  <p className={styles.navItem}>
                    <Link href="/#our-work" className={styles.navItemsLink}>
                      Services
                    </Link>
                  </p>
                  {/* <p className={styles.navItem}>
                    <Link href="/#blogs" className={styles.navItemsLink}>
                      Blog
                    </Link>
                  </p> */}
                  <p className={styles.navItem}>
                    <Link href="/contact-us" className={styles.navItemsLink}>
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
              <div className={styles.responsiveMenu}>
                <div className={styles.humbergerMenuDiv}>
                  <IoMenu
                    className={styles.humbergerMenu}
                    onClick={() => {
                      setMenuOpen(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className={styles.responsiveMenuItems}>
          <div className={styles.mobileNavigationCloseBtnDiv}>
            <IoCloseOutline
              className={styles.mobileCloseBtn}
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </div>
          <div className={styles.mobileNavItemAllDiv}>
            <p className={styles.mobileNavItem}>
              <Link href="/" className={styles.navItemsLink}>
                Home
              </Link>
            </p>
            <p className={styles.mobileNavItem}>
              <Link href="/#about-us" className={styles.navItemsLink}>
                About Us
              </Link>
            </p>
            <p className={styles.mobileNavItem}>
              <Link href="/#our-work" className={styles.navItemsLink}>
                Services
              </Link>
            </p>
            <p className={styles.mobileNavItem}>
              <Link href="/#blogs" className={styles.navItemsLink}>
                Blog
              </Link>
            </p>
            <p className={styles.mobileNavItem}>
              <Link href="/contact-us" className={styles.navItemsLink}>
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
