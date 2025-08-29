import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/2D Acrylic Letter Led/acrylicImg1.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg2.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg3.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg4.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg5.jpg" },
    { img: "/2D Acrylic Letter Led/acrylicImg6.jpg" },
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
                    href="/our-work/ammonium-sulphate"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    AMMONIUM SULPHATE Extra pure (NH4)2SO4.M.W. 132.14 
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
                <h2 className={styles.workSubHeading}>AMMONIUM SULPHATE Extra pure (NH4)2SO4.M.W. 132.14 </h2>
                <div className={styles.workTopParaDiv}>

                  <ul>
                    <li className={styles.workContentLi}><span>CAS No.:</span> 7783-20-2</li>
                    <li className={styles.workContentLi}><span>Appearance:</span> Colourless crystals / White crystalline powder</li>
                    <li className={styles.workContentLi}><span>Assay (titration):</span> min 98.5%</li>
                    <li className={styles.workContentLi}><span>pH (5% solution, 25°C):</span> 4.5–6.0</li>
                    <li className={styles.workContentLi}><span>Chloride (Cl):</span> max 0.003%</li>
                    <li className={styles.workContentLi}><span>Iron (Fe):</span> max 0.002%</li>
                    <li className={styles.workContentLi}><span>Sulfated Ash:</span> max 0.05%</li>
                    <li className={styles.workContentLi}><span>Heavy Metals (as Pb):</span> max 0.002%</li>
                  </ul>
<div className={styles.productImg}>
                                        <img src="/product-1.jpeg" width="100%" />
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
