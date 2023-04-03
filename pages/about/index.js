import Image from "next/image";
import React from "react";
import about from "../../images/about.png";
import styles from './About.module.css';
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";

const HomeSection = () => {
  return (
    <Row className={styles.mainRow}>
      <Col lg={9} md={6} sm={12}>
        <div className={styles.imageContainer}>
          <Image
            src={about}
            width="0"
            height="0"
            sizes="100vw"
            className={styles.image}
          />
        </div>
        <div className="my-3">
          <p className={styles.heading}>
            "Our focus is to channelize the resources from those who have it to
            those who need it the most.”
          </p>
          <p className={styles.details}>
            Unitech Foundation Trust is a Non-Government and Non-Profit making
            organization, established to work in the areas of Health, Education,
            relief of poor, and to provide amenities and facilities to those who
            can’t afford.
          </p>
          <p className={styles.details}>
            Unitech Foundation Trust is a Non-Government and Non-Profit making
            organization, established to work in the areas of Health, Education,
            relief of poor, and to provide amenities and facilities to those who
            can’t afford.
          </p>
          <p className={styles.details}>
            “At Drishti Foundation Foundation our vision is to build an
            inclusive India by pioneering a holistic model to address our
            nation’s multifaceted development challenges, and contribute to its
            collective aspirations. Central to our philosophy is the commitment
            to enhance the quality of life of people from marginalised and
            vulnerable communities, by empowering them and catalysing change
            through innovative and sustainable solutions. Our steadfast
            endeavour is to create replicable and scalable models of development
            through an integrated approach in the true spirit of maximising
            societal value for all, and making it a movement.” We are working in
            India for over a past few years, since 2012 the organization has
            grown both in scope and geographical coverage. we are working for a
            world where all people live in dignity and security. To complete a
            journey, we must step forward first. We continue to do our duty
            quietly and relentlessly and try our level best to solve the
            problems of the society without any hue and cry. Our aim is to wipe
            out the tears of those poor as we do our own.
          </p>
          <p className={styles.details}>
            Facebook: https://www.facebook.com/DrishtiFoundationTrust/
          </p>
          <p className={styles.details}>
            Facebook: https://www.facebook.com/DrishtiFoundationTrust/
          </p>
          <p className={styles.details}>
            Facebook: https://www.facebook.com/DrishtiFoundationTrust/
          </p>
          <p className={styles.details}>
            Facebook: https://www.facebook.com/DrishtiFoundationTrust/
          </p>
        </div>
      </Col>
      <Col lg={3} md={6} sm={12}>
        <HomeRightSection />
      </Col>
    </Row>
  );
};

export default HomeSection;
