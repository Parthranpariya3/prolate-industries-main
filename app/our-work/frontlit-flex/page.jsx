import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Frontlit Flex/frontlitImg1.jpg" },
    { img: "/Frontlit Flex/frontlitImg2.jpg" },
    { img: "/Frontlit Flex/frontlitImg3.jpg" },
    { img: "/Frontlit Flex/frontlitImg4.jpg" },
    { img: "/Frontlit Flex/frontlitImg5.jpg" },
    { img: "/Frontlit Flex/frontlitImg6.jpg" },
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
                    href="/our-work/frontlit-flex"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Frontlit Flex
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
                <h2 className={styles.workSubHeading}>Frontlit Flex</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    This is the entry level flex print used for short run ad
                    campaigns. The material is a 280 gsm thin media. While the
                    media is not very thick, it is strong enough for hoardings
                    and small banner prints. Images are generally reproduced on
                    a medium resolution on regular frontlit flex. The main USP
                    of this product is its low cost. Frontlit flex is ideal for
                    outdoor advertisements which need to be put up for a couple
                    of months. The inks may start showing signs of fading in the
                    sunlight, after this duration.
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
