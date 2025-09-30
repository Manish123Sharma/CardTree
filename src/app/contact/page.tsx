"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { useRouter } from "next/navigation";
import "../../styles/form.css";

export default function Step2() {
    const formContext = useContext(FormContext);
    const router = useRouter();

    if (!formContext) return null;
    const { data, setData } = formContext;

    return (
        <div className="container">
            <h2>How can your audience connect with you?</h2>
            <Formik
                initialValues={data}
                validationSchema={Yup.object({
                    email: Yup.string().email("Invalid email").required("Required"),
                    phone: Yup.string().required("Required"),
                })}
                onSubmit={(values) => {
                    setData({ ...data, ...values });
                    router.push("/template");
                }}
            >
                <Form className="form">
                    <Field name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error" />

                    <Field name="phone" placeholder="Phone" />
                    <ErrorMessage name="phone" component="div" className="error" />

                    <button type="submit" className="btn">Continue</button>
                </Form>
            </Formik>
        </div>
    );
}
