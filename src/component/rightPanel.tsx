"use client";
import Image from "next/image";
import styles from "./rightPanel.module.css";

export default function RightPanel() {
    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <Image
                    src="/profile.png" // put a placeholder profile image in public/
                    alt="Profile"
                    width={60}
                    height={60}
                    className={styles.avatar}
                />
                <div>
                    <h3>Pam Beesly</h3>
                    <p>Marketing Lead</p>
                </div>
            </div>

            <div className={styles.qrBox}>
                <Image src="/qr.png" alt="QR Code" width={100} height={100} />
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>Exotel</div>
                <div className={styles.card}>Freshworks</div>
                <div className={styles.card}>YouTube</div>
                <div className={styles.card}>LinkedIn</div>
            </div>
        </div>
    );
}
