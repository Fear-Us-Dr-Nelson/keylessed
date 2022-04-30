import React, { useEffect, useRef } from "react";
import styles from "../styles/components/Feed.module.scss";

const Feed = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.play();
    }, [])

    return (
        <video
            ref={videoRef}
            muted
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            height={768}
            width={720}
        />
    )
}

export default Feed;
