import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Backlit Sign Board/backlitImg1.jpg" },
    { img: "/Backlit Sign Board/backlitImg2.jpg" },
    { img: "/Backlit Sign Board/backlitImg3.jpg" },
    { img: "/Backlit Sign Board/backlitImg4.jpg" },
    { img: "/Backlit Sign Board/backlitImg5.jpg" },
    { img: "/Backlit Sign Board/backlitImg6.jpg" },
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
                    href="/our-work/backlit-sign-board"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Backlit Sign Board
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
                <h2 className={styles.workSubHeading}>Backlit Sign Board</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    Backlit prints, as the name suggests, are lit from within.
                    We fabricate a metal box of 6 inches’ depth. Bright
                    fluorescent tube lights are placed inside the box. Finally,
                    a specialised flex media, which allows light to pass
                    through, is stretched on top of the box. The end effect is a
                    brightly lit print, which glows and instantly attracts
                    viewers.
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
