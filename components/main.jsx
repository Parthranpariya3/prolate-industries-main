"use client";
import styles from "../styles/home.module.scss";
import { SlCalender } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
const Main = () => {
  const data = [
    {
      title: "AMMONIUM SULPHATE Extra pure (NH4)2SO4.M.W. 132.14 ",
      thumbnail: "/product-1.jpeg",
      url: "/our-work/ammonium-sulphate",
    },
    {
      title: "ACETIC ACID GLACIAL Extra pure CH3COOH. M.W. 60.05",
      thumbnail: "/product-2.jpeg",
      url: "/our-work/acetic-acid-glacial",
    },
    {
      title: "LABORATORY REAGENT Acetic Acid Giacial (Ethanoic Acid) Extra Pure",
      thumbnail: "/product-3.jpeg",
      url: "/our-work/lab-reagent-acetic-acid",
    },
    {
      title: "LABORATORY REAGENT Acetone (2-propanone;Dimethylketone) Extra pure (CH3)2co  MW:58.08",
      thumbnail: "/product-4.jpeg",
      url: "/our-work/lab-reagent-acetone",
    },
    {
      title: "BORAX (Decahydrate) Extra pure (Di-Sodium  Tetraborate Na2B4o7.10H2o M.W. 381.37",
      thumbnail: "/product-5.jpeg",
      url: "/our-work/borox",
    },
    {
      title: "ACETONE Extra pure (CH3)2co M.W. 58.08",
      thumbnail: "/product-6.jpeg",
      url: "/our-work/acetone",
    },
    {
      title: "BORIC ACID(POWDER) Extra pure H3Bo3 M.W. 61.83",
      thumbnail: "/product-7.jpeg",
      url: "/our-work/boric-acid",
    },
    {
     title: "CITRIC ACID (Monohydrate) Extra Pure C6H8o7.H2o M.W. 210.14",
      thumbnail: "/product-8.jpeg",
      url: "/our-work/citric-acid",
    },
    {
     title: "FERROUS sulphate heptahydrate Extra pure (Iron (ll) sulphate) Feso4.7H2o M.W. 278.01",
      thumbnail: "/product-9.jpeg",
      url: "/our-work/ferrous-sulphate",
    },
    {
     title: "SULPHAMIC ACID Extra pure NH2.SO3H M.W. 97.09",
      thumbnail: "/product-10.jpeg",
      url: "/our-work/sulphamic-acid",
    }
  ];

  const clientImg = [
    { logo: "/Client/oxford-logo.png" }
  ];

  const blogs = [
    {
      img: "/Frontlit Flex/frontlitImg4.jpg",
      title:
        "Flex Banner: A Cost-Effective and Versatile Advertising Solution Introduction",
      description:
        "Flex banners are one of the most popular advertising materials used by businesses, events, and promotional campaigns...",
      date: "Feb 5, 2022",
      readMoreUrl: "/blogs/flex-banner",
    },
    {
      img: "/2D Acrylic Letter Led/acrylicImg1.jpg",
      title: "Signboard: The First Impression of Your Business Introduction",
      description:
        "A well-designed signboard is a key element in attracting customers to your business. It acts as a silent salesperson, conveying your brand identity and making your...",
      date: "Feb 5, 2022",
      readMoreUrl: "/blogs/signboard",
    },
    {
      img: "/Acrylic Letter/acrylicImg5.jpg",
      title: "Acrylic Board: A Modern and Stylish Branding Choice Introduction",
      description:
        "Acrylic boards have gained popularity due to their sleek and modern look. They are widely used in corporate offices, retail stores, and showrooms to enhance brand presence...",
      date: "Feb 5, 2022",
      readMoreUrl: "/blogs/acrylic-letter",
    },
    {
      img: "/2D Acrylic Letter Led/acrylicImg6.jpg",
      title: "LED Sign: The Future of Eye-Catching Advertising Introduction",
      description:
        "LED signs are the most modern and attention-grabbing signage solutions available today. They offer bright and dynamic displays, making them ideal for businesses...",
      date: "Feb 5, 2022",
      readMoreUrl: "/blogs/led-sign",
    },
  ];

  const testimonials = [
    {
      img: "/testimonialImg.jpg",
      name: "Rahul S.",
      review:
        "I was truly impressed with the print quality and vibrant colors of my banner. The delivery was on time, and the customer service was excellent. Highly recommend for anyone looking for professional printing.",
    },
    {
      img: "/testimonialImg.jpg",
      name: "Priya M.",
      review:
        "The banners were durable and perfect for my shop promotion. The pricing was affordable, and the service was quick and efficient. I will definitely order again for my future needs.",
    },
    {
      img: "/testimonialImg.jpg",
      name: "Arjun T.",
      review:
        "Fantastic experience! The team provided fast service, and the print quality was outstanding. The customer support was friendly and helpful, making the entire process smooth and hassle-free.",
    },
    {
      img: "/testimonialImg.jpg",
      name: "Neha K.",
      review:
        "The design was professional, and the material was of top quality. My event banner turned out exactly as I wanted. I appreciate the attention to detail and quick turnaround time.",
    },
  ];

  return (
    <>
      <div>
        {/* ============================= FIRST SECTION ============================= */}
        <div className="container">
          <div className="containerPadding">
            <div className={styles.heroMainDiv}>
              <div className={styles.heroImgMainDiv}>
                <div className={styles.heroImgDiv}>
                  <img
                    src="/Prolate/homepage banner.jpeg"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div className={styles.heroContentMainDiv}>
                <h1 className={styles.heroHeading}>Welcome to Prolate Industries</h1>
                <div className={styles.heroParaDiv}>
                  <p className={styles.heroPara}>
                  Welcome to our chemical export and manufacturing company, where quality, reliability, and global reach define our operations. We specialize in delivering high-grade industrial and specialty chemicals to international markets with a focus on innovation, compliance, and customer satisfaction. Partner with us for trusted chemical solutions and seamless global trade.
                  </p>
                </div>

                <div>
                  <button className={styles.heroBtn}>
                    <Link href="/contact-us" className={styles.heroBtnLink}>
                      GET STARTED
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================= SECOND SECTION ============================= */}
        <div className={styles.secondSectionMainDiv} id="our-work">
          <div className="container">
            <div className="containerPadding">
              <div>
                <div className={styles.headingDiv}>
                  <h2 className={styles.ourWorkHeading}>Our Work</h2>
                </div>
                <div className={styles.ourWorkContentDiv}>
                  {data.map((e, i) => {
                    return (
                      <div className={styles.workSubDiv} key={i}>
                        <Link href={e.url} className={styles.workLinkDiv}>
                          <div className={styles.workLinkSubDiv}>
                            <div className={styles.workHeadingDiv}>
                              <h3 className={styles.workSubHeading}>
                                {e.title}
                              </h3>
                            </div>
                            <div>
                              <img
                                src={e.thumbnail}
                                alt=""
                                width="100%"
                                className={styles.workImg}
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================= THIRD SECTION ============================= */}
        <div className={styles.thirdSectionMainDiv} id="about-us">
          <div className="container">
            <div className="containerPadding">
              <div className={styles.aboutMainDiv}>
                <div className={styles.aboutContentDiv}>
                  <div className={styles.aboutDivider}></div>
                  <div className={styles.aboutHeadingDiv}>
                    <h3 className={styles.aboutHeading}>About Us</h3>
                  </div>
                  <p className={styles.aboutPara}>
                We are Prolate Industries a leading manufacturer and global exporter of high-quality industrial and specialty chemicals, committed to delivering excellence through innovation, precision, and sustainable practices. With a strong foundation in chemical production, our company offers a diverse portfolio of organic and inorganic chemicals tailored to meet the needs of various industries, including agriculture, pharmaceuticals, textiles, construction, and water treatment, house hold products, Preservatives chemical, Food chemical, etc..
                  </p>
                  <div className={styles.aboutIconMainDiv}>
                    <div className={styles.aboutIconSubDiv}>
                      <div className={styles.aboutIconDiv}>
                        <div className={styles.aboutIconImgDiv}>
                          <img
                            src="/aboutPointer.png"
                            alt=""
                            width="100%"
                            className={styles.aboutIcon}
                          />
                        </div>
                      </div>
                      <div className={styles.aboutIconParaDiv}>
                        {/* <h2 className={styles.aboutIconHead}>Lorem, ipsum.</h2> */}
                        <p className={styles.aboutIconPara}>
                         Operating from a state-of-the-art facility, we ensure strict adherence to international quality standards, safety protocols, and environmental regulations. Our robust supply chain, backed by expert logistics and efficient trade compliance, enables us to serve clients across Asia, Africa, Europe, and the Middle East with consistency and reliability.
                        </p>
                      </div>
                    </div>
                    <div className={styles.aboutIconSubDiv}>
                      <div className={styles.aboutIconDiv}>
                        <div className={styles.aboutIconImgDiv}>
                          <img
                            src="/aboutpointer.png"
                            alt=""
                            width="100%"
                            className={styles.aboutIcon}
                          />
                        </div>
                      </div>
                      <div className={styles.aboutIconParaDiv}>
                        {/* <h2 className={styles.aboutIconHead}>Lorem, ipsum.</h2> */}
                        <p className={styles.aboutIconPara}>
                      With customer satisfaction at the core of our operations, we aim to build long-term partnerships by offering competitive pricing, technical support, and on-time delivery. As we continue to expand our global reach, we remain committed to quality, innovation, and sustainable growth in the chemical export sector.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.aboutImgMainDiv}>
                  <div className={styles.aboutImgDiv}>
                    <img src="/aboutImg.webp" alt="" width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================= FOURTH SECTION ============================= */}
        <div className={styles.clientsMainDiv}>
          <div className="container">
            <div className="containerPadding">
              <div>
                <div className={styles.clientsHeadingDiv}>
                  <h2 className={styles.clientsHeading}>Our Happy Clients</h2>
                </div>
                <div className={styles.clientLogosSliderDiv}>
                  {/* <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                      300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      532: { slidesPerView: 3, spaceBetween: 20 },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                    }}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                  >
                    {clientImg.map((e, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className={styles.clientImgDiv}>
                            <img
                              src={e.logo}
                              alt=""
                              width="100%"
                              className={styles.clientImg}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper> */}

                  <img src="/Client/oxford-logo.png" width="100%" />
                </div>
                {/* <div className={styles.clientLogosImgDiv}>
                  {clientImg.map((e, i) => {
                    return (
                      <div className={styles.clientImgDiv} key={i}>
                        <img
                          src={e.logo}
                          width="100%"
                          className={styles.clientImg}
                        />
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* ============================= FOURTH SECTION ============================= */}
        <div id="blogs">
          <div className="container">
            <div className="containerPadding">
              <div>
                <div className={styles.blogHeadingDiv}>
                  <h2 className={styles.blogHeading}>Latest Blog Posts</h2>
                </div>
                <div className={styles.blogParaDiv}>
                  <p className={styles.blogPara}>
                    Explore our latest blog posts, insights, and tips to keep
                    you updated with the latest trends and innovations.
                  </p>
                </div>
                <div className={styles.blogCardsMainDiv}>
                  {blogs.map((e, i) => {
                    return (
                      <div className={styles.blogCardDiv} key={i}>
                        <div className={styles.blogImgDiv}>
                          <img
                            src={e.img}
                            alt=""
                            width="100%"
                            className={styles.blogImg}
                          />
                        </div>
                        <div className={styles.blogContentMainDiv}>
                          <div className={styles.blogTitleDiv}>
                            <p className={styles.blogTitle}>{e.title}</p>
                          </div>
                          <div className={styles.blogDescriptionDiv}>
                            <p className={styles.blogDescription}>
                              {e.description}
                            </p>
                          </div>
                          <div className={styles.blogDateBtnDiv}>
                            <div className={styles.blogDateMainDiv}>
                              <div className={styles.blogDateIcon}>
                                <SlCalender />
                              </div>
                              <div className={styles.blogDateDiv}>
                                <p className={styles.blogDate}>{e.date}</p>
                              </div>
                            </div>
                            <div className={styles.blogReadMoreBtnDiv}>
                              <Link
                                href={e.readMoreUrl}
                                className={styles.homeBlogReadMoreBtn}
                              >
                                {" "}
                                <button className={styles.blogReadMoreBtn}>
                                  Read More
                                  <span className={styles.blogReadMoreBtnIcon}>
                                    <FaArrowRightLong />
                                  </span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================= FIFTH SECTION ============================= */}
        {/* <div className={styles.testimonialsMainDiv}>
          <div className="container">
            <div className="containerPadding">
              <div className={styles.testimonialsHeadingDiv}>
                <h2 className={styles.testimonialsHeading}>
                  Customer Testimonials
                </h2>
              </div>
              <div className={styles.testimonialParaDiv}>
                <p className={styles.testimonialPara}>
                  Trusted by businesses and individuals for high-quality
                  printing and exceptional service
                </p>
              </div>
              <div
                id="testimonialSlider"
                className={styles.testimonialCardsSliderMainDiv}
              >
                <Swiper
                  spaceBetween={10}
                  autoHeight={true}
                  slidesPerView={4}
                  navigation={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    593: { slidesPerView: 2, spaceBetween: 20 },
                    790: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                  // onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  {testimonials.map((e, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className={styles.testimonialCard} key={i}>
                          <div className={styles.testimonialImgDiv}>
                            <img
                              src={e.img}
                              alt=""
                              width="100%"
                              className={styles.testimonialImg}
                            />
                          </div>
                          <div className={styles.testimonialContentDiv}>
                            <p className={styles.testimonialName}>{e.name}</p>
                            <p className={styles.testimonialReview}>
                              {e.review}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Main;
