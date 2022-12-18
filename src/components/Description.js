import React from "react";
import "../AppHook.css";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Description = ({ movieList }) => {
  const params = useParams();
  const movie = movieList.find((elm) => elm.id === params.id);
  return (
    <div>
      <Card style={{ width: "45%", margin: "auto", marginTop: 55 }}>
        <Card.Body>
          <Card.Title
            style={{
              backgroundColor: "rgba(80, 31, 160, 0.315)",
              textAlign: "center",
              color: "rgb(255, 255, 255)",
              textShadow: "2px 2px 4px blue",
            }}
          >
            {movie.title}
          </Card.Title>
          <iframe
            width="100%"
            height="300"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            src={movie.trailer}
            title="trailer"
          ></iframe>
          <Card.Text style={{ color: "#F0F8FF" }}>
            {movie.description}
          </Card.Text>

          <hr />
          <Link to={`/`}>
            <Button
              style={{
                backgroundColor: "#7457a7",
                borderColor: "rgba(99,66,156,1)",
                color: "rgb(255, 249, 250)",
                textShadow: "2px 2px 4px rgba(61,34,109,1)",
                marginLeft: 5,
                width: 90,
              }}
            >
              <i class="fa fa-home pink-color" style={{ paddingRight: 5 }}></i>
              Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;
