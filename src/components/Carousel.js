import React from "react";

import Card from "../components/Card";

import covidcorner from "../assets/images/covidcorner.png";
import profile from "../assets/images/profile.png";
import scope from "../assets/images/scope.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Covid Corner",
          subTitle: "Just straight facts for Covid-19",
          imgSrc: covidcorner,
          link: "https://covidcorner.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "Jessamine Brown",
          subTitle: "GitHub",
          imgSrc: profile,
          link: "https://github.com/brownjessa",
          selected: false,
        },
        {
          id: 2,
          title: "Scope",
          subTitle: "An astrology project",
          imgSrc: scope,
          link: "https://github.com/brownjessa/scope",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
