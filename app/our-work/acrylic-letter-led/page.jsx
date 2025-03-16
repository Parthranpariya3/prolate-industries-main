import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Acrylic Letter/acrylicImg1.jpg" },
    { img: "/Acrylic Letter/acrylicImg2.jpg" },
    { img: "/Acrylic Letter/acrylicImg3.jpg" },
    { img: "/Acrylic Letter/acrylicImg4.jpg" },
    { img: "/Acrylic Letter/acrylicImg5.jpg" },
    { img: "/Acrylic Letter/acrylicImg6.jpg" },
  ];
  return (
    <>
      <Navigation />
      <div className={styles.workHeadingMainDiv}>
        <div className="container">
          <div className="containerPadding">
            <div className={styles.workSubDiv}>
              <div className={styles.workHeadingDiv}>
                <h1 className={styles.workHeading}>Our Work</h1>
              </div>
              <div className={styles.workParaDiv}>
                <p className={styles.workPara}>
                  <Link
                    href="/"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbHomeLink}`}
                  >
                    Home
                  </Link>{" "}
                  / Our Work /{" "}
                  <Link
                    href="/our-work/acrylic-letter-led"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Acrylic Letter Led
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="containerPadding">
            <div>
              <div className={styles.workSubHeadingDiv}>
                <h2 className={styles.workSubHeading}>Acrylic Letter Led</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    The letters on this board are made from laser-cut acrylic.
                    They are mounted on an ACP frame and jut out approximately 3
                    inches from the base. LEDs are embedded within the letters
                    to give them a beautiful glow. Acrylic box letter boards are
                    ideal for corporate offices and retail stores.
                  </p>
                </div>
              </div>
              <div className={styles.workAllImages}>
                {data.map((e, i) => {
                  return (
                    <div key={i}>
                      <img src={e.img} alt="" width="100%" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
