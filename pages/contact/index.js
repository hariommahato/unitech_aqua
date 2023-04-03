import Image from "next/image";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./Contact.module.css";
import HomeRightSection from "@/Components/HomeRightSection";
import TopImageComponent from "@/Components/TopImageComponent";
import Layout from "@/Components/Layout";

const contact = () => {
  return (
    <Layout>
      <TopImageComponent title={"Contact Us"} />
      <Row className={styles.mainDiv}>
        <Col lg={9} md={6} sm={12}>
          <div className={styles.formContainer}>
            <div>
              <Form.Control type="text" placeholder="Enter FirstName" />
            </div>
            <div>
              <Form.Control type="text" placeholder="Enter LastName" />
            </div>
            <div>
              <Form.Control type="text" placeholder="Enter Email" />
            </div>
            <div>
              <Form.Control type="text" placeholder="Enter Phone" />
            </div>
            <div>
              <Form.Control type="text" placeholder="Company" />
            </div>
            <div>
              <Form.Control type="text" placeholder="City" />
            </div>
            <div>
              <Form.Control type="text" placeholder="City" as={"textarea"} />
            </div>
            <div>
              <Button style={{ width: "100%" }}>Submit</Button>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <HomeRightSection />
        </Col>
      </Row>
    </Layout>
  );
};

export default contact;
