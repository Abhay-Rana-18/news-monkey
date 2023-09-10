import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Loaading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const News = (props) => {
  let [articles, setArticles] = useState([]);
    
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [progress, setProgress] = useState(0);
  let [totalResults, setToatalResults] = useState(0);

  useEffect( () => {
    newsUpdate();
    document.title = `${capFirst(props.category)} - NewsMonkey`;
  }, []);
  
  const capFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  async function newsUpdate() {
    props.setProgress(10); 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setToatalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  }

  const fetchMoreData = async () => {
    setLoading(false);
    const url = await `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&pageSize=${
      props.pageSize
    }&page=${page + 1}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setToatalResults(parsedData.totalResults);
    setPage(page+1);
    
  };

  return (
    <div className="container my-3">

      <h3 className="text-center" style={{ margin: "80px 0px 20px 0px" }}>
        NewsMonkey - Top {capFirst(props.category)} Headlines
      </h3>
      {loading && <Loaading />}
      <div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Loading />}
        >
          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : " "
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://t4.ftcdn.net/jpg/02/00/40/11/360_F_200401146_cNHcKZToONyw6t0pXDKXfgeFj8OBE23g.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
export default News;
