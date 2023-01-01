import React from "react";
import { Button } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
const Card = ({ quote, quote1 }) => {
  return (
    <div>
      {" "}
      <div className="card my-3 p-3 rounded">
        <div className="mt-5">
          <div className="card-body">
            {" "}
            <span>
              {" "}
              <FaQuoteLeft />
              <h4 className="fw-bold lh-base">{quote}</h4>
              <p className="mt-1 fw-bold">{quote1}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
