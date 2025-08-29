import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Acrylic Letter/acrylicImg1.jpg" },
    { img: "/Acrylic Letter/acrylicImg2.jpg" },
    { img: "/Acrylic Letter/acrylicImg3.jpg" },
    { img: "/Acrylic Letter/acrylicImg4.jpg" },
    { img: "/Acrylic Letter/acrylicImg5.jpg" },
    { img: "/Acrylic Letter/acrylicImg6.jpg" },
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
                    href="/our-work/lab-reagent-acetic-acid"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    LABORATORY REAGENT Acetic Acid Giacial (Ethanoic Acid) Extra Pure
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
                <h2 className={styles.workSubHeading}>LABORATORY REAGENT Acetic Acid Giacial (Ethanoic Acid) Extra Pure</h2>
                <div className={styles.workTopParaDiv}>
                  <ul>
                    <li className={styles.workContentLi}><span>Appearance:</span> Clear colorless liquid</li>
                    <li className={styles.workContentLi}><span>Assay (acidimetric):</span> min. 99.5%</li>
                    <li className={styles.workContentLi}><span>Wt. per mL at 20°C:</span> 1.047 – 1.052 g</li>
                    <li className={styles.workContentLi}><span>Freezing point:</span> 15.5 °C</li>
                    <li className={styles.workContentLi}><span>Chloride (Cl):</span> max. 0.0005%</li>
                    <li className={styles.workContentLi}><span>Sulphate (SO₄):</span> max. 0.0005%</li>
                    <li className={styles.workContentLi}><span>Arsenic (As):</span> max. 0.0002%</li>
                    <li className={styles.workContentLi}><span>Iron (Fe):</span> max. 0.0002%</li>
                    <li className={styles.workContentLi}><span>Lead (Pb):</span> max. 0.0002%</li>
                    <li className={styles.workContentLi}><span>Non-volatile matter:</span> max. 0.01%</li>
                  </ul>
                  <div className={styles.productImg}>
                                        <img src="/product-3.jpeg" width="100%" />
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
