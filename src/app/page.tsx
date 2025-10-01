"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../styles/AboutForm.module.css";
import RightPanel from "@/component/rightPanel";

export default function Page() {
    return (
        <div className={styles.container}>
            {/* Left Form Section */}
            <div className={styles.formWrapper}>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        location: "",
                        title: "",
                        company: "",
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form className={styles.form}>
                        <h2 className={styles.heading}>Tell us a bit about yourself</h2>
                        <p className={styles.subheading}>
                            We’ll use this info to build your page.
                        </p>

                        <Field name="firstName" placeholder="First name" className={styles.input} />
                        <ErrorMessage name="firstName" component="div" className={styles.error} />

                        <Field name="lastName" placeholder="Last name" className={styles.input} />
                        <ErrorMessage name="lastName" component="div" className={styles.error} />

                        <Field name="location" placeholder="Place, City, Country" className={styles.input} />
                        <ErrorMessage name="location" component="div" className={styles.error} />

                        <Field name="title" placeholder="Marketing Lead" className={styles.input} />
                        <ErrorMessage name="title" component="div" className={styles.error} />

                        <div className={styles.companyWrapper}>
                            <Field name="company" placeholder="Acme" className={styles.input} />
                            <img src="/globe.svg" alt="Search" className={styles.searchIcon} />
                        </div>
                        <ErrorMessage name="company" component="div" className={styles.error} />

                        <button type="submit" className={styles.btn}>Continue</button>
                    </Form>
                </Formik>
            </div>

            {/* Right Preview Panel */}
            <div className={styles.previewWrapper}>
                <RightPanel />
            </div>
        </div>
    );
}
