"use client";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import styles from "../../styles/Template.module.css";

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
        <div className={styles.container}>
            {/* Header */}
            <h2 className={styles.heading}>Choose a template</h2>

            {/* Templates */}
            <div className={styles.templateContainer}>
                {/* Full Story */}
                <div className={styles.templateCard}>
                    <h3 className={styles.templateTitle}>Full Story</h3>
                    <p className={styles.templateSubtitle}>Template 1 of 5</p>
                    <div className={styles.previewBox}></div>
                    <div className={styles.buttonRow}>
                        <button
                            onClick={() => handleSelect("Full Story")}
                            className={styles.useBtn}
                        >
                            Use template
                        </button>
                        <button className={styles.previewBtn}>
                            Preview <span className={styles.dropdownArrow}>⌵</span>
                        </button>
                    </div>
                </div>

                {/* Quick Intro */}
                <div className={styles.templateCard}>
                    <h3 className={styles.templateTitle}>Quick Intro</h3>
                    <p className={styles.templateSubtitle}>Template 2 of 5</p>
                    <div className={styles.previewBox}></div>
                    <div className={styles.buttonRow}>
                        <button
                            onClick={() => handleSelect("Quick Intro")}
                            className={styles.useBtn}
                        >
                            Use template
                        </button>
                        <button className={styles.previewBtn}>
                            Preview <span className={styles.dropdownArrow}>⌵</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <p className={styles.footer}>BYOB - Build Your Own Bio</p>
        </div>
    );
}
