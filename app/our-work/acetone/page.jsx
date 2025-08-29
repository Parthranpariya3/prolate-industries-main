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
                    href="/our-work/acetone"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    ACETONE Extra pure (CH3)2co M.W. 58.08
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
                <h2 className={styles.workSubHeading}>ACETONE Extra pure (CH3)2co M.W. 58.08</h2>
                <div className={styles.workTopParaDiv}>
                  <ul>
  <li className={styles.workContentLi}><span>CAS No.:</span> 67-64-1</li>
  <li className={styles.workContentLi}><span>Appearance:</span> Clear colourless liquid with characteristic odour</li>
  <li className={styles.workContentLi}><span>Assay (GC):</span> min. 99%</li>
  <li className={styles.workContentLi}><span>Water (H₂O):</span> max. 0.5%</li>
  <li className={styles.workContentLi}><span>Non-volatile matter:</span> max. 0.005%</li>
  <li className={styles.workContentLi}><span>Melting point:</span> -95.35 °C</li>
  <li className={styles.workContentLi}><span>Density:</span> 0.79</li>
  <li className={styles.workContentLi}><span>Solubility in water:</span> Complete</li>
</ul>
<div className={styles.productImg}>
                                        <img src="/product-6.jpeg" width="100%" />
                                    </div>

                </div>
              </div>
              {/* <div className={styles.workAllImages}>
                {data.map((e, i) => {
                  return (
                    <div key={i}>
                      <img src={e.img} alt="" width="100%" />
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
