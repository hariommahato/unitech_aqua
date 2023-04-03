import React from "react";
import styles from './TopImageComponent.module.css'

const TopImageComponent = ({title}) => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1632961974688-fae53de3cabc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
      className={styles.topImageContainer}
    >
      <div className={styles.textContainer}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default TopImageComponent;
