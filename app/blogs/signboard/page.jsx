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
                    Signboard
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
                Signboard: The First Impression of Your Business
              </h1>
              <div>
                <img src="/blogs/blogImg.jpg" alt="" width="100%" />
              </div>
              <div>
                <h3 className={styles.blogSubHeading}>Introduction</h3>
                <p className={styles.blogContentPara}>
                  A well-designed signboard is a key element in attracting
                  customers to your business. It acts as a silent salesperson,
                  conveying your brand identity and making your location easily
                  recognizable.
                </p>
                <h3 className={styles.blogSubHeading}>Types of Signboards</h3>
                <ul className={styles.blogContentUl}>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>Glow Signboards -</b>
                    Illuminated with LED lights, ideal for night visibility.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>Metal Signboards -</b>
                    Printed vinyl graphics on a sturdy base, cost-effective and
                    long-lasting.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>Wooden Signboards -</b>
                    Aesthetic appeal, mostly used for cafes, boutiques, and
                    restaurants.
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>
                  Why Signboards Are Important?
                </h3>
                <ul className={styles.blogUsesUl}>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Enhances Brand Visibility -
                    </b>
                    Helps businesses stand out in a crowded market.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}> 24/7 Marketing Tool -</b>{" "}
                    A well-lit signboard works day and night to promote your
                    business.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}> Guides Customers -</b>{" "}
                    Helps people locate your business easily.
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>Conclusion</h3>
                <p className={styles.blogContentPara}>
                  A high-quality signboard is an essential investment for any
                  business. Get in touch with us to create a customized
                  signboard that makes an impact!
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
