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
                    href="/our-work/lab-reagent-acetone"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    LABORATORY REAGENT Acetone (2-propanone;Dimethylketone) Extra pure (CH3)2co MW:58.08
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
                <h2 className={styles.workSubHeading}>LABORATORY REAGENT Acetone (2-propanone;Dimethylketone) Extra pure (CH3)2co  MW:58.08</h2>
                <div className={styles.workTopParaDiv}>
                  <ul>
  <li className={styles.workContentLi}><span>Appearance:</span> Clear colorless liquid</li>
  <li className={styles.workContentLi}><span>Assay (GC):</span> min. 99.0%</li>
  <li className={styles.workContentLi}><span>Water (H₂O):</span> max. 0.5%</li>
  <li className={styles.workContentLi}><span>Acidity:</span> max. 0.2 ml</li>
  <li className={styles.workContentLi}><span>Density (g/mL) @20°C:</span> 0.789 – 0.792 g</li>
  <li className={styles.workContentLi}><span>Boiling Range:</span> 55–56 °C</li>
  <li className={styles.workContentLi}><span>Non-volatile matter:</span> max. 0.005%</li>
  <li className={styles.workContentLi}><span>Storage Temperature:</span> Store below 30°C</li>
</ul>
<div className={styles.productImg}>
                                        <img src="/product-4.jpeg" width="100%" />
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
