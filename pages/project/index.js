import Image from "next/image";
import React from "react";
import styles from "./Project.module.css";
import TopImageComponent from "@/Components/TopImageComponent";
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";

const Project = () => {
  return (
    <>
      <div>
        <TopImageComponent title={"Projects"} />

        <Row className={styles.mainDiv}>
          <Col lg={9} md={6} sm={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={"/project.jpeg"}
                height={300}
                width={500}
                style={{ borderRadius: "20%" }}
                className={styles.image}
              />
            </div>

            <div>
              <h4 className={styles.subHeading}>ENVIRONMENT</h4>
              <p>
                The Executive Committee manages the Foundation’s operation
                directly and it reports to the Board of Advisors. Members of
                this committee are professionals working with Drishti Foundation
                Trust and it is mandatory to include a member from the Board of
                Advisors.The Executive Committee of Drishti Foundation holds a
                meeting each Quarter (every three months) and looks after
                day-to-day management.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/project.jpeg"}
                  height={300}
                  width={500}
                  style={{ borderRadius: "20%" }}
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
            </div>
            <div>
              <h4 className={styles.subHeading}>EDUCATION</h4>
              <p>
                The Executive Committee manages the Foundation’s operation
                directly and it reports to the Board of Advisors. Members of
                this committee are professionals working with Drishti Foundation
                Trust and it is mandatory to include a member from the Board of
                Advisors.The Executive Committee of Drishti Foundation holds a
                meeting each Quarter (every three months) and looks after
                day-to-day management.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/project.jpeg"}
                  height={300}
                  width={500}
                  style={{ borderRadius: "20%" }}
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
            </div>
            <div>
              <h4 className={styles.subHeading}>HEALTH</h4>
              <p>
                The Executive Committee manages the Foundation’s operation
                directly and it reports to the Board of Advisors. Members of
                this committee are professionals working with Drishti Foundation
                Trust and it is mandatory to include a member from the Board of
                Advisors.The Executive Committee of Drishti Foundation holds a
                meeting each Quarter (every three months) and looks after
                day-to-day management.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/project.jpeg"}
                  height={300}
                  width={500}
                  style={{ borderRadius: "20%" }}
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
            </div>

            
            <div>
              <h4 className={styles.subHeading}>How we do it</h4>
              <ul>
                <li>
                  visors.The Executive Committee of Drishti Foundation holds a
                  meeting each Quarter (every t
                </li>
                <li>
                  visors.The Executive Committee of Drishti Foundation holds a
                  meeting each Quarter (every t
                </li>
                <li>
                  visors.The Executive Committee of Drishti Foundation holds a
                  meeting each Quarter (every t
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.subHeading}>
                To share your talent or skills
              </h4>
              <p>
                <span className={styles.span}>Apply :</span>
                http://www.facebook.com.np
              </p>
              <p>
                <span className={styles.span}>Apply :</span>
                http://www.facebook.com.np
              </p>
              <p>
                <span className={styles.span}>Apply :</span>
                http://www.facebook.com.np
              </p>
              <p>
                <span className={styles.span}>Apply :</span>
                http://www.facebook.com.np
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <HomeRightSection />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Project;
