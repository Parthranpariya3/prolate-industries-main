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
      title: "Metal Letter Led",
      thumbnail: "/Metal Letter/metalLetter2.jpg",
      url: "/our-work/metal-letter-led",
    },
    {
      title: "Roll Up Stande",
      thumbnail: "/Roll Up Stande/rollImg3.jpg",
      url: "/our-work/roll-up-stande",
    },
    {
      title: "Social Post",
      thumbnail: "/Social Media Post/socialImg1.jpg",
      url: "/our-work/social-media-post",
    },
    {
      title: "Star Flex",
      thumbnail: "/Star Flex/starImg3.jpg",
      url: "/our-work/star-flex",
    },
    {
      title: "Printing",
      thumbnail: "/Printing/printing1.jpg",
      url: "/our-work/printing",
    },
    {
      title: "Client",
      thumbnail: "/Client/clientImg10.jpg",
      url: "/our-work/client",
    },
    {
      title: "Frontlit Flex",
      thumbnail: "/Frontlit Flex/frontlitImg2.jpg",
      url: "/our-work/frontlit-flex",
    },
    {
      title: "Logo",
      thumbnail: "/Logo/logoImg4.jpg",
      url: "/our-work/logo",
    },
    {
      title: "2D Cut Acrylic Letter Led",
      thumbnail: "/2D Acrylic Letter Led/acrylicImg3.jpg",
      url: "/our-work/2D-cut-acrylic-letter-led",
    },
    {
      title: "Acrylic Letter Led",
      thumbnail: "/Acrylic Letter/acrylicImg4.jpg",
      url: "/our-work/acrylic-letter-led",
    },
    {
      title: "Aluminium Channel Letter",
      thumbnail: "/Aluminium Channel Letter/aluminiumImg4.jpg",
      url: "/our-work/aluminium-channel-letter",
    },
    {
      title: "Backlit Sign Board",
      thumbnail: "/Backlit Sign Board/backlitImg6.jpg",
      url: "/our-work/backlit-sign-board",
    },
    {
      title: "Black Back Flex",
      thumbnail: "/Black Back Flex/blackImg1.jpg",
      url: "/our-work/black-back-flex",
    },
  ];

  const clientImg = [
    { logo: "/Client/clientImg1.jpg" },
    { logo: "/Client/clientImg2.jpg" },
    { logo: "/Client/clientImg3.jpg" },
    { logo: "/Client/clientImg4.jpg" },
    { logo: "/Client/clientImg5.jpg" },
    { logo: "/Client/clientImg6.jpg" },
    { logo: "/Client/clientImg7.jpg" },
    { logo: "/Client/clientImg8.jpg" },
    { logo: "/Client/clientImg9.jpg" },
    { logo: "/Client/clientImg10.jpg" },
    { logo: "/Client/clientImg11.jpg" },
    { logo: "/Client/clientImg12.jpg" },
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
                    src="/Social Media Post/socialImg1.jpg"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div className={styles.heroContentMainDiv}>
                <h1 className={styles.heroHeading}>Welcome to Guru Graphics</h1>
                <div className={styles.heroParaDiv}>
                  <p className={styles.heroPara}>
                    At <b>Guru Graphics</b>, we don't just design, we transform
                    your ideas into visually compelling experiences. Whether
                    it's an eye-catching logo, high-definition printing, or
                    striking signage, we are your go-to experts for{" "}
                    <b>advertising and offline media solutions.</b> We believe
                    in creating <b>bold, memorable, and high-impact visuals</b>{" "}
                    that make your brand impossible to ignore.
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
                    Founded in 2021 in Surat, Guru Graphics began as a creative
                    hub offering graphic design and printing services, including
                    logos, brochures, pamphlets, banners, hoardings, and more.
                    With a strong foundation in the industry, we provided
                    high-quality designs and printing solutions through job
                    work.
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
                          Building on our expertise, we expanded in 2018 with
                          the launch of Guru Graphics, specializing in signage
                          manufacturing. With advanced printing technology and
                          cutting-edge machinery, we entered the B2B market,
                          delivering premium signage solutions to businesses
                          across industries.
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
                          With a commitment to innovation, quality, and customer
                          satisfaction, we continue to evolve, ensuring that our
                          clients receive the best in visual branding and
                          advertising solutions.
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
                  <Swiper
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
                  </Swiper>
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
        <div className={styles.testimonialsMainDiv}>
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
        </div>
      </div>
    </>
  );
};

export default Main;
