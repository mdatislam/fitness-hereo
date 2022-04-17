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
        <img style={{height:'550px'}}
          className="d-block w-100"
          src={bennar1}
          alt="First slide"
        />
        <Carousel.Caption className="rounded-pill bg-dark bg-gradient py-2 w-50 mx-auto" >
          <h3 >Get Into The Shape </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={{height:'550px'}}
          className="d-block w-100"
          src={bennar2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="rounded-pill bg-dark bg-gradient py-2 w-50 mx-auto">Health Power Happiness</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'550px'}}
          className="d-block w-100"
          src={bennar4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="rounded-pill bg-dark bg-gradient py-2 w-50 mx-auto">Stronger-Healthier</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Bennar;
