import Image from "next/image";
import React from "react";
import styles from "./Volunteer.module.css";
import TopImageComponent from "@/Components/TopImageComponent";
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";

const Volunteer = () => {
  return (
    <>
      <div>
        <TopImageComponent title={"Volunteer"} />

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
                src={"/volunteer.png"}
                width="0"
                height="0"
                sizes="100vw"
                className={styles.image}
              />
            </div>
            <div className="my-3">
              <h3 className={styles.heading}>
                Be the change you wish to see.Because all change begins with an
                individual
              </h3>
              <p>
                Drishti Foundation Trust, from the inception itself, works on a
                delegated work environment. Each and every person in the
                organization is involved in the process of decision making in a
                scientifically designed system. Making Policy & Decision in the
                Foundation are done through a four-tier system. Drishti
                Foundation Trust, from the inception itself, works on a
                delegated work environment. Each and every person in the
                organization is involved in the process of decision making in a
                scientifically designed system. Making Policy & Decision in the
                Foundation are done through a four-tier system. Drishti
                Foundation Trust, from the inception itself, works on a
                delegated work environment. Each and every person in the
                organization is involved in the process of decision making in a
                scientifically designed system. Making Policy & Decision in the
                Foundation are done through a four-tier system.
              </p>
            </div>

            <div>
              <h4 className={styles.subHeading}>
                Online Volunteer Opportunities
              </h4>
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
              <ul>
                <li>
                  The Executive Committee manages the Foundation’s operati
                </li>
                <li>
                  The Executive Committee manages the Foundation’s operati
                </li>
                <li>
                  The Executive Committee manages the Foundation’s operati
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.subHeading}>
                Blog Writing Opportunity for Volunteers
              </h4>
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
              <h4 className={styles.subHeading}>
                Online Fundraising Volunteer Opportunities
              </h4>
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
              <h3 className={styles.subHeading}>
                Offline Volunteer Opportunities
              </h3>
              <h4 className={styles.subHeading}>
                Introduce DFT to Organization/Institute/Office{" "}
              </h4>
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
              <h4 className={styles.subHeading}>
                Raise funds for the cause through events
              </h4>
              <p>The Executive Committee manages the Foundation’s operation</p>
              <ul>
                <li>
                  The Executive Committee manages the Foundation’s operatio
                </li>
                <li>
                  The Executive Committee manages the Foundation’s operatio
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.subHeading}>Join us as our consultant</h4>
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
              <h4 className={styles.subHeading}>
                Visitors in Schools,Healthcare workshops,Old age homes
              </h4>

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
              <h4 className={styles.subHeading}>For Events & Campaigns</h4>
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
              <h4 className={styles.subHeading}>To share your talent or skills</h4>
             <p><span className={styles.span}>Apply :</span>http://www.facebook.com.np</p>
             <p><span className={styles.span}>Apply :</span>http://www.facebook.com.np</p>
             <p><span className={styles.span}>Apply :</span>http://www.facebook.com.np</p>
             <p><span className={styles.span}>Apply :</span>http://www.facebook.com.np</p>
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

export default Volunteer;
