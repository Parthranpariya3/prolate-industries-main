import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Star Flex/starImg1.jpg" },
    { img: "/Star Flex/starImg2.jpg" },
    { img: "/Star Flex/starImg3.jpg" },
    { img: "/Star Flex/starImg4.jpg" },
    { img: "/Star Flex/starImg5.jpg" },
    { img: "/Star Flex/starImg6.jpg" },
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
                    href="/our-work/star-flex"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Star Flex
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
                <h2 className={styles.workSubHeading}>Star Flex</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    Star flex prints are the option chosen by most of our
                    customers for their outdoor prints. 'Star' is actually a
                    brand of premium flex media. At 340 gsm, it is much thicker
                    than regular flex. This means that the material is stronger
                    and will last much longer in an outdoor environment. More
                    importantly, Star flex has a superior coating on its front
                    surface. This enables us to produce high resolution images
                    on it. And the colors of the same look extremely vibrant.
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
