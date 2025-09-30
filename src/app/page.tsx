"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useRouter } from "next/navigation";
import RightPanel from "../component/rightPanel";
import styles from "../styles/AboutForm.module.css";

export default function Step1() {
    const formContext = useContext(FormContext);
    const router = useRouter();

    if (!formContext) return null;
    const { data, setData } = formContext;

    return (
        <div className={styles.layout}>
            {/* LEFT FORM */}
            <div className={styles.formContainer}>
                <div className={styles.stepper}>
                    <span className={styles.active}>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <h2>Tell us a bit about yourself</h2>
                <p className={styles.subtitle}>
                    We’ll use this info to build your page.
                </p>

                <Formik
                    initialValues={data}
                    validationSchema={Yup.object({
                        firstName: Yup.string().required("Required"),
                        lastName: Yup.string().required("Required"),
                        location: Yup.string().required("Required"),
                        title: Yup.string().required("Required"),
                        company: Yup.string().required("Required"),
                    })}
                    onSubmit={(values) => {
                        setData({ ...data, ...values });
                        router.push("/contact");
                    }}
                >
                    <Form className={styles.form}>
                        <div className={styles.row}>
                            <div>
                                <Field name="firstName" placeholder="First name" />
                                <ErrorMessage name="firstName" component="div" className={styles.error} />
                            </div>
                            <div>
                                <Field name="lastName" placeholder="Last name" />
                                <ErrorMessage name="lastName" component="div" className={styles.error} />
                            </div>
                        </div>

                        <Field name="location" placeholder="Place, City, Country" />
                        <ErrorMessage name="location" component="div" className={styles.error} />

                        <Field name="title" placeholder="Marketing Lead" />
                        <ErrorMessage name="title" component="div" className={styles.error} />

                        <div className={styles.companyWrapper}>
                            <Field name="company" placeholder="Company" />
                            <span className={styles.searchIcon}>🔍</span>
                        </div>
                        <ErrorMessage name="company" component="div" className={styles.error} />

                        <button type="submit" className={styles.btn}>Continue</button>
                    </Form>
                </Formik>
            </div>

            {/* RIGHT PANEL */}
            <div className={styles.rightPanel}>
                <RightPanel />
            </div>
        </div>
    );
}
