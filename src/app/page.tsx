"use client";

import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../styles/AboutForm.module.css";
// import RightPanel from "@/component/rightPanel";
import po from '../../assets/Frame 11 (1) 1.png';
import Image from "next/image";
import { FormContext } from "../context/FormContext";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import StepIndicator from "@/component/StepIndicator";

export default function Page() {
    const [mounted, setMounted] = useState(false);
    const formContext = useContext(FormContext);
    const router = useRouter();

    // Prevent hydration errors
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!formContext) return null;
    const { data, setData } = formContext;

    if (!mounted) return null;

    return (
        <div className={styles.container}>
            {/* Left Form Section */}
            <div className={styles.formWrapper}>
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
                        <StepIndicator currentStep={1} />
                        <div>
                            <h2 className={styles.heading}>Tell us a bit about yourself</h2>
                            <p className={styles.subheading}>
                                We’ll use this info to build your page.
                            </p>
                        </div>


                        <div className={styles.name_field}>
                            <div className={styles.fname}>
                                <p>First Name*</p>
                                <Field
                                    name="firstName"
                                    placeholder="First name"
                                    className={styles.input}
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="div"
                                    className={styles.error}
                                />
                            </div>
                            <div className={styles.lname}>
                                <p>Last Name*</p>
                                <Field
                                    name="lastName"
                                    placeholder="Last name"
                                    className={styles.input}
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="div"
                                    className={styles.error}
                                />
                            </div>
                        </div>

                        <div>
                            <p>Location</p>
                            <Field
                                name="location"
                                placeholder="Place, City, Country"
                                className={styles.input}
                            />
                            <ErrorMessage
                                name="location"
                                component="div"
                                className={styles.error}
                            />
                        </div>

                        <div>
                            <p>Title</p>
                            <Field
                                name="title"
                                placeholder="Marketing Lead"
                                className={styles.input}
                            />
                            <ErrorMessage
                                name="title"
                                component="div"
                                className={styles.error}
                            />
                        </div>

                        <div>
                            <p>Company</p>
                            <div className={styles.companyWrapper}>
                                <Field
                                    name="company"
                                    placeholder="Acme"
                                    className={styles.input}
                                />
                                <Image
                                    src="/globe.svg"
                                    alt="Search"
                                    width={24}
                                    height={24}
                                    className={styles.searchIcon}
                                />
                            </div>
                            <ErrorMessage
                                name="company"
                                component="div"
                                className={styles.error}
                            />
                        </div>


                        <button type="submit" className={styles.btn}>
                            Continue
                        </button>
                    </Form>
                </Formik>
            </div>

            {/* Right Preview Panel */}
            {/* <div className={styles.previewWrapper}>
                <Image className="images" src={po} alt="" />
            </div> */}
            <div className={styles.previewWrapper}>
                <Image
                    src={po}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

        </div>
    );
}
