import React, { useState } from "react";
// import PropTypes from "prop-types";

const NewsItems = (props) => {

    return (
      <div className="container">
        <div className="card my-3">
          <img src={props.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}...</p>
            <p className='"card-text'>
              <small className="text-muted">
                By <em>{props.author ? props.author : "unknown"}</em> on{" "}
                {new Date(props.publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={props.newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              Read more
            </a>
            <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`} style={{zIndex: '1'}}>{props.source}</span>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
