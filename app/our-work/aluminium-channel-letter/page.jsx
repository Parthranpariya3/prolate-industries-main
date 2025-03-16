import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Aluminium Channel Letter/aluminiumImg1.jpg" },
    { img: "/Aluminium Channel Letter/aluminiumImg2.jpg" },
    { img: "/Aluminium Channel Letter/aluminiumImg3.jpg" },
    { img: "/Aluminium Channel Letter/aluminiumImg4.jpg" },
    { img: "/Aluminium Channel Letter/aluminiumImg5.jpg" },
    { img: "/Aluminium Channel Letter/aluminiumImg6.jpg" },
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
                    href="/our-work/aluminium-channel-letter"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Aluminium Channel Letter
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
                <h2 className={styles.workSubHeading}>
                  Aluminium Channel Letter
                </h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    The sides of the channel are formed by bending 2” to 8”
                    Aluminium Channel with a base thickness of 1mm to 3mm
                    (depending on the letter size) and body of 1 or 1.2mm; body
                    colour can be customized. Front can be made up of either
                    Acrylic with 2mm to 5mm of thickness sheet or Polycarbonate
                    with 2mm to 5mm of thickness sheet.
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
