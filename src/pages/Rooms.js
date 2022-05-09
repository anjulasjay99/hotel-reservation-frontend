import MKBox from "components/MKBox";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./css/Rooms.css";
import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";
import room3 from "./images/room3.jpg";
import room4 from "./images/room4.jpg";
import room5 from "./images/room5.jpg";

function RoomsView() {
  const navigate = useNavigate();

  function ReserveClick(room) {
    navigate("/reserve-room", { state: room });
  }
  const rooms = [
    {
      id: "1",
      title: "Deluxe King Size",
      priceA: "25,000",
      priceC: "10,000",
      image: room1,
      description:
        "Our Deluxe king size room has a seating area, ample storage, digital safe and mini fridge. This room can also be configured with an extra roll-away bed for families of 3.",
      hotelName: "Ponna Shehan Resorts",
    },
    {
      id: "2",
      title: "King Size Sleigh Bed",
      priceA: "35,000",
      priceC: "15,000",
      image: room2,
      description:
        "Our king size sleigh bedded also provides views over landscaped gardens. It has ample storage, a seating area, digital safe and mini fridge.",
      hotelName: "Ponna Shehan Resorts",
    },
    {
      id: "3",
      title: "Compact Double",
      priceA: "45,000",
      priceC: "20,000",
      image: room3,
      description:
        "As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.",
      hotelName: "Ponna Shehan Resorts",
    },
    {
      id: "4",
      title: "Deluxe Twin/Large Double",
      priceA: "45,000",
      priceC: "20,000",
      image: room4,
      description:
        "Our Deluxe Twin/Large Double also provides views over landscaped gardens. It has a seating area, digital safe and mini fridge. This room can be configured with either 2 single beds or zip and linked to provide a large double bed.",
      hotelName: "Ponna Shehan Resorts",
    },
    {
      id: "5",
      title: "King Size Four Poster",
      priceA: "45,000",
      priceC: "20,000",
      image: room5,
      description:
        "Our king size four poster provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge.",
      hotelName: "Ponna Shehan Resorts",
    },
  ];

  return (
    <MKBox component="section" py={12}>
      <div className="Packages">
        <h3 style={{ marginLeft: "30px", marginTop: "30px", fontWeight: "bold", fontSize: "25px" }}>
          Rooms
        </h3>
        <br />
        <br />
        <div className="container">
          {rooms.map((room) => (
            <Card style={{ width: "20rem", margin: "50px", borderRadius: "20px" }} className="Card">
              <CardImg top src={room.image} alt="Product Image" />
              <CardBody className="CardBody">
                <CardTitle style={{ fontWeight: "bold", fontSize: "18px" }}>{room.title}</CardTitle>
                <br />
                <CardText style={{ fontSize: "17px", fontWeight: "bolder" }}>
                  {room.description}
                  <br />
                  <br />
                  <b>Price Adult : </b> Rs. {room.priceA} <br />
                  <b>Price Child : </b> Rs. {room.priceC}
                </CardText>

                <Button
                  color="primary"
                  style={{ float: "right" }}
                  onClick={() => {
                    ReserveClick(room);
                  }}
                >
                  Reserve Room
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </MKBox>
  );
}

export default RoomsView;
