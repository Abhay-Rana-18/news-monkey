import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } = this.props;
    return (
      <div className="container">
        <div className="card my-3">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='"card-text'>
              <small className="text-muted">
                By <em>{author ? author : "unknown"}</em> on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              Read more
            </a>
            <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`} style={{zIndex: '1'}}>{source}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
