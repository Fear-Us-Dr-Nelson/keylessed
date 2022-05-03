import React from "react";
import { PulseLoader } from "react-spinners";
import styles from "../../styles/components/status/StatusIndicator.module.scss";

export const StatusIndicator = (props: {
    variant: "ok" | "loading" | "error",
    label: string
}) => {
    const {
        variant = "loading",
        label = ""
    } = props;

    return (
        <div className={styles.indicator}>
            <div className={styles.circle} data-variant={variant}>
                <div className={styles.content}>
                    {
                        variant === "loading" ?
                            <PulseLoader size={8} />
                        : null
                    }
                </div>
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    );
}

export default StatusIndicator;
