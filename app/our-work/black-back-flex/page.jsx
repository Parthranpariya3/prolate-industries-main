import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Black Back Flex/blackImg1.jpg" },
    { img: "/Black Back Flex/blackImg2.jpg" },
    { img: "/Black Back Flex/blackImg3.jpg" },
    { img: "/Black Back Flex/blackImg4.jpg" },
    { img: "/Black Back Flex/blackImg5.jpg" },
    { img: "/Black Back Flex/blackImg6.jpg" },
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
                    href="/our-work/black-back-flex"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Black Back Flex
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
                <h2 className={styles.workSubHeading}>Black Back Flex</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    This flex media addresses a problem peculiar to outdoor
                    hoardings. Many a times, the sun comes up from behind
                    hoardings which are put up in open spaces. The sunlight then
                    shines through the print media. This light, leaking from the
                    behind the white colored frontlit flex, makes it difficult
                    to view the print on the front. A similar effect is seen
                    when you hold up a printed page to the tubelight. The
                    letters become obscured when the light shines through.
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
