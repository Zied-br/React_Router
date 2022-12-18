import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../AppHook.css";
import Filter from "./Filter";

const AddMovie = ({ handleAdd, handleSearch, handleRateSearch }) => {
  const [inputs, setInputs] = useState({
    id: v4(),
    title: "",
    description: "",
    urlPoster: "",
    rating: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const AddingMovie = () => {
    handleAdd(inputs);
    setInputs({
      id: v4(),
      title: "",
      description: "",
      urlPoster: "",
      rating: "",
    });
    document.getElementById("form").reset();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: 30,
      }}
    >
      <div className="form">
        {" "}
        <h2
          style={{
            marginBottom: 20,
            color: "white",

            textShadow: "3px 2px 4px grey",
          }}
        >
          {" "}
          Add a Movie{" "}
        </h2>
        <Form id="form">
          <Form.Group className="mb-3">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Enter the movie 's title"
              style={{ height: 30, textAlign: "center" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description : </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="description"
              type="text"
              placeholder="Enter the movie 's description"
              style={{ height: 30, textAlign: "center" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Poster url : </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="urlPoster"
              type="text"
              placeholder="Enter the movie 's url poster"
              style={{ height: 30, textAlign: "center" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ width: 130 }}>Rate : </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="rating"
              type="number"
              max={5}
              min={0}
              placeholder="0"
              style={{
                height: 30,
                width: 60,

                textAlign: "center",
              }}
            />
          </Form.Group>
          <Button
            onClick={AddingMovie}
            variant="primary"
            style={{
              backgroundColor: "#7457a7",
              borderColor: "rgba(99,66,156,1)",
              color: "rgb(255, 249, 250)",
              textShadow: "2px 2px 4px rgba(61,34,109,1)",
              marginLeft: "50%",
            }}
          >
            Add Movie
          </Button>
        </Form>
      </div>
      <div>
        <Filter
          handleSearch={handleSearch}
          handleRateSearch={handleRateSearch}
        />
      </div>
    </div>
  );
};

export default AddMovie;
