import Image from "next/image";
import React from "react";
import donate from "../../images/dontate.png";
import styles from "./Donate.module.css";
import TopImageComponent from "@/Components/TopImageComponent";
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";
import Layout from "@/Components/Layout";

const Donate = () => {
  return (
    <Layout>
      {" "}
      <div className="mainConatiner">
        <TopImageComponent title={"Donate Us"} />

        <Row className={styles.mainDiv}>
          <Col lg={9} md={6} sm={12}>
            <div>
              <div className={styles.imageContainer}>
                <Image
                  src={donate}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.detailContainer}>
                <p>
                  Governance is the need of the hour in the development sector
                  in order to ensure and promote application of best management
                  practices, compliance of law and adherence to best possible
                  ethical standards. The entire management processes and
                  practices of Drishti Foundation Trust are in compliance with
                  the principles of Good Governance’.
                </p>

                <h4>It just feels good: –</h4>
                <p>
                  But did you know that most charities are not about giving just
                  money but selflessly thinking to provide an opportunity for
                  another individual to lead a dignified life. So why not give
                  this charity thing a chance now? It’s not just a time for
                  giving to your family, but to those outside of your family
                  that likely won’t be having as happy a time like you do. So,
                  don’t let these opportunities to go pass by you; consider, if
                  you will, these 3 reasons to donate to charity this year.
                </p>
                <h4>Easy: –</h4>
                <p>
                  The Executive Committee manages the Foundation’s operation
                  directly and it reports to the Board of Advisors. Members of
                  this committee are professionals working with Drishti
                  Foundation Trust and it is mandatory to include a member from
                  the Board of Advisors.The Executive Committee of Drishti
                  Foundation holds a meeting each Quarter (every three months)
                  and looks after day-to-day management.
                </p>
                <h4>Inexpensive: –</h4>
                <p>
                  The Executive Committee manages the Foundation’s operation
                  directly and it reports to the Board of Advisors. Members of
                  this committee are professionals working with Drishti
                  Foundation Trust and it is mandatory to include a member from
                  the Board of Advisors.The Executive Committee of Drishti
                  Foundation holds a meeting each Quarter (every three months)
                  and looks after day-to-day management.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={3}>
            <HomeRightSection />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Donate;
