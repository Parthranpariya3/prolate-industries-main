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
                    href="/our-work/borox"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    BORAX (Decahydrate) Extra pure (Di-Sodium) Tetraborate Na2B4o7.10H2o M.W. 381.37

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
                <h2 className={styles.workSubHeading}>BORAX (Decahydrate) Extra pure (Di-Sodium) Tetraborate Na2B4o7.10H2o M.W. 381.37</h2>
                <div className={styles.workTopParaDiv}>
                  <ul>
                    <li className={styles.workContentLi}><span>CAS No.:</span> 1303-96-4</li>
                    <li className={styles.workContentLi}><span>Appearance:</span> White crystalline powder</li>
                    <li className={styles.workContentLi}><span>Assay (by acidimetry):</span> 99–103%</li>
                    <li className={styles.workContentLi}><span>pH (5% water):</span> 9.2–9.5</li>
                    <li className={styles.workContentLi}><span>Maximum Limits of Impurities: Carbonate, Bicarbonate</span></li>
                    {/* <li className={styles.workContentLi}><span>:</span> Passes test</li> */}
                    <li className={styles.workContentLi}><span>Sulphate (SO₄):</span> 0.005%</li>
                    <li className={styles.workContentLi}><span>Heavy metals (as Pb):</span> 0.002%</li>
                  </ul>
<div className={styles.productImg}>
                                        <img src="/product-5.jpeg" width="100%" />
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
