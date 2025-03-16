"use client";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import styles from "../../styles/contact.module.scss";
import Link from "next/link";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
const page = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name too Short!")
      .required("Required")
      .matches(/^[a-zA-Z]+(\s?[a-zA-Z]+)+$/, "Please enter valid name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter valid Email"
      ),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "Please enter valid Number"
      ),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });
  return (
    <>
      <Navigation />
      <div className={styles.contactHeadingMainDiv}>
        <div className="container">
          <div className="containerPadding">
            <div className={styles.contactSubDiv}>
              <div className={styles.contactHeadingDiv}>
                <h1 className={styles.contactHeading}>Contact Us</h1>
              </div>
              <div className={styles.contactParaDiv}>
                <p className={styles.contactBreadcrumbsPara}>
                  <Link
                    href="/"
                    className={`${styles.contactParaLink} ${styles.contactBreadCrumbHomeLink}`}
                  >
                    Home
                  </Link>{" "}
                  /{" "}
                  <Link
                    href="/contact-us"
                    className={`${styles.contactParaLink} ${styles.contactBreadCrumbActiveLink}`}
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="containerPadding">
          <div className={styles.contactFormMainDiv}>
            <div className={styles.contactFormDiv}>
              <div className={styles.contactDivider}></div>
              <div className={styles.letsTalkHeadingDiv}>
                <h1 className={styles.letsTalkHeading}>Get in Touch</h1>
              </div>
              <p className={styles.contactPara}>
                Quality printing, seamless service—contact us today!
              </p>
              <div className={styles.formikMainDiv}>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className={styles.fieldErrorDiv}>
                        <Field
                          name="name"
                          type="text"
                          placeholder="Name"
                          className={styles.formField}
                        />
                        {errors.name && touched.name ? (
                          <div
                            className={styles.contactFormError}
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {errors.name}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.fieldErrorDiv}>
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className={styles.formField}
                        />
                        {errors.email && touched.email ? (
                          <div
                            className={styles.contactFormError}
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.fieldErrorDiv}>
                        <Field
                          name="phone"
                          type="text"
                          placeholder="Phone Number"
                          className={styles.formField}
                        />
                        {errors.phone && touched.phone ? (
                          <div
                            className={styles.contactFormError}
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {errors.phone}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.fieldErrorDiv}>
                        <Field
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          className={styles.formField}
                        />
                        {errors.subject && touched.subject ? (
                          <div
                            className={styles.contactFormError}
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {errors.subject}
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.fieldErrorDiv}>
                        <Field
                          as="textarea"
                          name="message"
                          rows="4"
                          placeholder="Message"
                          className={styles.formField}
                        />
                        {errors.message && touched.message ? (
                          <div
                            className={styles.contactFormError}
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {errors.message}
                          </div>
                        ) : null}
                      </div>
                      <button type="submit" className={styles.submitFormBtn}>
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className={styles.contactImgMainDiv}>
              <div className={styles.contactImgDiv}>
                <img
                  src="/contactUsForm1.jpg"
                  alt=""
                  width="100%"
                  className={styles.contactImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
