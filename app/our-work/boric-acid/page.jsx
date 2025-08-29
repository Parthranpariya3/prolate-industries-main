import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Client/clientImg1.jpg" },
    { img: "/Client/clientImg2.jpg" },
    { img: "/Client/clientImg3.jpg" },
    { img: "/Client/clientImg4.jpg" },
    { img: "/Client/clientImg5.jpg" },
    { img: "/Client/clientImg6.jpg" },
    { img: "/Client/clientImg7.jpg" },
    { img: "/Client/clientImg8.jpg" },
    { img: "/Client/clientImg9.jpg" },
    { img: "/Client/clientImg10.jpg" },
    { img: "/Client/clientImg11.jpg" },
    { img: "/Client/clientImg12.jpg" },
    { img: "/Client/clientImg13.jpg" },
    { img: "/Client/clientImg14.jpg" },
    { img: "/Client/clientImg15.jpg" },
    { img: "/Client/clientImg16.jpg" },
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
                    href="/our-work/boric-acid"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    BORIC ACID(POWDER) Extra pure H3Bo3 M.W. 61.83
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
                <h2 className={styles.workSubHeading}>BORIC ACID(POWDER) Extra pure H3Bo3 M.W. 61.83</h2>
                <div className={styles.workTopParaDiv}>
                  <ul>
                    <li className={styles.workContentLi}><span>CAS No.:</span> 10043-35-3</li>
                    <li className={styles.workContentLi}><span>Appearance:</span> White powder</li>
                    <li className={styles.workContentLi}><span>Assay (alkalimetric, on dried basis):</span> 99.5–100.5%</li>
                    <li className={styles.workContentLi}><span>pH (3.3% solution in water):</span> 3.8–4.8</li>
                    <li className={styles.workContentLi}><span>Sulphate (SO₄):</span> max. 0.045%</li>
                    <li className={styles.workContentLi}><span>Heavy metals (as Pb):</span> max. 0.0015%</li>
                    <li className={styles.workContentLi}><span>Arsenic (As):</span> max. 0.001%</li>
                    <li className={styles.workContentLi}><span>Solubility:</span> Soluble in water</li>
                  </ul>
                  <div className={styles.productImg}>
                                        <img src="/product-7.jpeg" width="100%" />
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
