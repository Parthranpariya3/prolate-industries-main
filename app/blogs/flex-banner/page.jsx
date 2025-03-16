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
                    Flex Banner
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
                Flex Banner: A Cost-Effective and Versatile Advertising Solution
              </h1>
              <div>
                <img src="/blogs/blogImg.jpg" alt="" width="100%" />
              </div>
              <div>
                <h3 className={styles.blogSubHeading}>Introduction</h3>
                <p className={styles.blogContentPara}>
                  Flex banners are one of the most popular advertising materials
                  used by businesses, events, and promotional campaigns. They
                  are cost-effective, durable, and customizable, making them a
                  preferred choice for outdoor and indoor branding.
                </p>
                <h3 className={styles.blogSubHeading}>
                  Benefits of Flex Banners
                </h3>
                <ul className={styles.blogContentUl}>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Affordable Marketing Solution -
                    </b>{" "}
                    Compared to other advertising materials, flex banners are
                    budget-friendly while delivering maximum visibility.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>Customizable Designs -</b>{" "}
                    Available in various sizes and designs, they can be tailored
                    to match your branding needs.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Durable and Weather-Resistant -
                    </b>{" "}
                    High-quality flex materials can withstand harsh weather
                    conditions, making them ideal for outdoor use.
                  </li>
                  <li className={styles.blogContentLi}>
                    <b className={styles.blogLiBold}>
                      Easy to Transport and Install -
                    </b>{" "}
                    Flex banners are lightweight and can be easily rolled up for
                    transport and reuse.
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>
                  Best Uses of Flex Banners
                </h3>
                <ul className={styles.blogUsesUl}>
                  <li className={styles.blogUsesLi}>
                    Promotional events and product launches
                  </li>
                  <li className={styles.blogUsesLi}>
                    Storefront advertising and sales promotions
                  </li>
                  <li className={styles.blogUsesLi}>
                    Political and social awareness campaigns
                  </li>
                  <li className={styles.blogUsesLi}>
                    Event backdrops and trade shows
                  </li>
                </ul>
                <h3 className={styles.blogSubHeading}>Conclusion</h3>
                <p className={styles.blogContentPara}>
                  Flex banners offer an affordable and impactful way to promote
                  your brand. If you're looking for high-quality flex printing,
                  get in touch with us today!
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
