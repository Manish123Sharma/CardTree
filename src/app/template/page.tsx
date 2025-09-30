"use client";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import "../../styles/form.css";

export default function Step3() {
    const formContext = useContext(FormContext);

    if (!formContext) return null;
    const { data, setData } = formContext;

    const handleSelect = (template: string) => {
        setData({ ...data, template });
        console.log("Selected template:", template);
        alert(`Template chosen: ${template}`);
    };

    return (
        <div className="container">
            <h2>Choose a template</h2>
            <div className="template-container">
                <div className="template-card">
                    <h3>Full Story</h3>
                    <button onClick={() => handleSelect("Full Story")} className="btn">Use template</button>
                </div>
                <div className="template-card">
                    <h3>Quick Intro</h3>
                    <button onClick={() => handleSelect("Quick Intro")} className="btn">Use template</button>
                </div>
            </div>
        </div>
    );
}
