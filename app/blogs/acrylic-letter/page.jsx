import Link from "next/link";
import styles from "../../../styles/blog.module.scss";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
const Page = () => {
  return (
    <>
      <Navigation />
      <div className={styles.blogHeadingMainDiv}>
        <div className="container">
          <div className="containerPadding">
            <div className={styles.blogSubDiv}>
              <div className={styles.blogHeadingDiv}>
                <h1 className={styles.blogHeading}>Our Blogs</h1>
              </div>
              <div className={styles.blogParaDiv}>
                <p className={styles.blogPara}>
                  <Link
                    href="/"
                    className={`${styles.blogParaLink} ${styles.blogBreadCrumbHomeLink}`}
                  >
                    Home
                  </Link>{" "}
                  / Blogs /{" "}
                  <Link
                    href="/blogs/blog-1"
                    className={`${styles.blogParaLink} ${styles.blogBreadCrumbActiveLink}`}
                  >
                    Acrylic Board
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.blogContainer}>
          <div className={styles.blogContainerPadding}>
            <div>
              <h1 className={styles.blogName}>
                Acrylic Board: A Modern and Stylish Branding Choice
              </h1>
              <div>
                <img src="/blogs/blogImg.jpg" alt="" width="100%" />
              </div>
              <div>
                <h3 className={styles.blogSubHeading}>Introduction</h3>
                <p className={styles.blogContentPara}>
                  Acrylic boards have gained popularity due to their sleek and
                  modern look. They are widely used in corporate offices, retail
                  stores, and showrooms to enhance brand presence.
                </p>
                <h3 className={styles.blogSubHeading}>
                  Benefits of Acrylic Boards
                </h3>
                <ul className={styles.blogContentUl}>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Premium and Professional Look -
                    </b>{" "}
                    The glossy and transparent finish adds a touch of
                    sophistication.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>Highly Durable -</b> Made
                    from high-quality plastic material that lasts longer than
                    traditional signage.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Customizable in Different Shapes & Sizes -
                    </b>{" "}
                    Perfect for creating unique and attractive signage.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>Weather-Resistant -</b>{" "}
                    Suitable for both indoor and outdoor applications.
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>
                  Common Uses of Acrylic Boards
                </h3>
                <ul className={styles.blogUsesUl}>
                  <li className={styles.blogUsesLi}>
                    Office nameplates and corporate branding
                  </li>
                  <li className={styles.blogUsesLi}>
                    Retail store displays and product showcases
                  </li>
                  <li className={styles.blogUsesLi}>
                    Reception signage for hotels and businesses
                  </li>
                  <li className={styles.blogUsesLi}>
                    Directional signs in malls and hospitals
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>Conclusion</h3>
                <p className={styles.blogContentPara}>
                  If you want a stylish and durable signage solution, acrylic
                  boards are the perfect choice. Contact us to get your custom
                  acrylic board today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
