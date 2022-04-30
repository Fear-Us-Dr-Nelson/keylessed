import React from "react";
import clsx from "clsx";
import styles from "../../styles/components/auth-indicators/Authorized.module.scss";

export const Authorized = () => {

    return (
        <div className={styles.successCheckmark}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle
                    className={clsx(styles.path, styles.circle)}
                    fill="none"
                    stroke="#73AF55"
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    cx="65.1"
                    cy="65.1"
                    r="62.1"
                />
                <polyline
                    className={clsx(styles.path, styles.check)}
                    fill="none"
                    stroke="#73AF55"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="100.2,40.2 51.5,88.8 29.8,67.5 "
                />
            </svg>
            <p className={styles.success}>Authorized!</p>
        </div>
    );
}

export default Authorized;
