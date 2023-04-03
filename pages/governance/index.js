import Image from "next/image";
import React from "react";
import governance from "../../images/governance.jpeg";
import styles from "./Governance.module.css";
import CarouselCompo from "@/Components/Carousel/Carousel";
import TopImageComponent from "@/Components/TopImageComponent";
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";
import Layout from "@/Components/Layout";

const Governance = () => {
  return (
    <>
      <Layout>
        <TopImageComponent title={"Governance"}/>

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
                src={governance}
                width="0"
                height="0"
                sizes="100vw"
                className={styles.image}
              />
            </div>
            <div>
              <p>
                Governance is the need of the hour in the development sector in
                order to ensure and promote application of best management
                practices, compliance of law and adherence to best possible
                ethical standards. The entire management processes and practices
                of Drishti Foundation Trust are in compliance with the
                principles of Good Governance’.
              </p>
            </div>

            <div>
              <h4>Making Policies & Decisions</h4>
              <p>
                Drishti Foundation Trust, from the inception itself, works on a
                delegated work environment. Each and every person in the
                organization is involved in the process of decision making in a
                scientifically designed system. Making Policy & Decision in the
                Foundation are done through a four-tier system.
              </p>
            </div>

            <div>
              <h4>Departments & Divisions</h4>
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
              <h4>Executive Committee</h4>
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
              <h4>Advisory Body</h4>
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
              <h4>Board of Trustee</h4>
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
              <h4>Internal & Process Audit System</h4>
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
              <h4>Statutory Audit</h4>
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
              <h4>Use of Teachnology for Good Governance</h4>
              <h4>Online Monitoring System</h4>
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
              
              <h4>Sales Force-The decision-making Software</h4>
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
              
              <h4>Management Information System</h4>
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
              
              <h4>Future Technology</h4>
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
              
              <h4>Volunteer Management</h4>
              <p>
                The Executive Committee manages the Foundation’s operation
                directly and it reports to the Board of Advisors. Members of
                this committee are professionals working with Drishti Foundation
                Trust and it is mandatory to include a member from the Board of
                Advisors.The Executive Committee of Drishti Foundation holds a
                meeting each Quarter (every three months) and looks after
                day-to-day management.
              </p>
            </div> <div>
              
              <h4>Education Support</h4>
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

          </Col>
          <Col lg={3} md={6} sm={12}>
            <HomeRightSection />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Governance;
