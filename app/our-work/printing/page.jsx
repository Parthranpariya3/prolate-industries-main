import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Printing/printing1.jpg" },
    { img: "/Printing/printing2.jpg" },
    { img: "/Printing/printing3.jpg" },
    { img: "/Printing/printing4.jpg" },
    { img: "/Printing/printing5.jpg" },
    { img: "/Printing/printing6.jpg" },
    { img: "/Printing/printing7.jpg" },
    { img: "/Printing/printing8.jpg" },
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
                    href="/our-work/printing"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Printing
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
                <h2 className={styles.workSubHeading}>Printing</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    Whether it's a basic business card, flyer, or catalog, we
                    print, fold, glue, bind, and create all that offset and
                    digital printing offers. Maybe your firm needs non-standard
                    documents to keep track of trade in goods, money, or other
                    things?
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
