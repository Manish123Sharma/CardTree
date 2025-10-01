"use client";

import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../../styles/Contact.module.css";
// import RightPanel from "@/component/rightPanel";
import po from '../../../assets/Frame 11 (1) 1.png';
import Image from "next/image";
import { FormContext } from "../../context/FormContext";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import StepIndicator from "@/component/StepIndicator";

export default function Step2() {
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
                    // validationSchema={Yup.object({
                    //     email: Yup.string().email("Invalid email").required("Required"),
                    //     phone: Yup.string().required("Required"),
                    // })}
                    onSubmit={(values) => {
                        setData({ ...data, ...values });
                        router.push("/template");
                    }}
                >
                    <Form className={styles.form}>
                        <StepIndicator currentStep={2} />
                        <div>
                            <h2 className={styles.heading}>How can your audience connect with you?</h2>
                            <p className={styles.subheading}>
                                You can customize the details later.
                            </p>
                        </div>

                        <div>
                            <p>Email</p>
                            <Field
                                name="email"
                                placeholder="example@gmail.com"
                                className={styles.input}
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className={styles.error}
                            />
                        </div>

                        <div>
                            <p>Phone</p>
                            <Field
                                name="phone"
                                placeholder="9658741226"
                                className={styles.input}
                            />
                            <ErrorMessage
                                name="phone"
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
