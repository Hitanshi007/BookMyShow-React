import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pic1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pic2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;