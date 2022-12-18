import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { Rating } from "react-simple-star-rating";

const MovieCard = ({ elem, handleDelete }) => {
  return (
    <div>
      <Card style={{ width: "20rem", margin: 30 }}>
        <Card.Img variant="top" src={elem.urlPoster} style={{ height: 500 }} />
        <Card.Body>
          <Card.Title
            style={{
              backgroundColor: "rgba(80, 31, 160, 0.315)",
              textAlign: "center",
              color: "rgb(255, 255, 255)",
              textShadow: "2px 2px 4px blue",
            }}
          >
            {elem.title}
          </Card.Title>
          <Card.Text>{elem.description}</Card.Text>
          <Rating initialValue={elem.rating} size={30} readonly />
          <hr />

          <Link to={`/Description/${elem.id}`}>
            <Button
              style={{
                backgroundColor: "#7457a7",
                borderColor: "rgba(99,66,156,1)",
                color: "rgb(255, 249, 250)",
                textShadow: "2px 2px 4px rgba(61,34,109,1)",
                marginLeft: 5,
                width: 75,
              }}
            >
              Trailer
            </Button>
          </Link>
          <Button
            variant="primary"
            style={{
              backgroundColor: "rgb(151, 31, 32)",
              borderColor: "rgb(72, 21, 40)",
              color: "rgb(255, 249, 250)",
              textShadow: "2px 2px 4px rgb(96, 11, 13)",
              marginLeft: 125,
              width: 75,
            }}
            onClick={() => handleDelete(elem)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
