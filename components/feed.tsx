import React, { ReactNode } from "react";
import styles from "../styles/components/Feed.module.scss";

const Feed = (props: {
    children?: ReactNode
}) => {
    return (
        <div className={styles.feed}>
            <img
                src="http://localhost:5000/video_feed"
            />
            {
                props.children ?
                    <div className={styles.overlay}>
                        {props.children}
                    </div>
                : null
            }
        </div>
    )
}

export default Feed;
