import React from "react";
import "../AppHook.css";
import Form from "react-bootstrap/Form";
const Filter = ({ handleSearch, handleRateSearch }) => {
  return (
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
        Search a Movie{" "}
      </h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search by title : </Form.Label>
          <Form.Control
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="Enter the movie 's title"
            style={{
              textAlign: "center",
              height: 30,
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Search by rate : </Form.Label>
          <Form.Control
            onChange={(e) => handleRateSearch(e.target.value)}
            type="text"
            placeholder="Enter the movie 's rate"
            style={{
              textAlign: "center",
              height: 30,
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filter;
