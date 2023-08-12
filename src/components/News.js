import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loaading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
    
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      // pageSize: 10
    };
    document.title=`${this.capFirst(this.props.category)} - NewsMonkey`;
  }
  capFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  async componentDidMount(){
    this.newsUpdate();

  }

  async newsUpdate(){
    
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
    
  }

  preClick = async () => {
    await this.setState({
      page: this.state.page-1,
    });
    this.newsUpdate();
  }
  nextClick = async () => {
    
    await this.setState({
      page: this.state.page+1,
    });
    this.newsUpdate();
    
  }
  fetchMoreData = async () => {
    
    const url = await `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  }
  render() {
   
    return (
      <div className="container my-3">
        <h3 className="text-center" style={{margin: '20px 0px'}}>NewsMonkey - Top {this.capFirst(this.props.category)} Headlines</h3>
        {this.state.loading && <Loaading />}
        <div>
          
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Loading />}
          >
            <div className="row">
              {!this.state.loading && this.state.articles.map((element) => {
                return(
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title?element.title: ""}
                      description={element.description?element.description: " "}
                      imgUrl={element.urlToImage?element.urlToImage:'https://t4.ftcdn.net/jpg/02/00/40/11/360_F_200401146_cNHcKZToONyw6t0pXDKXfgeFj8OBE23g.jpg'}
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
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.preClick}>Previous</button>
          <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.nextClick}>Next</button>
        </div> */}
      </div>
    );
  }
}

export default News;
