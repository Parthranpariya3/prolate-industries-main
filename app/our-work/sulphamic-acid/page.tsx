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
                                        SULPHAMIC ACID Extra pure NH2.SO3H M.W. 97.09                  </Link>
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
                                <h2 className={styles.workSubHeading}>SULPHAMIC ACID Extra pure NH2.SO3H M.W. 97.09</h2>
                                <div className={styles.workTopParaDiv}>
                                    <ul>
                                        <li className={styles.workContentLi}><span>CAS No.:</span> 5329-14-6</li>
                                        <li className={styles.workContentLi}><span>Appearance:</span> White crystalline powder</li>
                                        <li className={styles.workContentLi}><span>Assay (alkalimetric):</span> min. 99%</li>
                                        <li className={styles.workContentLi}><span>Residue on ignition:</span> max. 0.2%</li>
                                        <li className={styles.workContentLi}><span>Chloride (Cl):</span> max. 0.01%</li>
                                        <li className={styles.workContentLi}><span>Sulphate (SO₄):</span> max. 0.1%</li>
                                        <li className={styles.workContentLi}><span>pH value:</span> 1.18</li>
                                        <li className={styles.workContentLi}><span>Density [g/cm³]:</span> 2.15</li>
                                        <li className={styles.workContentLi}><span>Solubility:</span> Soluble in water</li>
                                    </ul>

                                    <div className={styles.productImg}>
                                        <img src="/product-10.jpeg" width="100%" />
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
