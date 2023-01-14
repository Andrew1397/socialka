import React from "react";
import styles from "./preloader.module.css"

const Preloader = () => (
    <div className="preloader">
        <div className={styles.spinner} >
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
);

export default Preloader;