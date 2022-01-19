import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{background:"white", padding:"5%"}}>
        <h3><b>Recommended Movies</b></h3>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"400px"}}>
                        <Card.Img src="./img1.jpg" alt="Card image" style={{height:"300px", width:"400px", alignSelf:"center"}}/>
                        <Card.ImgOverlay>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"400px"}}>
                        <Card.Img src="./img2.jpg" alt="Card image" style={{height:"300px", width:"400px", alignSelf:"center"}}/>
                        <Card.ImgOverlay>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"400px"}}>
                        <Card.Img src="./img3.jpg" alt="Card image" style={{height:"300px", width:"400px", alignSelf:"center"}}/>
                        <Card.ImgOverlay>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"400px"}}>
                        <Card.Img src="./img4.jpg" alt="Card image" style={{height:"300px", width:"400px", alignSelf:"center"}}/>
                        <Card.ImgOverlay>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"400px"}}>
                        <Card.Img src="./img5.jpg" alt="Card image" style={{height:"300px", width:"400px", alignSelf:"center"}}/>
                        <Card.ImgOverlay>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"400px"}}>
                        <Card.Img src="./img6.jpg" alt="Card image" style={{height:"300px", width:"400px", alignSelf:"center"}}/>
                        <Card.ImgOverlay>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;