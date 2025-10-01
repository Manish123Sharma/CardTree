import styles from "../styles/StepIndicator.module.css";

interface StepIndicatorProps {
    currentStep: number; // 1, 2, or 3
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
    return (
        <div className={styles.stepper}>
            {/* Step 1 */}
            <div className={styles.step}>
                <div
                    className={`${styles.circle} ${currentStep >= 1 ? styles.active : ""
                        }`}
                >
                    1
                </div>
                <p className={styles.label}>About</p>
            </div>

            <span className={styles.arrow}>›</span>

            {/* Step 2 */}
            <div className={styles.step}>
                <div
                    className={`${styles.circle} ${currentStep >= 2 ? styles.active : ""
                        }`}
                >
                    2
                </div>
                <p className={styles.label}>Contact info</p>
            </div>

            <span className={styles.arrow}>›</span>

            {/* Step 3 */}
            <div className={styles.step}>
                <div
                    className={`${styles.circle} ${currentStep >= 3 ? styles.active : ""
                        }`}
                >
                    3
                </div>
                <p className={styles.label}>
                    Template <span className={styles.ai}>+ AI</span>
                </p>
            </div>
        </div>
    );
}
