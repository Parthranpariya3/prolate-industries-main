import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Roll Up Stande/rollImg1.jpg" },
    { img: "/Roll Up Stande/rollImg2.jpg" },
    { img: "/Roll Up Stande/rollImg3.jpg" },
    { img: "/Roll Up Stande/rollImg4.jpg" },
    { img: "/Roll Up Stande/rollImg5.jpg" },
    { img: "/Roll Up Stande/rollImg6.jpg" },
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
                    href="/our-work/roll-up-stande"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Roll Up Stande
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
                <h2 className={styles.workSubHeading}>Roll Up Stande</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    Roll-up standees are light-weight and simple in operation.
                    This makes them an ideal solution for exhibitions since it's
                    easy to get them there and put them up. The form-factor of
                    the rollup standee is such that it can be easily put into a
                    bag (provided) and transported. The smaller variants (3
                    foot) can be easily carried in flight cabins, while the
                    larger sizes can be put into the check-in baggage.
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
