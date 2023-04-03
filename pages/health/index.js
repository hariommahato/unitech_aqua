import Image from "next/image";
import React from "react";
import styles from "./Health.module.css";
import TopImageComponent from "@/Components/TopImageComponent";
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";
import Layout from "@/Components/Layout";

const Health = () => {
  return (
    <>
      <Layout>
        <TopImageComponent title={"Health"} />

        <Row className={styles.mainDiv}>
          <Col lg={9} md={6} sm={12}>
            <div>
              <h4 className={styles.subHeading}>DFT Denatal Camps</h4>
              <p>
                The Executive Committee manages the Foundation’s operation
                directly and it reports to the Board of Advisors. Members of
                this committee are professionals working with Drishti Foundation
                Trust and it is mandatory to include a member from the Board of
                Advisors.The Executive Committee of Drishti Foundation holds a
                meeting each Quarter (every three months) and looks after
                day-to-day management.
              </p>

              <div>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1680246637339-780b4dbf1034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  }
                  width="0"
                  height="0"
                  sizes="100vw"
                  className={styles.image}
                />
              </div>
              <p>
                The Executive Committee manages the Foundation’s operation
                directly and it reports to the Board of Advisors. Members of
                this committee are professionals working with Drishti Foundation
                Trust and it is mandatory to include a member from the Board of
                Advisors.The Executive Committee of Drishti Foundation holds a
                meeting each Quarter (every three months) and looks after
                day-to-day management.
              </p>
              <p>
                The Executive Committee manages the Foundation’s operation
                directly and it reports to the Board of Advisors. Members of
                this committee are professionals working with Drishti Foundation
                Trust and it is mandatory to include a member from the Board of
                Advisors.The Executive Committee of Drishti Foundation holds a
                meeting each Quarter (every three months) and looks after
                day-to-day management.
              </p>

              <div>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1680246637339-780b4dbf1034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  }
                  width="0"
                  height="0"
                  sizes="100vw"
                  className={styles.image}
                />
              </div>
            </div>
            
          </Col>
          <Col lg={3} md={6} sm={12}>
            <HomeRightSection />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Health;
