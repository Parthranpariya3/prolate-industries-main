import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Client/clientImg1.jpg" },
    { img: "/Client/clientImg2.jpg" },
    { img: "/Client/clientImg3.jpg" },
    { img: "/Client/clientImg4.jpg" },
    { img: "/Client/clientImg5.jpg" },
    { img: "/Client/clientImg6.jpg" },
    { img: "/Client/clientImg7.jpg" },
    { img: "/Client/clientImg8.jpg" },
    { img: "/Client/clientImg9.jpg" },
    { img: "/Client/clientImg10.jpg" },
    { img: "/Client/clientImg11.jpg" },
    { img: "/Client/clientImg12.jpg" },
    { img: "/Client/clientImg13.jpg" },
    { img: "/Client/clientImg14.jpg" },
    { img: "/Client/clientImg15.jpg" },
    { img: "/Client/clientImg16.jpg" },
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
                    href="/our-work/client"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Client
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
                <h2 className={styles.workSubHeading}>Client</h2>
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
