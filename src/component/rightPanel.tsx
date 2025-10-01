"use client";
import Image from "next/image";
import styles from "./rightPanel.module.css";

export default function RightPanel() {
    return (
        <div className={styles.panel}>

            {/* Profile + QR */}
            <div className={styles.profileCard}>
                <div className={styles.profileInfo}>
                    <Image
                        src="/profile.png"
                        alt="Profile"
                        width={70}
                        height={70}
                        className={styles.avatar}
                    />
                    <div>
                        <h3>Pam Beesly</h3>
                        <p>Senior Sales Leader</p>
                        <span>Carroll Corp</span>
                    </div>
                </div>
                <div className={styles.qrBox}>
                    <Image src="/qr.png" alt="QR Code" width={90} height={90} />
                </div>
                <div className={styles.icons}>
                    <Image src="/phone.svg" alt="Phone" width={20} height={20} />
                    <Image src="/mail.svg" alt="Email" width={20} height={20} />
                    <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                    <Image src="/globe.svg" alt="Website" width={20} height={20} />
                </div>
            </div>

            {/* Esteemed Clients */}
            <div className={styles.clientCard}>
                <h4>Esteemed clients and partners</h4>
                <div className={styles.clientLogos}>
                    <div><Image src="/snowflake.png" alt="Snowflake" width={90} height={40} /><p>Snowflake</p></div>
                    <div><Image src="/exotel.png" alt="Exotel" width={90} height={40} /><p>Exotel</p></div>
                    <div><Image src="/luru.png" alt="Luru" width={90} height={40} /><p>Luru</p></div>
                    <div><Image src="/freshworks.png" alt="Freshworks" width={90} height={40} /><p>Freshworks</p></div>
                </div>
            </div>

            {/* Resource Cards */}
            <div className={styles.grid}>
                <div className={styles.bigCard}>
                    <h5>Product brochure - one pager PDF</h5>
                    <p>Download below</p>
                </div>
                <div className={styles.bigCard}>
                    <Image src="/brochure.png" alt="Brochure" width={200} height={100} />
                </div>
                <div className={styles.smallCard}>
                    <h5>Market domain expertise</h5>
                    <div className={styles.tags}>
                        <span>SaaS</span>
                        <span>Cloud comms</span>
                    </div>
                </div>
                <div className={styles.smallCard}>
                    <h5>Tech stack expertise</h5>
                    <p>Tech I deploy for my customers</p>
                    <button>Salesforce</button>
                </div>
                <div className={styles.smallCard}>
                    <h5>Product Walkthrough - 5 minutes demo video</h5>
                    <p>Series B funded AI Sales startup. Knows usage and GTM motion.</p>
                    <Image src="/youtube.png" alt="YouTube" width={30} height={30} />
                </div>
                <div className={styles.smallCard}>
                    <h5>Block my calendar</h5>
                    <p>At your convenience</p>
                    <Image src="/calendar.png" alt="Calendar" width={30} height={30} />
                </div>
            </div>
        </div>
    );
}
