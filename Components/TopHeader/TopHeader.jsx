import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../images/logo.jpeg";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import styles from "./TopHeader.module.css";
import { motion } from "framer-motion";
const TopHeader = () => {
  return (
    <div className={styles.mainDiv}>
      <Row className={styles.row}>
        <Col lg={8} md={6} sm={12} className={styles.logoContainer}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "tween",
              stiffness: 200,
              damping: 40,
            }}
          >
            <Image
              src={logo}
              height={60}
              width={60}
              style={{ borderRadius: "50%" }}
            />
          </motion.div>
          <h4>Aqua Culture Society</h4>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <motion.div
            className={styles.contactContainer}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "tween",
              stiffness: 200,
              damping: 40,
            }}
          >
            <div>
              <BsFillTelephoneFill size={20} color="white" /> 984141414141
            </div>
            <div>
              <AiFillMail size={20} color="white" /> unitechmail@edu.np
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default TopHeader;
