import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background:"rgb(43, 49, 72)", padding:"5%"}}>
        <h2 style={{color:"white"}}>Premieres</h2>
        <h6 style={{color:"white"}}>Brand New Releases every Friday</h6>
        <Carousel indicators={false} variant="dark">
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./p1.jpg"/>
                        <Card.Body>
                            <Card.Title>The Investigation</Card.Title>
                            <Card.Text>
                                Danish
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./p2.jpg" />
                        <Card.Body>
                            <Card.Title>Ghostbusters: Afterlife</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./p3.jpg" />
                        <Card.Body>
                            <Card.Title>Spencer</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./p4.jpg" />
                        <Card.Body>
                            <Card.Title>Shane</Card.Title>
                            <Card.Text>English</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./p5.jpg" />
                        <Card.Body>
                            <Card.Title>Kajillionaire</Card.Title>
                            <Card.Text>English</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./p6.jpg" />
                        <Card.Body>
                            <Card.Title>Fast and Furious 9</Card.Title>
                            <Card.Text>English</Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;