import React from "react";
import styles from "./Approach.module.css";
import TopImageComponent from "@/Components/TopImageComponent";
import { Col, Row } from "react-bootstrap";
import HomeRightSection from "@/Components/HomeRightSection";
import Image from "next/image";
const Approach = () => {
  return (
    <div>
      <TopImageComponent title={"Our Approach"} />
      <Row className={styles.mainDiv}>
        <Col lg={9} md={6} sm={12}>
          <div className={styles.imageContainer}>
            <Image
              src={
                "https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
              width="0"
                height="0"
                sizes="100vw"
                className={styles.image}
            />
          </div>

          <div className={styles.detailContainer}>
            <div>
              <h5 className={styles.heading}>Core Values adn Work Ethics</h5>
              <ul>
                <li>Beneficiary Focus</li>
                <li>Respect and Care for all</li>
                <li>Meet Commitments in our dealings</li>
                <li>Display Integrity in our dealings</li>
                <li>Meet Commitments in our dealings</li>
              </ul>
            </div>
            <div>
              <h5 className={styles.heading}>Code of Conduct</h5>
              <ul>
                <li>
                  Our Board ensures our organization’s compliance with
                  applicable laws and regulations of the land including
                  applicable anti-bribery and anti-corruption laws and
                  regulations and obtain all statutory approvals required to
                  carry out its activities;
                </li>
                <li>
                  Our Board ensures our organization’s compliance with
                  applicable laws and regulations of the land including
                  applicable anti-bribery and anti-corruption laws and
                  regulations and obtain all statutory approvals required to
                  carry out its activities;
                </li>
                <li>
                  Our Board ensures our organization’s compliance with
                  applicable laws and regulations of the land including
                  applicable anti-bribery and anti-corruption laws and
                  regulations and obtain all statutory approvals required to
                  carry out its activities;
                </li>
                <li>
                  Our Board ensures our organization’s compliance with
                  applicable laws and regulations of the land including
                  applicable anti-bribery and anti-corruption laws and
                  regulations and obtain all statutory approvals required to
                  carry out its activities;
                </li>
                <li>
                  Our Board ensures our organization’s compliance with
                  applicable laws and regulations of the land including
                  applicable anti-bribery and anti-corruption laws and
                  regulations and obtain all statutory approvals required to
                  carry out its activities;
                </li>
                <li>
                  Our Board ensures our organization’s compliance with
                  applicable laws and regulations of the land including
                  applicable anti-bribery and anti-corruption laws and
                  regulations and obtain all statutory approvals required to
                  carry out its activities;
                </li>
              </ul>
            </div>
            <div>
              <h5 className={styles.heading}>Our Approach</h5>

              <p>
                DFT focuses on developing the potential of marginalised women
                and girls to drive equitable changes through programmes which
                deliver quality healthcare, inclusive education, gender
                equitable and sustainable livelihood opportunities and disaster
                relief and preparedness. Our Approach combines these like
                Humanitarian, Respect, Impact, Professional, Inclusive,
                Impartial, Professional etc.
              </p>
            </div>
            <div>
              <h5 className={styles.heading}>Humanitarian</h5>

              <p>
              We believe in the provision of humanitarian assistance to people wherever it is needed to relieve suffering and sickness.
              </p>
            </div>
            <div>
              <h5 className={styles.heading}>Professional</h5>

              <p>
              We believe in the provision of humanitarian assistance to people wherever it is needed to relieve suffering and sickness.
              </p>
            </div>
            <div>
              <h5 className={styles.heading}>Impartial</h5>

              <p>
              We believe in the provision of humanitarian assistance to people wherever it is needed to relieve suffering and sickness.
              </p>
            </div>
            <div>
              <h5 className={styles.heading}>Inclusive</h5>

              <p>
              We believe in the provision of humanitarian assistance to people wherever it is needed to relieve suffering and sickness.
              </p>
            </div>
            <div>
              <h5 className={styles.heading}>Impact</h5>

              <p>
              We believe in the provision of humanitarian assistance to people wherever it is needed to relieve suffering and sickness.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <HomeRightSection />
        </Col>
      </Row>
    </div>
  );
};

export default Approach;
