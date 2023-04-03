import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../images/logo.jpeg";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import styles from "./TopHeader.module.css";
const TopHeader = () => {
  return (
    <div>
      <Row className={styles.row}>
        <Col lg={8} md={6} sm={12} className={styles.logoContainer}>
          <Image
            src={logo}
            height={90}
            width={90}
            style={{ borderRadius: "50%" }}
          />
          <h4>Aqua Culture Society</h4>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <div className={styles.contactContainer}>
            <div>
              <BsFillTelephoneFill size={30} color="#DF2E38" /> 9842634234234234
            </div>
            <div>
              <AiFillMail size={30} color="#DF2E38" /> unitechmail@edu.np
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TopHeader;
