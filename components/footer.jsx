import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import styles from "../styles/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerMainDiv}>
      <div className="container">
        <div className={styles.containerPadding}>
          <div>
            <div className={styles.footerDiv}>
              <div className={styles.footerlogoContentDiv}>
                <div className={styles.footerLogoDiv}>
                  <Link href="/">
                    <img
                      src="/prolatelogo.png"
                      alt="logo"
                      width="100%"
                      className={styles.footerLogo}
                    />
                  </Link>
                </div>
                <div className={styles.footerParaDivs}>
                  <p className={styles.footerPara}>
                    Established in 2021, GURU GRAPHICS has been a trusted name
                    in Surat for high-quality printing services. With a
                    commitment to excellence, we strive to deliver the best
                    solutions for all your signage and printing needs.
                  </p>
                </div>
              </div>
              <div className={styles.footerQuickLinksDiv}>
                <h3 className={styles.footerQuickLinksHeading}>Quick Link</h3>
                <div>
                  <p className={styles.footerQuickLinks}>
                    <Link href="/" className={styles.footerLinkItems}>
                      Home
                    </Link>
                  </p>
                  <p className={styles.footerQuickLinks}>
                    <Link href="/#about-us" className={styles.footerLinkItems}>
                      About Us
                    </Link>
                  </p>
                  <p className={styles.footerQuickLinks}>
                    <Link href="/#our-work" className={styles.footerLinkItems}>
                      Services
                    </Link>
                  </p>
                  <p className={styles.footerQuickLinks}>
                    <Link href="/#blogs" className={styles.footerLinkItems}>
                      Blog
                    </Link>
                  </p>
                  <p className={styles.footerQuickLinks}>
                    <Link href="/contact-us" className={styles.footerLinkItems}>
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
              <div className={styles.footerGetInTouchDiv}>
                <h3 className={styles.footerGetInTouch}>Get in Touch</h3>
                <div className={styles.footerIconContent}>
                  <div className={styles.footerIconDiv}>
                    <IoCallOutline className={styles.footerIcon} />
                  </div>
                  <div className={styles.footerContentDiv}>
                    <p className={styles.footerContent}>+91 7574835957</p>
                  </div>
                </div>
                <div className={styles.footerIconContent}>
                  <div className={styles.footerIconDiv}>
                    <IoMailOutline className={styles.footerIcon} />
                  </div>
                  <div className={styles.footerContentDiv}>
                    <p className={styles.footerContent}>
                      prolate.industries@gmail.com
                    </p>
                  </div>
                </div>
                <div className={styles.footerIconContent}>
                  <div className={styles.footerIconDiv}>
                    <IoLocationOutline className={styles.footerIcon} />
                  </div>
                  <div className={styles.footerContentDiv}>
                    <p className={styles.footerContent}>
                      Shop-4 Shiv Complex, near umiya circle, 150ft ring road, Rajkot-360004.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerSocialIconMainDiv}>
              <div className={styles.footerSocialIconDiv}>
                <FaInstagram className={styles.footerSocialIcon} />
              </div>
              <div className={styles.footerSocialIconDiv}>
                <SlSocialFacebook className={styles.footerSocialIcon} />
              </div>
              <div className={styles.footerSocialIconDiv}>
                <SlSocialLinkedin className={styles.footerSocialIcon} />
              </div>
              <div className={styles.footerSocialIconDiv}>
                <BsTwitterX className={styles.footerSocialIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
