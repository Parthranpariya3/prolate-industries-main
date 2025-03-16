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
                    LED Sign
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
                LED Sign: The Future of Eye-Catching Advertising
              </h1>
              <div>
                <img src="/blogs/blogImg.jpg" alt="" width="100%" />
              </div>
              <div>
                <h3 className={styles.blogSubHeading}>Introduction</h3>
                <p className={styles.blogContentPara}>
                  LED signs are the most modern and attention-grabbing signage
                  solutions available today. They offer bright and dynamic
                  displays, making them ideal for businesses that want to stand
                  out.
                </p>
                <h3 className={styles.blogSubHeading}>
                  Advantages of LED Signs
                </h3>
                <ul className={styles.blogContentUl}>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>High Visibility -</b>
                    Bright and clear, even from a distance and in low-light
                    conditions.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>Energy Efficient -</b>
                    Consumes less power than traditional neon signs, saving
                    electricity costs.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Customizable & Programmable -
                    </b>
                    Can display dynamic content, animations, and promotional
                    messages.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Long-Lasting and Low Maintenance -
                    </b>
                    Durable LED lights last for years with minimal maintenance.
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>
                  Best Applications of LED Signs
                </h3>
                <ul className={styles.blogUsesUl}>
                  <li className={styles.blogUsesLi}>
                    Storefront signage and business branding
                  </li>
                  <li className={styles.blogUsesLi}>
                    Digital billboards for advertising and promotions
                  </li>
                  <li className={styles.blogUsesLi}>
                    Hotel, restaurant, and café signage
                  </li>
                  <li className={styles.blogUsesLi}>
                    Mall and airport directional signs
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>Conclusion</h3>
                <p className={styles.blogContentPara}>
                  LED signs are an excellent investment for businesses looking
                  to create a strong visual impact. Upgrade your signage with
                  our high-quality LED signs today!
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
