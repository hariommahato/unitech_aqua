import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";
function CarouselCompo() {
  return (
    <Carousel fade>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="First slide"
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>*/}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="First slide"
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>*/}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.carouselItem}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>*/}
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCompo;
