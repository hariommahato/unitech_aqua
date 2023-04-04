import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import logo from "../../images/logo.png";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.topHeader}>
      <Row className={styles.mainDiv}>
        <Col sm={12} md={6} lg={4}>
          <h5>Aqua Culture Society</h5>
          <div>
            <p>
              AquaCulture is an umbrella organization of NGOs working in various
              fields of social welfare and development. Established in 1991 for
              the promotion and protection of social justice, human rights and
            </p>
          </div>
          <div>
            <AiFillFacebook size={25} color="black" />
            <AiFillTwitterCircle size={25} color="black" />
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h5>Useful Links</h5>
          <div>
            <ul className={styles.list}>
              <li className={styles.item}>Home</li>
              <li className={styles.item}>AboutUs</li>
              <li className={styles.item}>Our Story</li>
              <li className={styles.item}>Our Story</li>
            </ul>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div>
            <h5>Contact</h5>
            <div>
              <h6>AquaCultureSociety</h6>
            </div>
            <div>
              <div>
                <BsFillTelephoneFill size={20} color="black" />
                01,888888,9841238706
              </div>
              <div>
                <AiFillMail size={20} color="black" />
                unitechitsolution@gmail.com
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
