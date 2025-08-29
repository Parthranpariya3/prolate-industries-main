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
                    href="/our-work/acetic-acid-glacial"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                   ACETIC ACID GLACIAL Extra pure CH3COOH. M.W. 60.05
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
                  ACETIC ACID GLACIAL Extra pure CH3COOH. M.W. 60.05
                </h2>
                <div className={styles.workTopParaDiv}>
                 <ul>
  <li className={styles.workContentLi}><span>CAS No.:</span> 64-19-7</li>
  <li className={styles.workContentLi}><span>Appearance:</span> Clear colourless liquid</li>
  <li className={styles.workContentLi}><span>Assay (alkalimetric):</span> min. 99.5%</li>
  <li className={styles.workContentLi}><span>Weight/mL at 20°C:</span> 1.047–1.052 g</li>
  <li className={styles.workContentLi}><span>Chloride (Cl):</span> max. 0.0005%</li>
  <li className={styles.workContentLi}><span>Arsenic (As):</span> max. 0.0002%</li>
  <li className={styles.workContentLi}><span>Iron (Fe):</span> max. 0.0002%</li>
  <li className={styles.workContentLi}><span>Density [g/cm³]:</span> 1.049</li>
  <li className={styles.workContentLi}><span>Solubility in water:</span> Complete</li>
</ul>
<div className={styles.productImg}>
                                        <img src="/product-2.jpeg" width="100%" />
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
