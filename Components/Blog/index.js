import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <Card>
          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              }
              width="0"
              height="0"
              sizes="100vw"
              className={styles.image}
            />
          </div>

          <div
           className={styles.divContainer}
          >
            <p>
              Women throughout India aren’t able to access their basic rights to
              sanitary pads and have to survive in unhygienic conditions. With
              this aim DFT distributed sanitary pads where we also educate them
              on menstrual hygiene & its management. We work on real Impact of
              our Initiatives
            </p>
          </div>
          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              }
              width="0"
              height="0"
              sizes="100vw"
              className={styles.image}
            />
          </div>

          <div
          className={styles.image}
          >
            <p>
              Women throughout India aren’t able to access their basic rights to
              sanitary pads and have to survive in unhygienic conditions. With
              this aim DFT distributed sanitary pads where we also educate them
              on menstrual hygiene & its management. We work on real Impact of
              our Initiatives
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Blog;
