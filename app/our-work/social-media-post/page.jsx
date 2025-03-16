import Link from "next/link";
import styles from "../../../styles/work.module.scss";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const Page = () => {
  const data = [
    { img: "/Social Media Post/socialImg1.jpg" },
    { img: "/Social Media Post/socialImg2.jpg" },
    { img: "/Social Media Post/socialImg3.jpg" },
    { img: "/Social Media Post/socialImg4.jpg" },
    { img: "/Social Media Post/socialImg5.jpg" },
    { img: "/Social Media Post/socialImg6.jpg" },
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
                    href="/our-work/social-media-post"
                    className={`${styles.workParaLink} ${styles.workBreadCrumbActiveLink}`}
                  >
                    Social Media Post
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
                <h2 className={styles.workSubHeading}>Social Media Post</h2>
                <div className={styles.workTopParaDiv}>
                  <p className={styles.workTopPara}>
                    This type of board is used where the letters are very small
                    or the content on the signboard is very complex. Acrylic
                    letters are not 3D but flush with the base-board. As the
                    name suggests, the letters are hollowed out of the base ACP
                    frame, similar to how stencils are cut from paper. An
                    acrylic shop with lots of stuff besides name and logo.
                  </p>
                </div>
              </div>
              <div className={styles.workAllImages}>
                {data.map((e, i) => {
                  return (
                    <div key={i}>
                      <img src={e.img} alt="" width="100%" />
                    </div>
                  );
                })}
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
