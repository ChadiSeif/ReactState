import React from "react";
import ImageSrc from "./../assets/elonmusk.jpg";
import { Card, Button } from "react-bootstrap";
import "./Person.css";

class Person extends React.Component {
  state = {
    timer: 0,
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="Profil">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ImageSrc} alt="imageprofil" />
          <Card.Body>
            <Card.Title>Elon Musk</Card.Title>
            <Card.Text>
              Born June 28, 1971 (age 49) Pretoria, South Africa
            </Card.Text>
            <Card.Text>
              Profession : Founder, CEO and Chief Engineer of SpaceX ; CEO and
              product architect of Tesla, Inc.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <h3>Seconds passed ={this.state.timer} </h3>
      </div>
    );
  }
}

export default Person;
