import React from "react";
import { Carousel } from "react-bootstrap";
import bennar1 from "../../../Images/Bennar/bennar (1).jpg";
import bennar2 from "../../../Images/Bennar/bennar (2).jpg";
import bennar3 from "../../../Images/Bennar/bennar (3).jpg";
import bennar4 from "../../../Images/Bennar/bennar (4).jpg";

const Bennar = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img style={{height:'500px'}}
          className="d-block w-100"
          src={bennar1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={{height:'500px'}}
          className="d-block w-100"
          src={bennar2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100"
          src={bennar4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Bennar;
