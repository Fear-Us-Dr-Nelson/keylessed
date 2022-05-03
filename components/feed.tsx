import React, { ReactNode, useEffect, useRef } from "react";
import styles from "../styles/components/Feed.module.scss";

const Feed = (props: {
    children?: ReactNode
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.play();
    }, [])

    return (
        <div className={styles.feed}>
            <video
                ref={videoRef}
                muted
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
