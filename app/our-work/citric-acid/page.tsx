import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
    const data = [
        { img: "/Frontlit Flex/frontlitImg1.jpg" },
        { img: "/Frontlit Flex/frontlitImg2.jpg" },
        { img: "/Frontlit Flex/frontlitImg3.jpg" },
        { img: "/Frontlit Flex/frontlitImg4.jpg" },
        { img: "/Frontlit Flex/frontlitImg5.jpg" },
        { img: "/Frontlit Flex/frontlitImg6.jpg" },
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
                                        href="/our-work/citric-acid"
                                        className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                                    >
                                        CITRIC ACID (Monohydrate) Extra Pure C6H8o7.H2o M.W. 210.14
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
                                <h2 className={styles.workSubHeading}>CITRIC ACID (Monohydrate) Extra Pure C6H8o7.H2o M.W. 210.14</h2>
                                <div className={styles.workTopParaDiv}>
                                    <ul>
                                        <li className={styles.workContentLi}><span>CAS No.:</span> 5949-29-1</li>
                                        <li className={styles.workContentLi}><span>Appearance:</span> White or almost white, crystalline powder, colourless crystals or granules</li>
                                        <li className={styles.workContentLi}><span>Assay (by NaOH titration):</span> min. 99.0%</li>
                                        <li className={styles.workContentLi}><span>Chloride (Cl):</span> max. 0.005%</li>
                                        <li className={styles.workContentLi}><span>Sulphate (SO₄):</span> max. 0.01%</li>
                                        <li className={styles.workContentLi}><span>Oxalate (C₂H₂O₄):</span> max. 0.035%</li>
                                        <li className={styles.workContentLi}><span>Heavy metals (as Pb):</span> max. 0.001%</li>
                                    </ul>
                                    <div className={styles.productImg}>
                                        <img src="/product-8.jpeg" width="100%" />
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
