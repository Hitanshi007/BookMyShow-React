import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Genre() {
  return (
    <div style={{background:"white", padding:"5%"}}>
        <h3>The Best of Entertainment</h3>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-light" style={{height:"225px", width:"225px",}}>
                        <Card.Img src="./cc1.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc2.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc3.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc5.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc6.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-light text-white" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc4.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc7.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc8.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px",}}>
                        <Card.Img src="./cc9.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                    <Card className="bg-light" style={{height:"225px", width:"225px"}}>
                        <Card.Img src="./cc10.jpg" alt="Card image" style={{height:"225px", width:"225px", alignSelf:"center"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Genre;