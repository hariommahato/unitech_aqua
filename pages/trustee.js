import Image from "next/image";
import React from "react";
import styles from "../styles/Trustee.module.css";
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";
import TopImageComponent from "@/Components/TopImageComponent";
import Layout from "@/Components/Layout";


const trustee = () => {
  return (
    <Layout>
     <TopImageComponent title="Trustee"/>
      <Row className={styles.mainRow}>
        <Col lg={9} md={6} sm={12}>
          <div className={styles.imageContainer}>
            <div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                }
                width="0"
                height="0"
                sizes="100vw"
                className={styles.image}
              />
            </div>
            <div>
              <p className={styles.paragraph}>
                Dinesh Kr. Gautam (Managing Trustee)
              </p>
            </div>
            <p>
              Dinesh Kumar Gautam is the founding member & Guiding light of
              Drishti Foundation Trust and is equipped with his years of
              experience in Media, Journalism, Social activism and CSR
              consultancy. He has closely worked with different Media outfits
              and has been associated with various intellectuals from the field
              of Politics, Bureaucrats, Journalism, and other Social Activists
              alike. Dinesh aims to eliminate the roadblocks to the social and
              economic development of the less advantaged section of the society
              and remove the social divide by providing them the access to
              resources and facilities. He leads the planning and execution of
              social activities of the Drishti Foundation Trust. DFT has won
              several awards and recognition for its initiatives under his able
              guidance and direction.
            </p>

            <div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                }
                width="0"
                height="0"
                sizes="100vw"
                className={styles.image}
              />
            </div>
            <div>
              <p className={styles.paragraph}>
                Dinesh Kr. Gautam (Managing Trustee)
              </p>
            </div>
            <p>
              Dinesh Kumar Gautam is the founding member & Guiding light of
              Drishti Foundation Trust and is equipped with his years of
              experience in Media, Journalism, Social activism and CSR
              consultancy. He has closely worked with different Media outfits
              and has been associated with various intellectuals from the field
              of Politics, Bureaucrats, Journalism, and other Social Activists
              alike. Dinesh aims to eliminate the roadblocks to the social and
              economic development of the less advantaged section of the society
              and remove the social divide by providing them the access to
              resources and facilities. He leads the planning and execution of
              social activities of the Drishti Foundation Trust. DFT has won
              several awards and recognition for its initiatives under his able
              guidance and direction.
            </p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <HomeRightSection />
        </Col>
      </Row>
    </Layout>
  );
};

export default trustee;
