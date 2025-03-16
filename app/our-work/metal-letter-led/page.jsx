import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    {
      img: "/Metal Letter/metalLetter1.jpg",
    },
    {
      img: "/Metal Letter/metalLetter2.jpg",
    },
    {
      img: "/Metal Letter/metalLetter3.jpg",
    },
    {
      img: "/Metal Letter/metalLetter4.jpg",
    },
    {
      img: "/Metal Letter/metalLetter5.jpg",
    },
    {
      img: "/Metal Letter/metalLetter6.jpg",
    },
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
                    href="/our-work/metal-letter-led"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Metal Letter Led
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
                <h2 className={styles.workSubHeading}>Metal Letter Led</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    Metal letter signs look very classy and come in a variety of
                    finishes like gold, rose gold, shiny chrome, brush finish,
                    etc. Metal obviously does not allow light to pass through
                    but the letters can be given a back-glow using LEDs. Metal
                    signs are used where light visibility is not a very
                    important factor. For example - 5-star hotels, shop
                    interiors, well-lit halls, etc.
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
