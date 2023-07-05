import "../../index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { CAROUSAL1_url, CAROUSAL2_url, CAROUSAL3_url } from "../utils/constant";

export function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img id="banner_img"
            className="d-block w-100"
            src={CAROUSAL1_url}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img id="banner_img"
            className="d-block w-100"
            src={CAROUSAL2_url}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img id="banner_img"
            className="d-block w-100"
            src={CAROUSAL3_url}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }