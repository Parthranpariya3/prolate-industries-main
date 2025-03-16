import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/2D Acrylic Letter Led/acrylicImg1.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg2.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg3.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg4.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg5.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg6.jpg" },
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
                    href="/our-work/2D-cut-acrylic-letter-led"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    2D Acrylic Letter Led
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
                <h2 className={styles.workSubHeading}>2D Acrylic Letter Led</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    This type of board is used where the letters are very small
                    or the content on the signboard is very complex. Acrylic
                    letters are not 3D but flush with the base-board. As the
                    name suggests, the letters are hollowed out of the base ACP
                    frame, similar to how stencils are cut from paper. An
                    acrylic shop with lots of stuff besides name and logo.
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
