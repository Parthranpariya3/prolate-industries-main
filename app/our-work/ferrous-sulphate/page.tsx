

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
                                        href="/our-work/ferrous-sulphate"
                                        className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                                    >
                                        FERROUS sulphate heptahydrate Extra pure (Iron (ll) sulphate) Feso4.7H2o M.W. 278.01
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
                                <h2 className={styles.workSubHeading}>FERROUS sulphate heptahydrate Extra pure (Iron (ll) sulphate) Feso4.7H2o M.W. 278.01</h2>
                                <div className={styles.workTopParaDiv}>
                                    <ul>
  <li className={styles.workContentLi}><span>CAS No.:</span> 7782-63-0</li>
  <li className={styles.workContentLi}><span>Appearance:</span> Light blue, blue-green, or green powder/crystals</li>
  <li className={styles.workContentLi}><span>Assay (minimum):</span> 98.5%</li>
  <li className={styles.workContentLi}><span>pH (5% solution in water):</span> 3–4</li>
  <li className={styles.workContentLi}><span>Maximum limits of impurities:</span></li>
  <li className={styles.workContentLi}><span>Chloride (Cl):</span> 0.01%</li>
  <li className={styles.workContentLi}><span>Arsenic (As):</span> 0.0002%</li>
  <li className={styles.workContentLi}><span>Lead (Pb):</span> 0.001%</li>
</ul>

                                    <div className={styles.productImg}>
                                        <img src="/product-9.jpeg" width="100%" />
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
